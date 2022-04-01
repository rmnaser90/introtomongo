const express = require("express");
const router = express.Router();
const auth = require("../services/auth");
const User = require("../models/User");

router.post("/signUp", async function (req, res) {
  const user = req.body;
  const isExist = await User.findOne({ email: user.email }) || null;
  console.log(isExist);
  if (isExist) {
    res.send({ err: true, msg: "email already exists" });
  } else {
      user.lastLogIn = Date.now()
    const dbUser = new User(user);
    const dbRes = await dbUser.save();
    const {name,email,username,lastLogIn, cart}=dbRes
    res.send({name,email,username,lastLogIn, cart});
  }
});

router.get("/signIn", async function (req, res) {
  console.log("sign in request");
  res.end();
});

router.put("/update", auth, async function (req, res) {
  console.log("update request");
  res.end();
});

module.exports = router;
