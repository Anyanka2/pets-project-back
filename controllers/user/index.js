const wrapper = require("../../helpers/controllerWrappers");
const addMyPet = require("./addMyPet");
const getListPets = require("./getListPets");
const currentUser = require("./currentUser");
const uploadImage = require('./uploadImage');
const updateMyPet = require('./updateMyPet.js');
const deleteMyPet = require('./deleteMyPet.js');

module.exports = {
  addMyPet: wrapper(addMyPet),
  getListPets: wrapper(getListPets),
  currentUser: wrapper(currentUser),
  uploadImage: wrapper(uploadImage),
  updateMyPet: wrapper(updateMyPet),
  deleteMyPet: wrapper(deleteMyPet)
};
