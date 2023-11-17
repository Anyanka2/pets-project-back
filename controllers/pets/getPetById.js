const Contact = require("../../models/pet");
const requestError = require("../../helpers/requestError");

const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id: owner } = req.user;
    const resolve = await Contact.findOne({ _id: id }, owner);

    if (!resolve) {
      throw requestError(400);
    }
    return res.status(200).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
