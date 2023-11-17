const wrapper = require("../../helpers/controllerWrappers");
const addMyPet = require("./addMyPet");
const getListPets = require("./getListPets");
const getInfo = require("./getInfo");
const uploadImage = require('./uploadImage')
module.exports = {
  addMyPet: wrapper(addMyPet),
  getListPets: wrapper(getListPets),
  getInfo: wrapper(getInfo),
  uploadImage: wrapper(uploadImage),
};
