const addPet = require("./addPet");
const getPetById = require("./getPetById");
const listPets = require("./listPets");
const removePet = require("./removePet");
const updatePet = require("./updatePet");
const updateFavorite = require("./favorite");
const uploadImage = require("../user/uploadImage");

module.exports = {
  addPet,
  getPetById,
  listPets,
  removePet,
  updatePet,
  updateFavorite,
  uploadImage,
};
