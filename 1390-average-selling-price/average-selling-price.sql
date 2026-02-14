# Write your MySQL query statement below
SELECT a.product_id, IFNULL(ROUND(SUM(a.price * b.units)/SUM(b.units), 2), 0) AS average_price
FROM prices a
LEFT JOIN UnitsSold b ON a.product_id = b.product_id
    WHERE (a.start_date <= b.purchase_date AND a.end_date >= b.purchase_date) 
        OR b.purchase_date IS NULL
GROUP BY a.product_id;
-- WITH CTE1 AS 
-- (SELECT a.price FROM Prices a 
--     JOIN UnitsSold b ON a.product_id = b.product_id
--     WHERE (a.start_date <= b.purchase_date AND a.end_date >= b.purchase_date) 
--         OR b.purchase_date IS NULL)
-- SELECT p.product_id, 
-- (SELECT AVG(price) FROM CTE1) as avprice
-- FROM Prices p
-- JOIN UnitsSold u on p.product_id = u.product_id
-- GROUP BY product_id;
