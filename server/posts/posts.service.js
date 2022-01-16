const db = require("_helpers/db");

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await db.Post.findAll();
}

async function getById(id) {
  return await getPost(id);
}

async function create(params) {
  // save post
  await db.Post.create(params);
}

async function update(id, params) {
  const post = await getPost(id);
  Object.assign(post, params);
  await post.save();
  return post.get();
}

async function _delete(id) {
  const post = await getPost(id);
  await post.destroy();
}

// helper functions

async function getPost(id) {
  const post = await db.Post.findByPk(id);
  if (!post) throw "Post not found";
  return post;
}
