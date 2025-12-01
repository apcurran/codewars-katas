SELECT
    People.id AS person_id,
    People.birthdate,
    COALESCE(SUM(Records.speed_delta), 0) AS total_speed_delta -- SUM all speed deltas for EACH person
FROM People
LEFT JOIN Records ON People.id = Records.person_id
GROUP BY People.id
ORDER BY person_id ASC;