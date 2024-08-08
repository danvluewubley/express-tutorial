const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const {validateToken} = require('../middlewares/AuthMiddleware')

router.get("/:postId", async (req, res) => {
  // Gets id from the url
  const postId = req.params.postId;

  // Gets comments with the same PostId as the one above
  const comments = await Comments.findAll({ where: { PostId: postId } });
  res.json(comments);
});

router.post("/", validateToken, async (req, res) => {
  const comment = req.body
  // Creates a row in the Comments table with the information
  await Comments.create(comment)
  res.json(comment)
})

module.exports = router;