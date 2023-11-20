const User = require("../../models/user");

async function updateInfoCurrentUser(req, res, next) {
  try {
    const resolve = await User.findOneAndUpdate(req.user, req.body);
    res.status(200).json(resolve);
  } catch (error) {
    next(error);
  }
}

module.exports = updateInfoCurrentUser;
