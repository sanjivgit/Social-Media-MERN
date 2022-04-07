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
  console.log("currentUserId", req.body.userId);
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.userId === post.userId) {
      await post.delete();
      res.status(200).json("Post has been deleted succesfully...");
    } else {
      res.status(401).json("You can delete only your post...");
    }
  } catch (err) {
    res.status(500).json(err);
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

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});

//////////////////Get User's Posts//////////////////

router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
