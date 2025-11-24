# Write your MySQL query statement below
WITH CTE1 AS (
    SELECT *,
    MIN(event_date) AS first_login
    FROM Activity
    GROUP BY player_id
),

CTE2 AS (
    SELECT c1.player_id, c1.first_login,
    SUM(CASE WHEN DATE_ADD(c1.first_login, INTERVAL 1 DAY) = a.event_date THEN 1 ELSE 0 END)
        AS next_day_log
    FROM CTE1 c1
    JOIN Activity a ON a.player_id = c1.player_id
    GROUP BY c1.player_id
)
SELECT ROUND( 
    SUM(next_day_log)/(SELECT COUNT(DISTINCT player_id) FROM Activity)
    ,2) AS fraction
    FROM CTE2;

