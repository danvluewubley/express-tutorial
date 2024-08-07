const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

// Gives permission to your computer to run requests
app.use(cors());

const db = require("./models");

// Routers
// Creates a route called /posts that utilizes the Posts.js file
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
// Creates a route called /comments that utilizes the Comments.js file
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server Starting...");
  });
});
