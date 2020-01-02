const express = require("express");

const app = express();
const categoryRoutes = require("./routes/CategoryRoutes");
const itemRoutes = require("./routes/ItemRoutes");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/item", itemRoutes);

//For images as images are not being saved in the DB or in the cloud(ie S3)
app.use(express.static("/assets/images"));

//Global Error handler

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV == "development") {
    res.status(500).send(err.message);
  }
  console.log(err, err.message, err.stack);
});

module.exports = app;
