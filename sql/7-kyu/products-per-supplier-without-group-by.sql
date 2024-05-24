SELECT
    DISTINCT supplier_id,
    COUNT(id) OVER(PARTITION BY supplier_id) AS total_products
FROM products
ORDER BY supplier_id DESC;
