# Write your MySQL query statement below
SELECT reg.contest_id, ROUND(COUNT(reg.contest_id)/(SELECT COUNT(user_id) fROM Users) * 100, 2) AS percentage
FROM Register reg
JOIN Users u ON reg.user_id = u.user_id
GROUP BY contest_id
ORDER BY percentage DESC, contest_id ASC;