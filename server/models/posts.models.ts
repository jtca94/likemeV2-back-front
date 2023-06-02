import {pool} from "../db/database";
import { Post } from "../types/types";

export const findPosts = async (): Promise<Post[]>  => {
  const {rows} = await pool.query("SELECT * FROM posts ORDER BY id ASC");
  return rows;
};

export const addPost = async (titulo: string, img: string, descripcion: string): Promise<Post> => {
  if (!titulo || !img || !descripcion) {
    throw new Error("400");
  }
  const text =
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *";
  const {rows} = await pool.query(text, [titulo, img, descripcion]);
  return rows[0];
};

export const likePost = async (id: number): Promise<Post> => {
  const text = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
  const {rows} = await pool.query(text, [id]);
  if (!rows[0]) {
    throw new Error('404');
  }
  console.log(rows)
  return rows[0];
};

export const deletePost = async (id: number): Promise<Post> => {
  const text = "DELETE FROM posts WHERE id = $1 RETURNING *";
  const {rows} = await pool.query(text, [id]);
  if (!rows[0]) {
    throw new Error('404');
  }
  return rows[0];
};
