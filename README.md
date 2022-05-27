# MealDB API

## URL
```
https://meal-db-api.herokuapp.com/
```

## Endpoints
```
GET /search/all
GET /serch/meal
GET /search/meal/random
GET /search/ingredients
```

# Retrieve All Meals

## GET '/search/all'
```
curl --location --request GET 'https://meal-db-api.herokuapp.com/search/all'
```

## Response
```json
[
    {
        "id": "52865",
        "source": {
            "idMeal": "52865",
            "strMeal": "Matar Paneer",
            "strDrinkAlternate": null,
            "strCategory": "Vegetarian",
            "strArea": "Indian",
            "strInstructions": "Heat the oil in a frying pan over high heat until it’s shimmering hot. Add the paneer, then turn the heat down a little. Fry until it starts to brown at the edges, then turn it over and brown on each side – the paneer will brown faster than you think, so don’t walk away. Remove the paneer from the pan and drain on kitchen paper.\r\nPut the ginger, cumin, turmeric, ground coriander and chilli in the pan, and fry everything for 1 min. Add the tomatoes, mashing them with the back of a spoon and simmer everything for 5 mins until the sauce smells fragrant. Add a splash of water if it’s too thick. Season well. Add the peas and simmer for a further 2 mins, then stir in the paneer and sprinkle over the garam masala. Divide between two bowls, top with coriander leaves and serve with naan bread, roti or rice.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
            "strTags": "Curry,Vegetarian",
            "strYoutube": "https://www.youtube.com/watch?v=wlseYNqwLNs",
            "strIngredient1": "Sunflower Oil",
            "strIngredient2": "Paneer",
            "strIngredient3": "Ginger",
            "strIngredient4": "Cumin",
            "strIngredient5": "Turmeric",
            "strIngredient6": "Coriander",
            "strIngredient7": "Green Chilli",
            "strIngredient8": "Tomato",
            "strIngredient9": "Peas",
            "strIngredient10": "Garam Masala",
            "strIngredient11": "Coriander",
            "strIngredient12": "Naan Bread",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "1 tbls",
            "strMeasure2": "225g",
            "strMeasure3": "2",
            "strMeasure4": "1 tsp ",
            "strMeasure5": "1 tsp ",
            "strMeasure6": "1 tsp ",
            "strMeasure7": "1",
            "strMeasure8": "4 large",
            "strMeasure9": "150g",
            "strMeasure10": "1 tsp ",
            "strMeasure11": "Small bunch",
            "strMeasure12": "to serve",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": "",
            "strMeasure17": "",
            "strMeasure18": "",
            "strMeasure19": "",
            "strMeasure20": "",
            "strSource": "https://www.bbcgoodfood.com/recipes/matar-paneer",
            "strImageSource": null,
            "strCreativeCommonsConfirmed": null,
            "dateModified": null
        }
    },
    ...
]
```

# Retrieve Meal by Name

## GET '/serch/meal'
```
curl --location --request GET 'https://meal-db-api.herokuapp.com/search/meal?name=ham'
```

## Parameters
| Parameter | Type | Tags | Description |
| --- | --- | --- | ---|
| `name` | `string` | Query, Required | Search meal by name |

## Response
```json
[
    {
        "id": "53038",
        "source": {
            "idMeal": "53038",
            "strArea": "Irish",
            "strMeal": "Mustard champ",
            "strTags": null,
            "strSource": "https://www.bbcgoodfood.com/recipes/mustard-champ",
            "strYoutube": "https://www.youtube.com/watch?v=_iKllHSC978",
            "strCategory": "Side",
            "strMeasure1": "1kg",
            "strMeasure2": "200ml",
            "strMeasure3": "50g",
            "strMeasure4": "2 tbs",
            "strMeasure5": "Bunch",
            "strMeasure6": "Bunch",
            "strMeasure7": " ",
            "strMeasure8": " ",
            "strMeasure9": " ",
            "dateModified": null,
            "strMealThumb": "https://www.themealdb.com/images/media/meals/o7p9581608589317.jpg",
            "strMeasure10": " ",
            "strMeasure11": " ",
            "strMeasure12": " ",
            "strMeasure13": " ",
            "strMeasure14": " ",
            "strMeasure15": " ",
            "strMeasure16": " ",
            "strMeasure17": " ",
            "strMeasure18": " ",
            "strMeasure19": " ",
            "strMeasure20": " ",
            "strImageSource": null,
            "strIngredient1": "Potatoes",
            "strIngredient2": "Milk",
            "strIngredient3": "Butter",
            "strIngredient4": "Mustard",
            "strIngredient5": "Spring Onions",
            "strIngredient6": "Spring Onions",
            "strIngredient7": "",
            "strIngredient8": "",
            "strIngredient9": "",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strInstructions": "STEP 1\r\nBoil the potatoes for 15 mins or until tender. Drain, then mash.\r\n\r\nSTEP 2\r\nHeat the milk and half the butter in the corner of the pan, then beat into the mash, along with the wholegrain mustard.\r\n\r\nSTEP 3\r\nGently fry the spring onions in the remaining butter for 2 mins until just soft but still a perky green. Fold into the mash and serve. Great with gammon or to top a fish pie.",
            "strDrinkAlternate": null,
            "strCreativeCommonsConfirmed": null
        }
    },
    ...
]
```

