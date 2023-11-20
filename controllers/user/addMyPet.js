const Pets = require("../../models/pet");

const addMyPet = async (req, res, next) => {
  try {
    const {id: owner}= req.user
    const { name, birthday, type, comments } = req.body;

    const resolve = await Pets.create({
      owner,
      name,
      birthday,
      type,
      comments,
    });

    return res.status(201).json(resolve);
  } catch (error) {
    next(error);
  }
  
};

module.exports = addMyPet;
