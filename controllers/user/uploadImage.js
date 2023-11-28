const User = require("../../models/user");
const fs = require("fs/promises");
const requestError = require("../../helpers/requestError");
const path = require("path");
const Jimp = require("jimp");
const uploadImage = async (req, res, next) => {
    const id = req.user;
    const imageUrl = req.file?.path;

    const updateuser = await User.findByIdAndUpdate(
        id,
        {
            avatarURL: imageUrl,
        },
        {new: true}
    );
    return res.status(200).json({

        email: updateuser.email,
        avatarURL: updateuser.avatarURL,

    });
};

module.exports = uploadImage;
