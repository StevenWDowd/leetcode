# Write your MySQL query statement below
WITH CTE1 AS (
    SELECT user_id,
    MAX(event_date) AS latest,
    MIN(event_date) AS earliest,
    MAX(monthly_amount) AS max_historical_amount
    FROM subscription_events
    GROUP BY user_id
    HAVING SUM(CASE WHEN event_type = 'downgrade' THEN 1 ELSE 0 END) > 0
),

CTE2 AS (
    SELECT se.user_id,
    se.plan_name AS current_plan,
    se.monthly_amount AS current_monthly_amount,
    c1.max_historical_amount,
    c1.earliest,
    c1.latest,
    DATEDIFF(latest, earliest) AS days_as_subscriber
    FROM subscription_events se
    JOIN CTE1 c1 ON c1.latest = se.event_date AND se.user_id = c1.user_id
    WHERE se.plan_name <> 'null'
    GROUP BY user_id
)
#SELECT * FROM CTE1;
#SELECT * FROM CTE2 WHERE user_id = 513;

SELECT user_id, 
    current_plan, 
    current_monthly_amount, 
    max_historical_amount, 
    days_as_subscriber
    FROM CTE2
    WHERE days_as_subscriber > 59
    #AND current_monthly_amount < (max_historical_amount/2)
    AND ROUND((current_monthly_amount/max_historical_amount)*100,2) < 50
    ORDER BY days_as_subscriber DESC, user_id ASC;