SELECT
    sailorsenshi.senshi_name AS sailor_senshi,
    sailorsenshi.real_name_jpn AS real_name,
    cats.name AS cat,
    schools.school AS school
FROM sailorsenshi
    LEFT OUTER JOIN cats ON sailorsenshi.cat_id = cats.id
    LEFT OUTER JOIN schools ON sailorsenshi.school_id = schools.id;
