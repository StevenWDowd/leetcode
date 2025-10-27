# Write your MySQL query statement below
SELECT product_id, year as first_year, quantity, price
FROM Sales
WHERE (year, product_id) IN (SELECT MIN(year), product_id FROM Sales GROUP BY product_id);
-- WITH CTE AS (
--     SELECT *, ROW_NUMBER() OVER (PARTITION BY product_id ORDER BY year ASC) as row_num
--     FROM SALES

-- )
-- SELECT product_id, year AS first_year, quantity, price
-- FROM CTE
-- WHERE row_num = 1
-- ORDER BY product_id ASC;
