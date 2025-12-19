const { Pool } = require('pg');
require('dotenv').config();

// Use DATABASE_URL if available (common in Neon/deployment), otherwise fallback to individual vars
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Required for Neon and many cloud DBs
    },
});

module.exports = pool;
