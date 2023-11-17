const User = require("../../models/user");
const fs = require("fs/promises");
const requestError = require("../../helpers/requestError");
const path = require("path");
const Jimp = require("jimp");
const uploadImage = async (req, res, next) => {
  const   id = req.user;

  const { filename } = req.file;
  const tmpPath = path.resolve(__dirname, "../../tmp", filename);
  const publicPath = path.resolve(__dirname, "../../public/avatar", filename);

  await Jimp.read(tmpPath)
    .then((image) => {
      return image.resize(250, 250).write(tmpPath);
    })
    .catch((error) => {
      console.error(error);
    });

  try {
    fs.rename(tmpPath, publicPath);
  } catch (error) {
    fs.unlink(tmpPath);
    throw requestError(500);
  }

  const updateuser = await User.findByIdAndUpdate(
    id,
    {
      avatarURL: `/public/avatar/${filename}`,
    },
    { new: true }
  );
  return res.status(200).json({
    
      email: updateuser.email,
      avatarURL: updateuser.avatarURL,
  
  });
};

module.exports = uploadImage;
