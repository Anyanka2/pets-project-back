const Pets = require("../../models/pet");

const updatePets = async (req, res, next) => {
  try {
    const { id } = req.params;

    const resolve = await Pets.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = updatePets;
