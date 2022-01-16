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
  // validate
  if (await db.Post.findOne({ where: { topic: params.topic } })) {
    throw 'Topic "' + params.topic + '" already exists';
  }

  // save user
  await db.Post.create(params);
}

async function update(id, userid, params) {
  const post = await getPost(id);
  const userOwnsThisPost = post.dataValues.requestUserId === userid.toString();
  if (userOwnsThisPost) {
    Object.assign(post, params);
    await post.save();
    return post.get();
  } else {
    throw "You cant update this post";
  }
}

async function _delete(id, userid) {
  const post = await getPost(id);
  if (post.dataValues.requestUser === userid.toString()) {
    await post.destroy();
  } else {
    throw "You cant delete this post";
  }
}

// helper functions

async function getPost(id) {
  const post = await db.Post.findByPk(id);
  if (!post) throw "Post not found";
  return post;
}
