SELECT
    customer.customer_id,
    customer.email,
    COUNT(payment.payment_id) AS payments_count,
    CAST(SUM(payment.amount) AS FLOAT) AS total_amount
FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id
GROUP BY customer.customer_id
ORDER BY SUM(payment.amount) DESC
LIMIT 10;