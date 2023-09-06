const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = 5000;

// Database connection setup
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
  

app.use(cors());

app.get('/data', (req, res) => {
  const { filter1, filter2 } = req.query;

  let query = "SELECT * FROM mytable";

  if (filter1 || filter2) {
    query += ' WHERE ';
    if (filter1) query += `column1='${filter1}'`; 
    if (filter2) query += `${filter1 ? ' AND ' : ''}column2='${filter2}'`; 
  }

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
