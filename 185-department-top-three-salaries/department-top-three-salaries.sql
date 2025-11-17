# Write your MySQL query statement below
WITH CTE1 AS (
    SELECT *,
    DENSE_RANK() OVER (PARTITION BY departmentId ORDER BY salary DESC) AS rnk
    FROM Employee
)
SELECT d.name AS 'Department', c.name AS 'Employee', c.salary AS Salary
FROM CTE1 c
JOIN Department d ON c.departmentId = d.id
WHERE rnk < 4;
