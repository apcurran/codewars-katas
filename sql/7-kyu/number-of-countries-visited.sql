SELECT
    people.name AS name,
    COUNT(DISTINCT visits.country_id) AS countries_visited
FROM people
LEFT JOIN visits ON people.id = visits.person_id
GROUP BY people.name
ORDER BY
    countries_visited DESC,
    name ASC;