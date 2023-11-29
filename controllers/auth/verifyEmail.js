const requestError = require("../../helpers/requestError");
const User = require("../../models/user");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  const { VERIFY_HOST } = process.env;

  if (!user) {
    return res.status(401).json({ error: "Email not found" });
  }

  await User.findByIdAndUpdate(user.id, {
    verify: true,
    verificationToken: "",
  });

  res.redirect(`${VERIFY_HOST}/verify`);
};

module.exports = verifyEmail;
