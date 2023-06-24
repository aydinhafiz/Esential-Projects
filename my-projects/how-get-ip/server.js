const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017";
const dbName = "loginDB";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/create-account", (req, res) => {
  const { name, surname, email, password } = req.body;

  MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }

    const db = client.db(dbName);
    const collection = db.collection("users");

    collection.insertOne({ name, surname, email, password }, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Database error");
      }

      res.redirect("/hello");
      client.close();
    });
  });
});

app.get("/hello", (req, res) => {
  res.sendFile(__dirname + "/public/hello.html");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
