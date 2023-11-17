const requestError = require("../../helpers/requestError");
const User = require("../../models/user");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw requestError(401, "Email not found");
  }
  await User.findByIdAndUpdate(user.id, {
    verify: true,
    verificationToken: "",
  });
  res.json({ message: "Email verify success" });
};

module.exports = verifyEmail;
