# Write your MySQL query statement below
WITH CTE AS (
    SELECT p.patient_id, p.patient_name, p.age,
    SUM(CASE WHEN ct.result = 'Positive' THEN 1 ELSE 0 END) AS pos_no,
    SUM(CASE WHEN ct.result = 'Negative' THEN 1 ELSE 0 END) AS neg_no,
    MIN(CASE WHEN ct.result = 'Positive' THEN ct.test_date END) AS first_pos
    FROM patients p
    JOIN covid_tests ct ON ct.patient_id = p.patient_id
    GROUP BY patient_id

),

CTE2 AS (
    SELECT ct.patient_id, ct.test_date,
    MIN(CASE WHEN ct.result = 'Negative' AND ct.test_date > c.first_pos THEN ct.test_date END
        ) AS first_neg
    FROM covid_tests ct
    JOIN CTE c ON ct.patient_id = c.patient_id
    GROUP BY patient_id
)
SELECT c1.patient_id, c1.patient_name, c1.age,
    DATEDIFF(c2.first_neg, c1.first_pos) AS recovery_time
    FROM CTE c1
    JOIN CTE2 c2 ON c1.patient_id = c2.patient_id
    WHERE c1.first_pos IS NOT NULL AND c2.first_neg IS NOT NULL
    ORDER BY recovery_time ASC, patient_name ASC;