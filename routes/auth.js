const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

/////////////////Register/////////////////

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

/////////////////Register/////////////////

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const vailidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (vailidPassword) {
        res.status(200).json(user);
      } else {
        res.status(400).json("Wrong Password!!!");
      }
    } else {
      res.status(401).json("User is not found!!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
