# Write your MySQL query statement below
WITH RECURSIVE CTE AS (
    #anchor
    SELECT employee_id, employee_name, manager_id, salary, department,
    1 AS level
    FROM Employees e
    WHERE e.manager_id IS NULL
    UNION ALL
    #recursion
    SELECT e.employee_id, e.employee_name, e.manager_id, e.salary, e.department, c.level + 1
    FROM Employees e
    INNER JOIN CTE c ON e.manager_id = c.employee_id
),



CTE2 AS (
    #anchor
    SELECT e.employee_id AS manager, e.employee_id AS report, e.salary
    FROM Employees e

    UNION ALL
    #recursion
    SELECT c2.manager, e.employee_id, e.salary
    FROM CTE2 c2
    INNER JOIN Employees e ON e.manager_id = c2.report
),

CTE3 AS (
    SELECT *, COUNT(report) - 1 AS team_size, SUM(salary) AS budget
    FROM CTE2
    GROUP BY manager
)



SELECT c3.manager AS employee_id, 
       e.employee_name,
       c1.level,
       c3.team_size,
       c3.budget
    FROM CTE3 c3
    JOIN Employees e ON c3.manager = e.employee_id
    JOIN CTE c1 ON e.employee_id = c1.employee_id
    ORDER BY level ASC, budget DESC, employee_name ASC
;