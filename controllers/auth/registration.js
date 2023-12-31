const User = require("../../models/user");
const requestError = require("../../helpers/requestError");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
const sendEmail = require("../../helpers/sendEmail");
const registrationSchema = require("../../schemas/registration");

const registration = async (req, res, next) => {
  const { name, password, email } = req.body;
  const { error } = registrationSchema.validate({ name, email, password });
  const { VERIFY_HOST } = process.env;
  if (error) throw requestError(400, error);

  const user = await User.findOne({ email });
  if (user) throw requestError(409, "Email already in use");

  const hashPassword = await bcrypt.hash(password, 10);

  const verificationToken = nanoid();

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<div style="background-color: #f5f5f5; padding: 20px;">
    <h2>Email Verification</h2>
    <p>Dear ${name},</p>
    <p>
      Thank you for signing up! To complete your registration, please click the button below to verify your email address:
    </p>
    <a href="https://anyanka2.github.io/pets-project-front/verify/${verificationToken}" style="background-color: #007bff; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
      Verify Email
    </a>

    <p>Thank you,</p>
    <p>Like Pets</p>
  </div>
    `,
  };
  await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: newUser.email,
      name: newUser.name,
      id: newUser._id,
      verificationToken,
    },
  });
};

module.exports = registration;
