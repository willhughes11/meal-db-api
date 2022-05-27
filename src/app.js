require('dotenv').config({ path: `${__dirname}/../.env`});
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
    extended: true,
  })
);
app.use(cors());
const url = require('url');
const superagent = require('superagent');
const pgsql = require('./pgsql')
const format = require('pg-format');
const pool = pgsql.pool
const port = process.env.PORT || 3000

const getMealByName = async (request, response) => {
    const urlParts = url.parse(request.url, true)
    const query = urlParts.query
    const name = query.name

    if (!name) {
        response.status(400).json({
            "status": 400,
            "message": "Name required"
        })
    } else {
        try {
            const res = await superagent.get(`www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
            const statusCode = res.statusCode
            const body = res.body;

            let meals = []
            for (const meal of body['meals']) {
                const id = meal['idMeal']
                const source = meal
                meals.push([parseInt(id),source])
            }

            await pool.query(format(`insert into meals (id,source) values %L on conflict (id) do update set id = excluded.id RETURNING *`, meals), async (error,results) => {
                if (error) {
                    console.log(error)
                    response.sendStatus(500)
                } else {
                    const data = results.rows
                    response.status(statusCode).json(data)
                }
            });
        } catch (err) {
            console.warn(err)
            response.sendStatus(500)
        }
    }
}

const getRandomMeal = async (request, response) => {
    try {
        const res = await superagent.get(`www.themealdb.com/api/json/v1/1/random.php`);
        const statusCode = res.statusCode
        const body = res.body;
        const meals = body['meals']
        const id = meals[0]['idMeal']
        const source = meals[0]

        await pool.query(`insert into meals (id,source) values ($1,$2) on conflict (id) do update set id = $1 RETURNING *`, [id,source],async (error,results) => {
            if (error) {
                console.log(error)
                response.sendStatus(500)
            } else {
                const data = results.rows[0]
                response.status(statusCode).json(data)
            }
        });
    } catch (err) {
        console.warn(err)
        response.sendStatus(500)
    }
}

const getAllMeals = async (request,response) => {
    await pool.query(`select * from meals;`,async (error,results) => {
        if (error) {
            console.log(error)
            response.sendStatus(500)
        } else {
            const data = results.rows
            response.status(200).json(data)
        }
    });
}

const getIngredients = async (request,response) => {
    const urlParts = url.parse(request.url, true)
    const query = urlParts.query
    let include = query.include
    let exclude = query.exclude

    try{include = valueStringToArray(include)} catch {include = undefined}
    try{exclude = valueStringToArray(exclude)} catch {exclude = undefined}

    if ((!include && !exclude)) {
        response.status(400).json({
            "status": 400,
            "message": "Included or excluded ingredients required"
        })
    } else {
        if (!exclude){
            try {
                include = `%(${include.join('|')})%`
                await pool.query(`select * from meals m 
                                    where exists (select * 
                                    from json_each_text(m.source) as x(ky,val) 
                                    where x.ky like 'strIngredient%' and lower(x.val) similar to $1);`, [include], async (error,results) => {
                    if (error) {
                        console.log(error)
                        response.sendStatus(500)
                    } else {
                        const data = results.rows
                        if (results.rowCount === 0){
                            response.sendStatus(404)
                        } else {
                            response.status(200).json(data)
                        }
                    }
                });
            } catch (err) {
                console.warn(err)
                response.sendStatus(500)
            }
        } else {
            try {
                include = include !== undefined ? include : ['']
                include = `%(${include.join('|')})%`
                exclude = `%(${exclude.join('|')})%`
                await pool.query(`select a.id,a.source from (
                                    select * 
                                    from meals m
                                    where exists (select * 
                                                  from json_each_text(m.source) as x(ky,val) 
                                                 where x.ky like 'strIngredient%' and lower(x.val) similar to $1)
                                    ) as a
                                    join (
                                    select * from (
                                        select * 
                                        from meals b 
                                        where not exists (select * 
                                                      from json_each_text(b.source) as x(ky,val) 
                                                    where x.ky like 'strIngredient%' and lower(x.val) similar to $2) 
                                    ) as b
                                    ) as c
                                    on a.id = c.id`, [include,exclude], async (error,results) => {
                    if (error) {
                        console.log(error)
                        response.sendStatus(500)
                    } else {
                        const data = results.rows
                        if (results.rowCount === 0){
                            response.sendStatus(404)
                        } else {
                            response.status(200).json(data)
                        }
                    }
                });
            } catch (err) {
                console.warn(err)
                response.sendStatus(500)
            }
        }
    }
}

const valueStringToArray = (valueString) => {
    return valueString.substr(0, valueString.length - 1).substr(1).replace(/['"]+/g, '').split(',');
}

app.get('/search/meal', getMealByName);
app.get('/search/meal/random', getRandomMeal);
app.get('/search/all', getAllMeals);
app.get('/search/ingredients', getIngredients);

app.get('/', (request, response) => {
    response.json({ info: 'Meal DB API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})