SELECT
    pokemon.pokemon_name,
    multipliers.element,
    (pokemon.str * multipliers.multiplier) AS modifiedStrength
FROM pokemon
INNER JOIN multipliers ON pokemon.element_id = multipliers.id
WHERE (pokemon.str * multipliers.multiplier) >= 40
ORDER BY modifiedStrength DESC;
