// api/fetchData.js
const mysql = require('mysql');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // replace with your MySQL username
    password: '',        // replace with your MySQL password
    database: 'gita'     // replace with your database name
});

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
});

export default function handler(req, res) {
    const { table, id } = req.query;
    const sql = `SELECT id, Sanskrit, English, Translation, Purport FROM ?? WHERE id = ?`;

    connection.query(sql, [table, id], (err, results) => {
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
}