# Write your MySQL query statement below
WITH first_half AS (
    SELECT *,
    distance_km/fuel_consumed AS fuel_efficiency_one
    FROM trips
    WHERE trip_date BETWEEN '2023-01-01' AND '2023-06-30'
),

sec_half AS (
    SELECT *,
    distance_km/fuel_consumed AS fuel_efficiency_two
    FROM trips
    WHERE trip_date BETWEEN '2023-07-01' AND '2023-12-31'
),

CTE AS (
    SELECT d.driver_id, d.driver_name,
    AVG(f.fuel_efficiency_one) AS first_half_avg,
    AVG(s.fuel_efficiency_two) AS second_half_avg
    FROM drivers d
    JOIN first_half f on d.driver_id = f.driver_id
    JOIN sec_half s ON d.driver_id = s.driver_id
    GROUP BY driver_id
)

SELECT driver_id, driver_name,
ROUND(first_half_avg, 2) AS first_half_avg,
ROUND(second_half_avg,2 ) AS second_half_avg,
ROUND(second_half_avg - first_half_avg, 2) AS efficiency_improvement
FROM CTE
WHERE (second_half_avg - first_half_avg) > 0
ORDER BY efficiency_improvement DESC, driver_name ASC;