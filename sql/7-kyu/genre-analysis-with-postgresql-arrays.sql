SELECT
    unnest(genres) AS genre,
    COUNT(*) AS count,
    array_agg(title ORDER BY title) AS books
FROM books
GROUP BY genre
ORDER BY count DESC, genre;
