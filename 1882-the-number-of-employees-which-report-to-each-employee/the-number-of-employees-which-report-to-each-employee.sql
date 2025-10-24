# Write your MySQL query statement below
SELECT a.employee_id, a.name,
COUNT(b.reports_to) AS reports_count,
ROUND(AVG(b.age)) AS average_age
FROM Employees a
JOIN Employees b ON b.reports_to = a.employee_id
GROUP BY a.employee_id
ORDER BY a.employee_id;