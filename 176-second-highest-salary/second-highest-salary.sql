# Write your MySQL query statement below
(SELECT DISTINCT salary AS SecondHighestSalary
FROM Employee
GROUP BY Salary
ORDER BY Salary DESC
LIMIT 1,1)
UNION
(SELECT null)
LIMIT 1;
