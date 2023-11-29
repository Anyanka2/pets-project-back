const requestError = require("../../helpers/requestError");
const sendEmail = require("../../helpers/sendEmail");
const User = require("../../models/user");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
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
    <p>Dear User,</p>
    <p>
      Thank you for signing up! To complete your registration, please click the button below to verify your email address:
    </p>
    <a href="${VERIFY_HOST}/api/auth/verify/${user.verificationToken}" style="background-color: #007bff; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
      Verify Email
    </a>
    <p>
      If you're having trouble clicking the button, you can also copy and paste the following URL into your browser's address bar:
      <br>
      <a href="${VERIFY_HOST}/api/auth/verify/${user.verificationToken}" style="word-break: break-all;">
        ${VERIFY_HOST}/api/auth/verify/${user.verificationToken}
      </a>
    </p>
    <p>
      This link will expire in 24 hours for security reasons. If you didn't sign up for our service, please ignore this email.
    </p>
    <p>Thank you,</p>
    <p>Your Company Name</p>
  </div>
    <a target="_blank" href="${VERIFY_HOST}/api/auth/verify/${user.verificationToken}" >Click verify email</a>`,
  };
  await sendEmail(verifyEmail);
  res.json({
    message: "Verify email send success",
  });
};

module.exports = resendVerifyEmail;
