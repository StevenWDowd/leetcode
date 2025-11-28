# Write your MySQL query statement below
WITH over100 AS (
    SELECT * 
    FROM Stadium
    WHERE people > 99
),

CTE AS (
    SELECT *, id - ROW_NUMBER() OVER (ORDER BY id) AS part
    FROM over100
),
CTE2 AS (
    SELECT *, COUNT(part) OVER (PARTITION BY part) AS consec_count
    FROM CTE
)
SELECT id, visit_date, people
FROM CTE2
WHERE consec_count > 2
ORDER BY visit_date ASC;
--  CTE AS (
--     SELECT *,
--     LEAD(id, 1) OVER (
--         ORDER BY id
--     ) AS step1,
--     LEAD(id,2) OVER (
--         ORDER BY id
--     ) AS step2
--     FROM over100
--  ),
--  CTE2 AS (
--     SELECT * FROM CTE
--     WHERE step1 = id +1 AND step2 = id + 2
--  ),

--  CTE3 AS (

--  SELECT * FROM Stadium
--  WHERE id IN (SELECT step1 FROM CTE2) OR id IN (SELECT step2 FROM CTE2)
--  )

--  SELECT id, visit_date, people
--  FROM CTE2
--  UNION
--  (SELECT id, visit_date, people
--  FROM CTE3);

--  SELECT DISTINCT s.id, s.visit_date, s.people
--  FROM Stadium s
--  JOIN CTE2 c ON c.id = s.id
--  WHERE s.id = c.step1 OR s.id = c.step2
--  ORDER BY visit_date ASC;
-- SELECT id, visit_date, people 
-- FROM CTE
-- WHERE (step1 = id + 1 AND step2 = id + 2)
--     OR (step1 = id + 1 AND step2 IS NULL)
--     OR (step1 IS NULL AND step2 IS NULL)
-- ORDER BY visit_date ASC;