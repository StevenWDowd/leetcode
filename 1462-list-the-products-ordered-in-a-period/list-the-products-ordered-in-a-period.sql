# Write your MySQL query statement below
SELECT product_name, SUM(o.unit) AS unit FROM Products p
LEFT JOIN Orders o ON o.product_id = p.product_id
WHERE YEAR(o.order_date) = '2020' AND MONTH(o.order_date) = '2'
GROUP BY p.product_id
HAVING unit >= 100;
