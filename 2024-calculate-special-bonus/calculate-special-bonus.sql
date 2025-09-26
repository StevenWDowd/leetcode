# Write your MySQL query statement below
(SELECT employee_id, salary as bonus 
FROM Employees
WHERE employee_id % 2 != 0 AND LEFT(name, 1) !='M')
UNION
(SELECT employee_id, salary * 0 AS bonus
FROM Employees
WHERE employee_id % 2 = 0 OR LEFT(name, 1) = 'M')
ORDER BY employee_id;