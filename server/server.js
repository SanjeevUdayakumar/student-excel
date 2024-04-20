import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

let arr = [];
app.get("/", (req, res) => {
  res.send(JSON.stringify(arr));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

import mysql from "mysql2";
import dotenv from "dotenv";
import { saveToDb } from "./database/db.js";

var con = mysql.createConnection({
  host: "localhost",
  user: dotenv.config().parsed.DB_USERNAME,
  password: dotenv.config().parsed.DB_PASSWORD,
  database:  dotenv.config().parsed.DB_NAME
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/save", (req, res) => {
  saveToDb(con,req.body);
  console.log("saved");
});
