# Write your MySQL query statement below
SELECT email
FROM Person
WHERE email IN
(SELECT email FROM Person
GROUP BY email HAVING COUNT(*) > 1)
GROUP BY email;