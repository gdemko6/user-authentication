const pool = require("./pool");

async function insertUser(email, pass, first, last) {
    await pool.query("INSERT INTO users (email, password_hash, first_name, last_name) VALUES ($1, $2, $3, $4)", 
        [email, pass, first, last]);
}

module.exports = { insertUser };