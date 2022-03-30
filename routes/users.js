const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//////////////////Update User///////////////////

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, 10);
      } catch (err) {
        res.status(403).json(err);
      }
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update your account only!!!1");
  }
});

//////////////////Delete User///////////////////

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Your account has been deleted!!!");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can delete your account only!!!");
  }
});

//////////////////Get User///////////////////

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, createdAt, updatedAt, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//////////////////Follow a User///////////////////

router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("Now you are following.");
      } else {
        res.status(403).json("You already following");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Yon can't follow yourself!!");
  }
});

//////////////////Unfollow a User///////////////////

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("Now you are not following");
      } else {
        res.status(403).json("You didn't follow");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can't unfollow yourself!!");
  }
});

module.exports = router;