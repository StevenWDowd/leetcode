# Write your MySQL query statement below
WITH CTE AS (
    SELECT *,
    SUM(CASE WHEN transaction_type = 'purchase' THEN 1 ELSE 0 END) AS purchases,
    SUM(CASE WHEN transaction_type = 'refund' THEN 1 ELSE 0 END)/COUNT(transaction_id) AS refund_rate 
    FROM customer_transactions
    -- WHERE DATEDIFF(MAX(transaction_date), MIN(transaction_date)) > 29
    GROUP BY customer_id
    HAVING DATEDIFF(MAX(transaction_date), MIN(transaction_date)) > 29
)
SELECT customer_id FROM CTE
WHERE refund_rate < 0.2 AND purchases > 2
ORDER BY customer_id ASC;