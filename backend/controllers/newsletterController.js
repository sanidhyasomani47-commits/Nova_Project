const pool = require('../config/db');

exports.getSubscribers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.subscribe = async (req, res) => {
    const { email } = req.body;
    try {
        // Check if already subscribed
        const check = await pool.query('SELECT * FROM newsletter_subscribers WHERE email = $1', [email]);
        if (check.rows.length > 0) {
            return res.status(400).json({ error: 'Email already subscribed' });
        }

        const result = await pool.query(
            'INSERT INTO newsletter_subscribers (email) VALUES ($1) RETURNING *',
            [email]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteSubscriber = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM newsletter_subscribers WHERE id = $1', [id]);
        res.json({ message: 'Subscriber deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
