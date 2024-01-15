const User = require("../../models/user");
const mongoose = require("mongoose");

const favoriteNotices = async (req, res) => {
  const { noticeId } = req.params;
  const userId = req.user._id;

  const favoriteNotices = req.user.favoriteNotices;
  console.log(favoriteNotices);
  if (!favoriteNotices.includes(noticeId)) {
    favoriteNotices.push(new mongoose.Types.ObjectId(noticeId));
  } else {
    favoriteNotices.splice(favoriteNotices.indexOf(noticeId), 1);
  }
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { favoriteNotices },
    { new: true }
  );

  res.status(200).json(updatedUser.favoriteNotices);
};

module.exports = favoriteNotices;
