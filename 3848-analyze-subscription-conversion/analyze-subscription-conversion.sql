# Write your MySQL query statement below
SELECT user_id,
ROUND(SUM(CASE activity_type WHEN 'free_trial' THEN activity_duration ELSE 0 END)/
SUM(CASE activity_type WHEN 'free_trial' THEN 1 ELSE 0 END), 2)
AS trial_avg_duration,
ROUND(SUM(CASE activity_type WHEN 'paid' THEN activity_duration ELSE 0 END)/
SUM(CASE activity_type WHEN 'paid' THEN 1 ELSE 0 END), 2)
AS paid_avg_duration
FROM UserActivity
GROUP BY user_id
HAVING paid_avg_duration != 0
ORDER BY user_id ASC;