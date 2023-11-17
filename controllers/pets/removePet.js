const Pets = require("../../models/pet");
const requestError = require("../../helpers/requestError");
// fix message for delete pet
const removePets = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const { _id: owner } = req.user;

    const resolve = await Pets.deleteOne({ _id: id });
    if (!resolve) {
      throw requestError(400);
    }
    return res.status(204).json({ message: "Pet has been removed" });
  } catch (error) {
    next(error);
  }
};
module.exports = removePets;
