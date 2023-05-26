import {
  findPosts,
  addPost,
  likePost,
  deletePost,
} from "../models/posts.models.js";

const getPosts = async (req, res, next) => {
  try {
    const results = await findPosts();
    return res.json(results);
  } catch (err) {
    next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    const {titulo, img, descripcion} = req.body;
    const result = await addPost(titulo, img, descripcion);
    return res.status(201).json({ok: true, result: result});
    console.log(result);
  } catch (err) {
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await likePost(id);
    return res.json({ok: true, result: result});
  } catch (err) {
    next(err);
  }
};

const removePost = async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await deletePost(id);
    return res.json({ok: true, result: result});
  } catch (err) {
    next(err);
  }
};

export const controllerPosts = {
  getPosts,
  createPost,
  updatePost,
  removePost,
};
