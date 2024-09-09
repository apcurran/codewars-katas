SELECT DISTINCT city_name
FROM stations
WHERE city_name SIMILAR TO '(A|E|I|O|U)%' -- postgres regex SIMILAR TO (akin to LIKE, but for regex patterns)
ORDER BY city_name ASC;
