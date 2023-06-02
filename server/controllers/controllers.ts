import {
  findPosts,
  addPost,
  likePost,
  deletePost,
} from "../models/posts.models";

import { Request, Response } from "express";
import { handleErrors } from "../db/errors";

const getPosts = async (_req: Request, res: Response) => {
  try {
    const results = await findPosts();
    return res.json(results);
  } catch (err: any) {
    const { status, message } = handleErrors(err.message);
    return res.status(status).json({ ok: false, message: message });
  }
};

const createPost = async (req: Request, res: Response) => {
  try {
    const { titulo, img, descripcion } = req.body;
    const result = await addPost(titulo, img, descripcion);
    return res.status(201).json({ ok: true, result: result });
  } catch (err: any) {
    const { status, message } = handleErrors(err.message);
    return res.status(status).json({ ok: false, message: message });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (Number.isNaN(+id)) {
      throw new Error("22P02");
    }

    const result = await likePost(+id);
    return res.json({ ok: true, result: result });
  } catch (err: any) {
    const { status, message } = handleErrors(err.message);
    return res.status(status).json({ ok: false, message: message });
  }
};


const removePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deletePost(+id);
    return res.json({ ok: true, result: result });
  } catch (err: any) {
    const { status, message } = handleErrors(err.message);
    return res.status(status).json({ ok: false, message: message });
  }
};

export const controllerPosts = {
  getPosts,
  createPost,
  updatePost,
  removePost,
};
