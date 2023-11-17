const requestError = require("../helpers/requestError");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const { JWT_SECRET } = process.env;
const authorization = async (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || !token) {
    throw requestError(401, "Not authorizeds");
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id, {
      token: 0,
      password: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    req.user = user;
  } catch (error) {
    if (error.name === "TokenExpError" || error.name === "JsonWebTokenError") {
      throw requestError(401, "Not authorized");
    }
    throw error;
  }
  next();
};
module.exports = authorization;
