const requestError = require("../../helpers/requestError");
const sendEmail = require("../../helpers/sendEmail");
const User = require("../../models/user");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const { PORT } = process.env;
  if (!user) {
    throw requestError(400, "Email not found");
  }
  if (user.verify) {
    throw requestError(401, "Email already verify");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="http://localhost:${PORT}/api/auth/verify/${user.verificationToken}" >Click verify email</a>`,
  };
  await sendEmail(verifyEmail);
  res.json({
    message: "Verify email send success",
  });
};

module.exports = resendVerifyEmail;
