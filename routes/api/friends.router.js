const express = require("express");
const router = express.Router();
const controller = require("../../controllers/friends");
const controllerWrapper = require("../../helpers/controllerWrappers");

router.get('/', controllerWrapper(controller.getAllFriends));
router.post('/', controllerWrapper(controller.addFriends));

module.exports = router;