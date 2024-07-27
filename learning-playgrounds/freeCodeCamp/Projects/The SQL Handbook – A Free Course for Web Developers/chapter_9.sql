-- Chapter 9: Database Normalization
-- Joining tables
-- SELECT
--   songs.song_name,
--   artists.artist_name
-- FROM
--   songs
-- JOIN artists ON songs.artist_id = artists.id;
--
-- Unique constraints across 2 fields
-- CREATE TABLE songs (
--   id SERIAL PRIMARY KEY,
--   song_name VARCHAR(255) NOT NULL,
--   artist_id INTEGER NOT NULL,
--   UNIQUE (song_name, artist_id)
-- );
--
CREATE TABLE
  product_suppliers (
    product_id INTEGER NOT NULL,
    supplier_id INTEGER NOT NULL,
    UNIQUE (product_id, supplier_id)
  );