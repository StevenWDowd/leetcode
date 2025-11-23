# Write your MySQL query statement below
WITH CTE AS (
    SELECT *,
    MIN(event_timestamp) AS session_start,
    MAX(event_timestamp) AS session_end,
    SUM(CASE WHEN event_type = 'scroll' THEN 1 ELSE 0 END) AS scroll_count,
    SUM(CASE WHEN event_type = 'click' THEN 1 ELSE 0 END) AS click_count,
    SUM(CASE WHEN event_type = 'purchase' THEN 1 ELSE 0 END) AS purchase_count
    FROM app_events
    GROUP BY session_id
),

CTE2 AS (
    SELECT *,
    TIMESTAMPDIFF(MINUTE, session_start, session_end) AS session_duration_minutes,
    click_count/scroll_count AS click_to_scroll
    FROM CTE
)

SELECT session_id, user_id, session_duration_minutes, scroll_count 
FROM CTE2
WHERE scroll_count >= 5
    AND session_duration_minutes > 30
    AND click_to_scroll < 0.2
    AND purchase_count = 0
ORDER BY scroll_count DESC, session_id ASC;