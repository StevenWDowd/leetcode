# Write your MySQL query statement below
SELECT user_id, email
FROM Users
WHERE REGEXP_LIKE(email, '^[a-zA-Z_0-9]*@[a-zA-z]*[.]com$')
ORDER BY user_id ASC;