const User = require("../../models/user");
const bcrypt = require("bcrypt");
const requestError = require("../../helpers/requestError");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (!user) {
    throw requestError(401, "Email or password is wrong");
  }

  if (!user.verify) {
    throw requestError(401, "Email not verified");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw requestError(401, "Email or password is wrong");
  }
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
  user.token = token;
  await user.save();
  res.status(200).json({
    user: {
      token: token,
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
