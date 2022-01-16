const express = require("express");
const jwt = require("express-jwt");
const Joi = require("joi");

const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const authorizeForPost = require("../_middleware/authorizeForPost");

const postService = require("./posts.service");

const { secret } = require("config.json");

const router = express.Router();

router.post("/create", createSchema, authorize(), createPost);
router.get("/", authorize(), getAll);
router.get("/:id", authorize(), getById);
router.put("/:id", authorizeForPost(), updateSchema, update);
router.delete("/:id", authorizeForPost(), _delete);

module.exports = router;

function createSchema(req, res, next) {
  const schema = Joi.object({
    title: Joi.string().required(),
    topic: Joi.string().required(),
    requestUserId: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    title: Joi.string().empty(""),
    topic: Joi.string().empty(""),
    hostUserId: Joi.string().empty(""),
    bookedDate: Joi.string().empty(""),
  });
  validateRequest(req, next, schema);
}

function createPost(req, res, next) {
  postService
    .create(req.body)
    .then(() => res.json({ message: "Post added successfully" }))
    .catch(next);
}

function getAll(req, res, next) {
  postService
    .getAll()
    .then((posts) => res.json(posts))
    .catch(next);
}

function getById(req, res, next) {
  postService
    .getById(req.params.id)
    .then((post) => res.json(post))
    .catch(next);
}

function update(req, res, next) {
  jwt({ secret, algorithms: ["HS256"] });

  postService
    .update(req.params.id, req.body)
    .then((post) => res.json(post))
    .catch(next);
}

function _delete(req, res, next) {
  postService
    .delete(req.params.id)
    .then(() => res.json({ message: "Post deleted successfully" }))
    .catch(next);
}
