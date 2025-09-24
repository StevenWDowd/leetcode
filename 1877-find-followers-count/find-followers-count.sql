# Write your MySQL query statement below
-- SELECT A.user_id, COUNT(B.user_id) AS followers_count
-- FROM Followers A
-- JOIN Followers B ON A.follower_id = B.user_id
-- GROUP BY A.user_id
-- ORDER BY A.user_id ASC;
SELECT user_id, COUNT(follower_id) as followers_count
FROM Followers
GROUP BY user_id
ORDER BY user_id;