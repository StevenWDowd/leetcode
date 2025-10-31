# Write your MySQL query statement below
SELECT u.user_id AS buyer_id, u.join_date,
SUM(CASE WHEN YEAR(o.order_date) IN (2019) THEN 1 ELSE 0 END) AS orders_in_2019
FROM Users u
LEFT JOIN Orders o ON o.buyer_id = u.user_id
GROUP BY user_id;