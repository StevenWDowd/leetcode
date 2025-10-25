# Write your MySQL query statement below
SELECT s.product_id, product_name FROM Sales s
LEFT JOIN Product p ON s.product_id = p.product_id
GROUP BY product_id
HAVING MIN(sale_date) >= '2019-01-01' AND MAX(sale_date) <= '2019-03-31';
-- SELECT p.product_id, p.product_name
-- FROM Product p
-- LEFT JOIN Sales s ON p.product_id = s.product_id
-- GROUP BY s.product_id
-- HAVING MIN(s.sale_date) >= '2019-01-01' AND MAX(s.sale_date) <='2019-03-01';