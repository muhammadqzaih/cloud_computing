const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors()); 

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error("Database connection error:", err);
        throw err;
    }
    console.log("Connected to MySQL Database.");
});

app.get("/api/news/getUrgentNews", (req, res) => {
    db.query("SELECT * FROM News", (err, results) => {
        if (err) {
            console.error("Error fetching news:", err);
            res.status(500).json({ error: err.message });
            return;
        }

        console.log("Fetched News Data:");
        console.table(results);

        res.json(results);
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
