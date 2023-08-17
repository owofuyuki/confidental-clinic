import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const confidentalDatabase = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "patient_accounts",
});

app.post("/signup", (req, res) => {
    const sql = "INSERT INTO Login (`info`,`phone`,`username`,`password`) ACCOUNT (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({Error: "Error for hassing password"});
        const account = [
            req.body.info,
            req.body.phone,
            req.body.username,
            hash,
        ];
        confidentalDatabase.query(sql, [account], (err, result) => {
            if (err) return res.json({Error: "Inserting data... Error in server"});
            return res.json({Status: "Success"});
        });
    });
});

app.listen(7417, () => {
    console.log("Running...");
});