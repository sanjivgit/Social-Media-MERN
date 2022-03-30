const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//////////////////Create Post//////////////////

router.post("/", async (req, res) => {
  try {
    const newPost = await new Post(req.body);
    const post = await newPost.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//////////////////Update Post//////////////////

router.put("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.userId === req.body.userId) {
    try {
      const updatedPost = await post.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update your posts only!!!");
  }
});

//////////////////Delete Post//////////////////

router.delete("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.userId === req.body.userId) {
    try {
      await post.deleteOne();
      res.status(200).json("Your post has been deleted!!");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can delete your posts only!!");
  }
});

//////////////////Liked or Disliked Post//////////////////

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("You have liked the post");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("You don't like the post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//////////////////Get a Post//////////////////

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//////////////////Timeline//////////////////

router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await promiss.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPost));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
