-- you are given a table 'dnastrand' with column 'dna',
-- return a table with column 'dna' and your result in a column named 'res'.

SELECT
    dna,
    TRANSLATE(dna, 'ATCG', 'TAGC') AS res
FROM dnastrand;
