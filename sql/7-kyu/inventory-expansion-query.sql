SELECT
    product_id,
    product_name,
    quantity_in_stock
FROM products
CROSS JOIN generate_series(1, quantity_in_stock)
ORDER BY product_id DESC;
