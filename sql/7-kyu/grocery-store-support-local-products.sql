SELECT
    products.country,
    COUNT(*) AS products
FROM products
WHERE products.country IN('United States of America', 'Canada')
GROUP BY products.country
ORDER BY products DESC;
