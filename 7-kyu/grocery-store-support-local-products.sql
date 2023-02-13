SELECT
    COUNT(*) AS products,
    products.country
FROM products
WHERE products.country IN('United States of America', 'Canada')
GROUP BY products.country
ORDER BY products DESC;
