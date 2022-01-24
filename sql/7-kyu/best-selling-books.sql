SELECT
    books.name,
    books.author,
    books.copies_sold
FROM books
ORDER BY books.copies_sold DESC
LIMIT 5;