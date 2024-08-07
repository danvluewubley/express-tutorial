const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

// Gives permission to your computer to run requests
app.use(cors());

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server Starting...");
  });
});
