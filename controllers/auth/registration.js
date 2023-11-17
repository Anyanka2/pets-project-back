const User = require("../../models/user");
const requestError = require("../../helpers/requestError");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const sendEmail = require("../../helpers/sendEmail");

const registration = async (req, res, next) => {
  try {
    const { password, email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return requestError(409, "Email already in use");
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const verificationToken = nanoid();

    const newUser = await User.create({
      email,
      password: hashPassword,
      avatarURL: gravatar.url(email),
      verificationToken,
    });

    const verifyEmail = {
      to: email,
      subject: "Verify email",
      html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}" >Click verify email</a>`,
    };
    await sendEmail(verifyEmail);

    res.status(201).json({
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
        id: newUser._id,
        avatarURL: newUser.avatarURL,
        verificationToken,
      },
    });
  } catch (error) {
    error = requestError(409);
    throw error;
  }
};

module.exports = registration;
