# Write your MySQL query statement below
WITH CTE AS (
    SELECT *,
    ROUND(AVG(order_rating), 2) AS average_rating,
    SUM(CASE WHEN order_rating IS NOT NULL THEN 1 ELSE 0 END)/COUNT(order_id) * 100 AS rating_perc,
    ROUND(SUM(CASE WHEN TIME(order_timestamp) BETWEEN '11:00:00' AND '14:00:00' OR TIME(order_timestamp) BETWEEN '18:00:00' AND '21:00:00' THEN 1
                ELSE 0 END)/COUNT(order_id) * 100, 0)
                AS peak_hour_percentage,
    COUNT(order_id) AS total_orders
    FROM restaurant_orders
    GROUP BY customer_id
)
SELECT customer_id, total_orders, peak_hour_percentage, average_rating
FROM CTE
WHERE total_orders > 2 AND peak_hour_percentage >= 60 AND average_rating >= 4 AND rating_perc >= 50
ORDER BY average_rating DESC, customer_id DESC;