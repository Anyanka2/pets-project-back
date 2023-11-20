const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/user");
const wrapper = require("../../helpers/controllerWrappers");
const auth = require("../../middlewares/authMiddleware");
// const controller = require("../../controllers/auth");
const uploadFile = require("../../middlewares/uploadFiles");

router.post("/pets", wrapper(auth), controllers.addMyPet);
router.get("/pets", wrapper(auth), controllers.getListPets);
router.put("/pets/:id", wrapper(auth), controllers.updateMyPet);
router.delete("/pets/:id", wrapper(auth), controllers.deleteMyPet);
router.get("/current", wrapper(auth), controllers.currentUser);
router.patch("/avatar", uploadFile.single("avatar"), controllers.uploadImage);
module.exports = router;
