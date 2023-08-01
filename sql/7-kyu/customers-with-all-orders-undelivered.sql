SELECT customer_id
FROM orders
GROUP BY customer_id
HAVING EVERY(delivery_date IS NULL)
ORDER BY customer_id DESC;
