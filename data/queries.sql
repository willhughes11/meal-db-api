select * from meals m ;

select * 
from meals m 
where exists (select * 
              from json_each_text(m.source) as x(ky,val)
              where x.val similar to '%garlic%');


select a.id,a.source from (
select * 
from meals m
where exists (select * 
              from json_each_text(m.source) as x(ky,val) 
             where x.ky like 'strIngredient%' and x.val ilike any(array['']))
) as a
join (
select * from (
	select * 
	from meals b 
	where not exists (select * 
              	from json_each_text(b.source) as x(ky,val) 
            	where x.ky like 'strIngredient%' and x.val ilike any(array['garlic'])) 
) as b
) as c
on a.id = c.id

select * from meals m 
                where exists (select * 
                from json_each_text(m.source) as x(ky,val) 
                where x.ky like 'strIngredient%' and lower(x.val) similar to '%(garlic)%')

select * from meals m, json_each_text(m.source) as x(ky,val) where ky like 'strIngredient%' and val not ilike any(array['garlic']) and val not ilike any(array['olive oil']);

select * 
from meals m 
where exists (select ky,val from meals m, json_each_text(m.source) as x(ky,val) where ky like 'strIngredient%' and val similar to '%chopped%');