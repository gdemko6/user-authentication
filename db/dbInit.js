require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    membership_status boolean NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS messages (
    message_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(50) NOT NULL,
    content VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (email, password_hash, first_name, last_name, membership_status) 
VALUES (
    'john.doe@example.com', 
    '$2b$10$abcdefg1234567890hashedbcrypt', -- Dummy bcrypt hash
    'John', 
    'Doe', 
    TRUE
) RETURNING id;

INSERT INTO messages (title, content, user_id)
VALUES (
    'Hello World!', 
    'This is my first message in the database.',
    (SELECT id FROM users WHERE email = 'john.doe@example.com') 
)

`;

async function main() {
    console.log("database initialization started");
    console.log("Connecting to DB:", process.env.DATABASE_URL);
  
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("database initialization finished.");
  }
  
  main();