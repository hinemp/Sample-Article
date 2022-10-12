const express = require("express");
const router = express.Router();
const Comments = require("../models/").Comments;

/**
 * Get all comments
 */
router.get("/", async (req, res) => {
  const list = await Comments.findAll();
  return res.json(list);
});

/**
 * Get all replies to a comment
 */
router.get("/replies/:id", async (req, res) => {
  const replies = await Comments.findAll({
    where: { parent_id: req.params.id },
  });
  res.json(replies);
});

/**
 * Get a specific comment
 */
router.get("/:id", async (req, res) => {
  const comment = await Comments.findAll({ where: { id: req.params.id } });
  res.json(comment);
});

/**
 * TODO: Update to include input validation
 */
router.post("/", async (req, res) => {
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

/**
 * Soft-delete implementation, unused
 */
router.patch("/:id", async (req, res) => {
  const updated = await Comments.update(
    { comment_text: "deleted", user: "deleted" },
    { where: { id: req.params.id } }
  );
  res.json(updated);
});

/**
 * Hard delete
 */
router.delete("/:id", async (req, res) => {
  await Comments.destroy({ where: { id: req.params.id } });
  res.json("Comment Deleted");
});

/**
 * Delete all comments that were soft-deleted
 */
router.delete("/cleanup", async (req, res) => {
  await Comments.destroy({ where: { user: "deleted" } });
  res.json("Cleanup Completed");
});

/**
 * Like a comment
 */
router.post("/like/:id", async (req, res) => {
  await Comments.increment("likes", { by: 1, where: { id: req.params.id } });
  res.json("Liked Comment");
});

/**
 * Dislike a comment
 */
router.post("/dislike/:id", async (req, res) => {
  await Comments.decrement("likes", { by: 1, where: { id: req.params.id } });
  res.json("Disliked Comment");
});

module.exports = router;
