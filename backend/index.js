const express = require("express");
const bodyParser = require("body-parser");

// app bootstrap
const cors = require("cors");
const app = express();
app.set("port", 8080);

// middleware
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// setup connection
var Pool = require("pg").Pool;
var config = {
    host: "localhost",
    user: "postgres",
    password: "zAdRUnapr8",
    database: "campapp"
};
var pool = new Pool(config);

// get info on certain campground
app.get("/info", async (req, res) => {
    console.log(req.query.q);
    try {
        const template = "SELECT * from campgrounds WHERE Name = $1";
        const response = await pool.query(template, [req.query.q]);

        if (response.rowCount == 0) {
            res.sendStatus(404);
        }
        res.json(response.rows[0]);
    } catch (err) {
        console.error("Error while running: " + err);
    }
});

// start app
app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${ app.get("port") }`);
});