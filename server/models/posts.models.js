import {pool} from "../db/database.js";

export const findPosts = async () => {
  const {rows} = await pool.query("SELECT * FROM posts ORDER BY id ASC");
  return rows;
};

export const addPost = async (titulo, img, descripcion) => {
  if (!titulo || !img || !descripcion) {
    throw new Error("Faltan datos");
  }
  const text =
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *";
  const {rows} = await pool.query(text, [titulo, img, descripcion]);
  return rows[0];
};

export const likePost = async (id) => {
  const text = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
  const {rows} = await pool.query(text, [id]);
  console.log(rows);
  return rows[0];
};

export const deletePost = async (id) => {
  const text = "DELETE FROM posts WHERE id = $1 RETURNING *";
  const {rows} = await pool.query(text, [id]);
  return rows[0];
};
