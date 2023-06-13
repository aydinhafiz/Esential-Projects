const express = require("express");
const bodyParser = require("body-parser");

const productRouter = require("./routes/product-router");
const authRouter = require("./routes/auth");

const app = express();

app.use(bodyParser.json({ limit: "5mb" }));

app.use("/product", productRouter);

app.use("/auth", authRouter);

module.exports = app;
