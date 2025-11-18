# Write your MySQL query statement below
WITH CTE AS (
    SELECT e.employee_id, e.name,
    NTH_VALUE(r.rating, 1) OVER (PARTITION BY e.employee_id ORDER BY r.review_date DESC) as ult,
    NTH_VALUE(r.rating, 2) OVER (PARTITION BY e.employee_id ORDER BY r.review_date DESC) as pen,
    NTH_VALUE(r.rating, 3) OVER (PARTITION BY e.employee_id ORDER BY r.review_date DESC) as antepen
    FROM employees e
    JOIN performance_reviews r ON e.employee_id = r.employee_id
),
CTE2 AS (
    SELECT * FROM CTE
    WHERE ULT IS NOT NULL AND pen IS NOT NULL AND antepen IS NOT NULL
    GROUP BY employee_id
)
SELECT employee_id, name,
(ult - antepen) AS improvement_score
FROM CTE2
WHERE ult > pen AND pen > antepen
ORDER BY improvement_score DESC, name ASC;