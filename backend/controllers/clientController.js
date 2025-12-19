const pool = require('../config/db');

exports.getClients = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clients ORDER BY id DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createClient = async (req, res) => {
    const { name, description, designation, image_url } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO clients (name, description, designation, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, description, designation, image_url]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateClient = async (req, res) => {
    const { id } = req.params;
    const { name, description, designation, image_url } = req.body;
    try {
        const result = await pool.query(
            'UPDATE clients SET name = $1, description = $2, designation = $3, image_url = $4 WHERE id = $5 RETURNING *',
            [name, description, designation, image_url, id]
        );
        if (result.rows.length === 0) return res.status(404).json({ error: 'Client not found' });
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM clients WHERE id = $1', [id]);
        res.json({ message: 'Client deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
