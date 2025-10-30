# Write your MySQL query statement below
WITH CTE AS (
    SELECT id, num,
    LEAD(num, 1) OVER (
        ORDER BY id
    ) AS step1,
    LEAD(num, 2) OVER (
        ORDER BY id
    ) AS step2
    FROM Logs
)

SELECT num AS ConsecutiveNums
FROM CTE
WHERE num = step1 AND num = step2
GROUP BY num;