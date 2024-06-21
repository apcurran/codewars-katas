SELECT
    books.book_id,
    books.title
FROM books
INNER JOIN loans
    ON books.book_id = loans.book_id
GROUP BY books.book_id
HAVING EVERY(loans.return_date IS NOT NULL)
ORDER BY books.book_id DESC;
