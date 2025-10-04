# Write your MySQL query statement below
(SELECT name AS results FROM Users u
JOIN MovieRating mr ON u.user_id = mr.user_id
GROUP BY name 
ORDER BY COUNT(name) DESC, name ASC
LIMIT 1)
UNION ALL
(SELECT title AS results FROM Movies m
JOIN MovieRating mr on m.movie_id = mr.movie_id
WHERE MONTH(mr.created_at) = '02' AND YEAR(mr.created_at) = '2020'
GROUP BY title
ORDER BY AVG(mr.rating) DESC, title ASC
LIMIT 1);