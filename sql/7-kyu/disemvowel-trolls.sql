SELECT
    str,
    REGEXP_REPLACE(str, '[aeiou]', '', 'gi') AS res
FROM disemvowel;
