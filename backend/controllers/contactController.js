const pool = require('../config/db');

exports.getContacts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.submitContact = async (req, res) => {
    const { fullName, email, mobile, city } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO contacts (full_name, email, mobile, city) VALUES ($1, $2, $3, $4) RETURNING *',
            [fullName, email, mobile, city]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteContact = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
        res.json({ message: 'Contact deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
