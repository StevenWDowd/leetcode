# Write your MySQL query statement below
SELECT one.id 
FROM Weather one, Weather two
WHERE DATEDIFF(one.recordDate, two.recordDate) = 1
AND one.temperature > two.temperature;
