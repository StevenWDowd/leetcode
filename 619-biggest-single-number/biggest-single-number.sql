# Write your MySQL query statement below
-- SELECT GREATEST(SELECT num FROM MyNumbers 
-- GROUP BY num
-- HAVING COUNT(*) = 1);
SELECT MAX(num) AS num FROM (SELECT num FROM MyNumbers
GROUP BY num
HAVING COUNT(num) = 1) AS uniques; 