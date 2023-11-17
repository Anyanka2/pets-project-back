const Contacts = require("../../models/pet");

const updateFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id: owner } = req.user;

    const resolve = await Contacts.findOneAndUpdate(
      { _id: id },
      req.body,
      owner
    );
    res.status(200).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavorite;
