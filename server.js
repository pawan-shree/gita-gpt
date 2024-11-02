const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());

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
    console.log('Connected to the MySQL database.');
});

// API endpoint to get data by ID for a specific table
app.get('/api/:table/data/:id', (req, res) => {
    const { table, id } = req.params;
    const sql = `SELECT id, Sanskrit, English, Translation, Purport FROM ?? WHERE id = ?`;

    connection.query(sql, [table, id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length > 0) {
            res.json(results[0]); // Return the first result
        } else {
            res.json({}); // Return empty if no data found
        }
    });
});

// API endpoint to get the maximum ID for a specific table
app.get('/api/:table/max-id', (req, res) => {
    const { table } = req.params;
    const sql = `SELECT MAX(id) AS maxId FROM ??`;

    connection.query(sql, [table], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length > 0) {
            res.json({ maxId: results[0].maxId }); // Return the maximum ID
        } else {
            res.json({ maxId: 0 }); // Return 0 if no data found
        }
    });
});

// Server start
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
