const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/user");
const wrapper = require("../../helpers/controllerWrappers");
const auth = require("../../middlewares/authMiddleware");
const uploadFile = require("../../middlewares/uploadFiles");

router.post("/pets", wrapper(auth), uploadFile.single("notice_image"), controllers.addMyPet);

router.put("/pets/:id", wrapper(auth), controllers.updateMyPet);

router.delete("/pets/:id", wrapper(auth), controllers.deleteMyPet);

router.get("/current", wrapper(auth), controllers.currentUser);

router.put("/current", wrapper(auth), controllers.updateInfoCurrentUser);

router.patch("/avatar", wrapper(auth), uploadFile.single("user_avatar"), controllers.uploadImage);

router.post(
  "/favoriteNotices/:noticeId",
  wrapper(auth),
  controllers.favoriteNotices
);

module.exports = router;
