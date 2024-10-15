SELECT
    project,
    REGEXP_REPLACE(address, '[^A-Za-z]', '', 'g') AS letters,
    REGEXP_REPLACE(address, '[^0-9]', '', 'g') AS numbers
FROM repositories;
