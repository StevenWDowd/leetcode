# Write your MySQL query statement below
WITH CTE1 AS (
    SELECT *,
    ROUND(SUM(rating/position)/COUNT(query_name),2) AS quality,
    ROUND(AVG(CASE WHEN rating < 3 THEN 1 ELSE 0 END)*100,2) AS poor_query_percentage
    FROM Queries
    GROUP BY query_name
)

SELECT query_name, quality, poor_query_percentage FROM CTE1;

-- CTE2 AS (
--     SELECT *,
--     ROUND((SUM(CASE WHEN quality < 3 THEN 1 ELSE 0 END))/q_count * 100, 2) AS poor_query_percentage
--     FROM CTE1
--     GROUP BY query_name
-- )
-- SELECT * FROM CTE2;

-- -- SELECT query_name, quality, poor_query_percentage FROM CTE2;