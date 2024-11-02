// api/maxId.js
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
    const { table } = req.query;
    const sql = `SELECT MAX(id) AS maxId FROM ??`;

    connection.query(sql, [table], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length > 0) {
            res.json({ maxId: results[0].maxId });
        } else {
            res.json({ maxId: 0 });
        }
    });
}
