DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    weight VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    featured BOOLEAN NOT NULL,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);