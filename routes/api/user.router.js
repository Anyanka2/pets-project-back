const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/user");
const wrapper = require("../../helpers/controllerWrappers");
const auth = require("../../middlewares/authMiddleware");
const uploadFile = require("../../middlewares/uploadFiles");

router.post("/pets",  controllers.addMyPet);

router.get("/pets",  controllers.getListPets);

router.put("/pets/:id",  controllers.updateMyPet);

router.delete("/pets/:id",  controllers.deleteMyPet);

router.get("/current",  controllers.currentUser);

router.put("/current",  controllers.updateInfoCurrentUser);

router.patch("/avatar", uploadFile.single("avatar"), controllers.uploadImage);

router.patch("/favoriteNotices/:noticeId", wrapper(auth), controllers.favoriteNotices);

module.exports = router;
