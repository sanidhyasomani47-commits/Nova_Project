const pool = require('../config/db');

exports.getProjects = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM projects ORDER BY id DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createProject = async (req, res) => {
    const { name, description, image_url } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO projects (name, description, image_url) VALUES ($1, $2, $3) RETURNING *',
            [name, description, image_url]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, description, image_url } = req.body;
    try {
        const result = await pool.query(
            'UPDATE projects SET name = $1, description = $2, image_url = $3 WHERE id = $4 RETURNING *',
            [name, description, image_url, id]
        );
        if (result.rows.length === 0) return res.status(404).json({ error: 'Project not found' });
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM projects WHERE id = $1', [id]);
        res.json({ message: 'Project deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
