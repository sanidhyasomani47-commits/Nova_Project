const bcrypt = require('bcryptjs');
const pool = require('./config/db');

const seedAdmin = async () => {
    // Default credentials
    const username = 'admin';
    const password = 'password123';

    try {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Insert into DB or Update if exists
        await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) ON CONFLICT (username) DO UPDATE SET password = $2',
            [username, hash]
        );

        console.log('---------------------------------------------------');
        console.log('Admin User Updated/Created Successfully');
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        console.log('---------------------------------------------------');

    } catch (err) {
        console.error('Error creating admin user:', err);
    } finally {
        // Close connection
        pool.end();
    }
};

seedAdmin();
