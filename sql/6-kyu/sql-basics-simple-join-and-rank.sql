SELECT
    people.id,
    people.name,
    COUNT(people.id) AS sale_count,
    RANK() OVER(ORDER BY COUNT(people.id) DESC) AS sale_rank
FROM people
INNER JOIN sales
    ON people.id = sales.people_id
GROUP BY people.id;
