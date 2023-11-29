const requestError = require("../../helpers/requestError");
const sendEmail = require("../../helpers/sendEmail");
const User = require("../../models/user");

const resendVerifyEmail = async (req, res) => {
  const { email,name } = req.body;
  const user = await User.findOne({ email });
  const { VERIFY_HOST } = process.env;
  if (!user) {
    throw requestError(400, "Email not found");
  }
  if (user.verify) {
    throw requestError(401, "Email already verify");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<div style="background-color: #f5f5f5; padding: 20px;">
    <h2>Email Verification</h2>
    <p>Dear ${name},</p>
    <p>
      Thank you for signing up! To complete your registration, please click the button below to verify your email address:
    </p>
    <a href="${VERIFY_HOST}/api/auth/verify/${user.verificationToken}" style="background-color: #007bff; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
      Verify Email
    </a>
    <p>Thank you,</p>
    <p>Like Pets</p>
  </div>
    `,
  };
  await sendEmail(verifyEmail);
  res.json({
    message: "Verify email send success",
  });
};

module.exports = resendVerifyEmail;
