const Pets = require("../../models/pet");
const listContacts = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;

    const resolve = await Pets.find({ owner });
    return res.status(200).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = listContacts;
