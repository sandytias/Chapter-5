const express = require("express");
const port = process.env.PORT || 8000;
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const users = require("./db/users.json");

// console.log(users);

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("Login");
});

app.post("/Login", (req, res) => {
  const { username, password } = req.body;
  if (username == users[0].username && password == users[0].password) {
    res.redirect("/main-menu");
  } else {
    res.end("Invalid Username or Password");
  }
});

app.get("/main-menu", (req, res) => {
  res.render("index");
});
app.get("/game", (req, res) => {
  res.render("game");
});

app.get("/API", (req, res) => {
  res.status(200).send({ username: users[0].username, password: "******" });
});
app.listen(port);
