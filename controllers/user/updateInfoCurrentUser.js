const User = require("../../models/user");

async function updateInfoCurrentUser(req, res, next) {
  try {
    const { _id: userId } = req.user;
    const { name, email, city, birthday, phone, avatarURL } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { name, email, city, birthday, phone, avatarURL },
      { new: true, select: "name email birthday phone city" }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
}

module.exports = updateInfoCurrentUser;
