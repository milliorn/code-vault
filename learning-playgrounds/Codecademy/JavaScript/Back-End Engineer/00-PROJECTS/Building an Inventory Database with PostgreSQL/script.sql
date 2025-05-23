ALTER TABLE parts
ALTER COLUMN code
SET NOT NULL;


ALTER TABLE parts ADD UNIQUE(code);


UPDATE parts
SET description = 'Need Description'
WHERE description IS NULL
    OR description = ' ';


ALTER TABLE parts
ALTER COLUMN description
SET NOT NULL;


INSERT INTO parts (id, code, manufacturer_id)
VALUES (54,
        'V1-009',
        9);


ALTER TABLE reorder_options
ALTER COLUMN price_usd
SET NOT NULL;


ALTER TABLE reorder_options
ALTER COLUMN quantity
SET NOT NULL;


ALTER TABLE reorder_options ADD CHECK (price_usd > 0
                                       AND quantity > 0);


ALTER TABLE reorder_options ADD CHECK (price_usd/quantity > .02
                                       AND price_usd/quantity < 25);


ALTER TABLE parts ADD PRIMARY KEY (id);


ALTER TABLE reorder_options ADD
FOREIGN KEY (part_id) REFERENCES parts(id);


ALTER TABLE locations ADD CHECK (qty > 0);


ALTER TABLE locations ADD UNIQUE(part_id, location);

-- This code seems to be giving the error:

ALTER TABLE locations ADD
FOREIGN KEY (part_id) REFERENCES parts(id);


ALTER TABLE parts ADD
FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id);


INSERT INTO manufacturers (id, name)
VALUES (11,
        'Pip-NNC Industrial');


UPDATE parts
SET manufacturer_id = 11
WHERE manufacturer_id = 1
    OR manufacturer_id = 2;


SELECT *
FROM locations
limit 10;