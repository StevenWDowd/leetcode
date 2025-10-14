# Write your MySQL query statement below
-- SELECT 
-- CASE
--     WHEN income < 20000 THEN 'Low Salary'
--     WHEN income >= 20000 AND income <= 50000 THEN 'Average Salary'
--     WHEN income > 50000 THEN 'High Salary'
--     END AS category,
-- COUNT(account_id) AS accounts_count
-- FROM Accounts
-- GROUP BY category;

SELECT 'Low Salary' as category, SUM(if(income < 20000, 1, 0)) AS accounts_count
FROM Accounts
UNION
SELECT 'Average Salary' as category, SUM(if(income >= 20000 AND income <= 50000, 1, 0)) AS accounts_count
FROM Accounts
UNION
SELECT 'High Salary' as category, SUM(if(income > 50000, 1, 0)) AS accounts_count
FROM Accounts;