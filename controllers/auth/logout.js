const User = require("../../models/user");

const logout = async (req, res, next) => {
  const { _id } = req.body;
  
  await User.findByIdAndUpdate( _id, { token: "" });

  res.status(204).json({
    message: "Logout success",
  });
};

module.exports = logout;
