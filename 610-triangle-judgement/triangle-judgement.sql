# Write your MySQL query statement below
SELECT x, y, z,
CASE 
 WHEN ((x + y) > Z && (x + z) > y && (y + z) > x) then 'Yes'
 ELSE 'No'
 END as triangle
FROM Triangle;