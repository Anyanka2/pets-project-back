const wrapper = require("../../helpers/controllerWrappers");
const addMyPet = require("./addMyPet");
const currentUser = require("./currentUser");
const uploadImage = require("./uploadImage");
const updateMyPet = require("./updateMyPet.js");
const deleteMyPet = require("./deleteMyPet.js");
const updateInfoCurrentUser = require("./updateInfoCurrentUser.js");
const favoriteNotices = require("./favoriteNotices");

module.exports = {
  addMyPet: wrapper(addMyPet),
  currentUser: wrapper(currentUser),
  uploadImage: wrapper(uploadImage),
  updateMyPet: wrapper(updateMyPet),
  deleteMyPet: wrapper(deleteMyPet),
  updateInfoCurrentUser: wrapper(updateInfoCurrentUser),
  favoriteNotices: wrapper(favoriteNotices),
};
