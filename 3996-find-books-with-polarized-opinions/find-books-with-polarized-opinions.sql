# Write your MySQL query statement below
WITH CTE1 AS (
    SELECT a.book_id, title, author, genre, pages,
    SUM(CASE WHEN b.session_rating >= 4 THEN 1 ELSE 0 END) AS over4,
    SUM(CASE WHEN b.session_rating <= 2 THEN 1 ELSE 0 END) AS under2,
    COUNT(b.session_rating) AS readcount,
    MAX(b.session_rating)-MIN(b.session_rating) AS rating_spread
    FROM books a
    JOIN reading_sessions b ON a.book_id = b.book_id
    GROUP BY b.book_id
),

CTE2 AS (
    SELECT *,
    ROUND((over4+under2)/readcount, 2) AS polarization_score
    FROM CTE1
    GROUP BY book_id
)

SELECT book_id, title, author, genre, pages, rating_spread, polarization_score
FROM CTE2
WHERE polarization_score >= 0.6 AND readcount > 4 AND over4 > 0 AND under2 > 0
ORDER BY polarization_score DESC, title DESC;
