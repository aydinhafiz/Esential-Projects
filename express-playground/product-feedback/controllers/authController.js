const User = require("../models/user");

exports.login = async function (req, res) {
  const { email, password } = req.body;

  const newUser = {
    email,
    password,
  };
  let user;
  try {
    user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res.json({
        status: "fail",
        message: "your credentials are not right",
      });
    }
    if (user.password === password) {
      res.json({ status: "success" });
    } else {
      return res.json({
        status: "fail",
        message: "your credentials are not right",
      });
    }
  } catch (error) {
    return res.json({ status: "fail", message: error.message });
  }
};

exports.register = async function (req, res) {
  const { name, surname, email, password } = req.body;

  if (email === "" || !email) {
    return res.json({ status: "fail", message: "email is required" });
  }

  const newUser = {
    name,
    surname,
    email,
    password,
  };

  let user;
  try {
    user = await User.create(newUser);
  } catch (error) {
    return res.json({ status: "fail", message: error.message });
  }
  res.json({ status: "success", user });
};
