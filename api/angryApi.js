// api/angry.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,       // Use environment variables for DB credentials
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

export default function handler(req, res) {
    const { method } = req;

    if (method === 'GET') {
        const { id } = req.query;

        const sql = 'SELECT id, Sanskrit, English, Translation, Purport FROM angry WHERE id = ?';
        connection.query(sql, [id], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }
            if (results.length > 0) {
                res.json(results[0]);
            } else {
                res.json({});
            }
        });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
