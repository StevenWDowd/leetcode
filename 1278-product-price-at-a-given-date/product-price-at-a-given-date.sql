# Write your MySQL query statement below
WITH CTE AS (
    SELECT product_id, MAX(change_date) AS change_date FROM Products
    WHERE change_date BETWEEN '1900-01-01' AND '2019-08-16'
    GROUP BY product_id
),

CTE2 AS (
    SELECT p.product_id, p.change_date, p.new_price
    FROM Products p
    JOIN CTE c ON p.product_id = c.product_id AND p.change_date = c.change_date
)

SELECT p.product_id,
IF (p.product_id IN (SELECT product_id FROM CTE), 
    (SELECT new_price fROM CTE2 c WHERE c.product_id = p.product_id),
    10) AS price
FROM Products p
GROUP BY product_id;