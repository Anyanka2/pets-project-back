const User = require("../../models/user");
const requestError = require("../../helpers/requestError");
const bcrypt = require("bcrypt");
// const {nanoid} = require("nanoid");
// const sendEmail = require("../../helpers/sendEmail");
const registrationSchema = require('../../schemas/registration');

const registration = async (req, res, next) => {
    const {name, password, email} = req.body;
    const {error} = registrationSchema.validate({name, email, password})
    if (error) throw requestError(400, error);

    const user = await User.findOne({email});
    if (user) throw requestError(409, "Email already in use");

    const hashPassword = await bcrypt.hash(password, 10);

    // const verificationToken = nanoid();

    const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        // verificationToken,
    });

    // const verifyEmail = {
    //   to: email,
    //   subject: "Verify email",
    //   html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}" >Click verify email</a>`,
    // };
    // await sendEmail(verifyEmail);

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
            id: newUser._id,
            avatarURL: newUser.avatarURL,
            // verificationToken,
        },
    });
};

module.exports = registration;
