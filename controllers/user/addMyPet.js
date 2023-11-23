const Pets = require("../../models/pet");
const User = require("../../models/user");
const mongoose = require("mongoose");
const addMyPet = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;

    const { name, birthday, type, comments } = req.body;

    const resolve = await Pets.create({
      owner,
      name,
      birthday,
      type,
      comments,
    });

    req.user.pets.push(resolve._id);
    await User.findByIdAndUpdate(owner, req.user);
 


    return res.status(201).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = addMyPet;
