const express = require("express");
const router = express.Router();
const petsController = require("../../controllers/pets");
const auth = require("../../middlewares/authMiddleware");
const wrapper = require("../../helpers/controllerWrappers");


router.get("/", petsController.listPets);

router.get("/:id", petsController.getPetById);

router.post("/", petsController.addPet);

router.delete("/:id", petsController.removePet);

router.put("/:id", petsController.updatePet);

router.patch("/:id", petsController.updateFavorite);

// router.patch(
//   "/:id/image",
//   uploadFile.single("image"),
//   contactsController.uploadImage
// );

module.exports = router;
