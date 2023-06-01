import {Router} from "express";
import {controllerPosts} from "../controllers/controllers";
const router = Router();

//ROUTES
router.get("/posts", controllerPosts.getPosts);
//post methods
router.post("/posts", controllerPosts.createPost);
//put method
router.put("/posts/like/:id", controllerPosts.updatePost);
//delete method
router.delete("/posts/:id", controllerPosts.removePost);

export default router;
