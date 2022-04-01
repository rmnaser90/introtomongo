const User = require("../models/User");

const u1 = new User({
  name: "Rami",
  email: "rami@monday.com",
  username: "rmnaser90",
  isLoggedIn: true,
  password: "qweqwe",
});

const auth = function (req, res, next) {
  const { user } = req.headers;
  if (user == "rami") {
    next();
  } else {
    res.send({ error: true, message: "you're not authenticated" });
  }
};

module.exports = auth;
