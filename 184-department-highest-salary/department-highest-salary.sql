# Write your MySQL query statement below
SELECT d.name as 'Department', e.name as 'Employee',e.salary as 'Salary'
FROM Employee e
JOIN Department d
ON e.departmentId = d.Id
WHERE (d.Id, e.Salary) IN (SELECT departmentId, MAX(salary) FROM Employee
GROUP BY departmentId);