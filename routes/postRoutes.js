const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsContoller,
  getUserPostsController,
  deletePostController,
  updatePostController,
} = require("../controllers/postController");

/// ROUTER OBJECT ///
const router = express.Router();

//Create Post method Post
router.post("/create-post", requireSignIn, createPostController);

//////// GET ALL POSTS
router.get("/get-all-post", getAllPostsContoller);

/// GET USER POSTS
router.get("/get-user-post", requireSignIn, getUserPostsController);

//// DELETE POst
router.delete("/delete-post/:id", requireSignIn, deletePostController);

/////UPDATE POST //////
router.put("/update-post/:id", requireSignIn, updatePostController);

///EXPORT
module.exports = router;
