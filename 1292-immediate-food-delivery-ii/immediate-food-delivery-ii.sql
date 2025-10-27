# Write your MySQL query statement below
WITH firsts AS 
(SELECT * FROM Delivery WHERE (customer_id, order_date) IN (
    SELECT customer_id, MIN(order_date)
    FROM Delivery
    GROUP BY customer_id
))

SELECT ROUND(SUM(CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END)/
            COUNT(*),4) * 100
        AS immediate_percentage
FROM firsts;