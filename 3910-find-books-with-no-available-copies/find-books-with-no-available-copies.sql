# Write your MySQL query statement below
WITH CTE AS (SELECT lb.book_id, lb.title, lb.author, lb.genre, lb.publication_year, lb.total_copies,
COUNT(br.record_id) AS current_borrowers
FROM library_books lb
JOIN borrowing_records br ON lb.book_id = br.book_id
WHERE br.return_date IS NULL
GROUP BY book_id)
SELECT book_id, title, author, genre, publication_year, current_borrowers
FROM CTE
WHERE total_copies - current_borrowers = 0
ORDER BY current_borrowers DESC, title ASC;