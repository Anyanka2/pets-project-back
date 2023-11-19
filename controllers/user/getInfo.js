const requestError = require("../../helpers/requestError");

const getInfo = async (req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    throw requestError(401, "Not authorized");
  }
  res.status(200).json(req.user);
};
module.exports = getInfo;