# Retrieve Random Meal

## GET '/search/meal/random'
```
curl --location --request GET 'https://meal-db-api.herokuapp.com/search/meal/random'
```

## Response
```json
{
    "id": "52768",
    "source": {
        "idMeal": "52768",
        "strMeal": "Apple Frangipan Tart",
        "strDrinkAlternate": null,
        "strCategory": "Dessert",
        "strArea": "British",
        "strInstructions": "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
        "strTags": "Tart,Baking,Fruity",
        "strYoutube": "https://www.youtube.com/watch?v=rp8Slv4INLk",
        "strIngredient1": "digestive biscuits",
        "strIngredient2": "butter",
        "strIngredient3": "Bramley apples",
        "strIngredient4": "butter, softened",
        "strIngredient5": "caster sugar",
        "strIngredient6": "free-range eggs, beaten",
        "strIngredient7": "ground almonds",
        "strIngredient8": "almond extract",
        "strIngredient9": "flaked almonds",
        "strIngredient10": "",
        "strIngredient11": "",
        "strIngredient12": "",
        "strIngredient13": "",
        "strIngredient14": "",
        "strIngredient15": "",
        "strIngredient16": null,
        "strIngredient17": null,
        "strIngredient18": null,
        "strIngredient19": null,
        "strIngredient20": null,
        "strMeasure1": "175g/6oz",
        "strMeasure2": "75g/3oz",
        "strMeasure3": "200g/7oz",
        "strMeasure4": "75g/3oz",
        "strMeasure5": "75g/3oz",
        "strMeasure6": "2",
        "strMeasure7": "75g/3oz",
        "strMeasure8": "1 tsp",
        "strMeasure9": "50g/1¾oz",
        "strMeasure10": "",
        "strMeasure11": "",
        "strMeasure12": "",
        "strMeasure13": "",
        "strMeasure14": "",
        "strMeasure15": "",
        "strMeasure16": null,
        "strMeasure17": null,
        "strMeasure18": null,
        "strMeasure19": null,
        "strMeasure20": null,
        "strSource": null,
        "strImageSource": null,
        "strCreativeCommonsConfirmed": null,
        "dateModified": null
    }
}
```

# Retrieve Meal by Ingredients

## GET '/search/ingredients'
```
curl --location -g --request GET 'https://meal-db-api.herokuapp.com/search/ingredients?include=["garlic"]&exclude=["tomato"]'
```

## Parameters
| Parameter | Type | Tags | Description |
| --- | --- | --- | ---|
| `include` | `array of strings` | Query | Include ingredients in serach |
| `exclude` | `array of strings` | Query | Exclude ingredients in serach |


## Response
```json
[
    {
        "id": "52865",
        "source": {
            "idMeal": "52865",
            "strMeal": "Matar Paneer",
            "strDrinkAlternate": null,
            "strCategory": "Vegetarian",
            "strArea": "Indian",
            "strInstructions": "Heat the oil in a frying pan over high heat until it’s shimmering hot. Add the paneer, then turn the heat down a little. Fry until it starts to brown at the edges, then turn it over and brown on each side – the paneer will brown faster than you think, so don’t walk away. Remove the paneer from the pan and drain on kitchen paper.\r\nPut the ginger, cumin, turmeric, ground coriander and chilli in the pan, and fry everything for 1 min. Add the tomatoes, mashing them with the back of a spoon and simmer everything for 5 mins until the sauce smells fragrant. Add a splash of water if it’s too thick. Season well. Add the peas and simmer for a further 2 mins, then stir in the paneer and sprinkle over the garam masala. Divide between two bowls, top with coriander leaves and serve with naan bread, roti or rice.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
            "strTags": "Curry,Vegetarian",
            "strYoutube": "https://www.youtube.com/watch?v=wlseYNqwLNs",
            "strIngredient1": "Sunflower Oil",
            "strIngredient2": "Paneer",
            "strIngredient3": "Ginger",
            "strIngredient4": "Cumin",
            "strIngredient5": "Turmeric",
            "strIngredient6": "Coriander",
            "strIngredient7": "Green Chilli",
            "strIngredient8": "Tomato",
            "strIngredient9": "Peas",
            "strIngredient10": "Garam Masala",
            "strIngredient11": "Coriander",
            "strIngredient12": "Naan Bread",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "1 tbls",
            "strMeasure2": "225g",
            "strMeasure3": "2",
            "strMeasure4": "1 tsp ",
            "strMeasure5": "1 tsp ",
            "strMeasure6": "1 tsp ",
            "strMeasure7": "1",
            "strMeasure8": "4 large",
            "strMeasure9": "150g",
            "strMeasure10": "1 tsp ",
            "strMeasure11": "Small bunch",
            "strMeasure12": "to serve",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": "",
            "strMeasure17": "",
            "strMeasure18": "",
            "strMeasure19": "",
            "strMeasure20": "",
            "strSource": "https://www.bbcgoodfood.com/recipes/matar-paneer",
            "strImageSource": null,
            "strCreativeCommonsConfirmed": null,
            "dateModified": null
        }
    }
]
```