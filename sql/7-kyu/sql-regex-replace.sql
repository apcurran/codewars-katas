-- replace all digits in address column with '!'
UPDATE repositories
SET address = REGEXP_REPLACE(address, '[0-9]', '!', 'g');

-- Select these columns for output
SELECT
    project,
    commits,
    contributors,
    address
FROM repositories;
