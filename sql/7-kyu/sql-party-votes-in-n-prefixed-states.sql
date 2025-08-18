-- PostgreSQL syntax
SELECT
    Parties.name AS party_name,
    States.name AS state_name,
    COUNT(*) AS voter_count
FROM Voters
INNER JOIN Parties ON Voters.party_id = Parties.id
INNER JOIN States ON Voters.state_id = States.id
WHERE States.name ILIKE 'N%'
GROUP BY Parties.name, States.name
ORDER BY Parties.name DESC, States.name ASC;
