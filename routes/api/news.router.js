const express = require("express");
const router = express.Router();
const controller = require('../../controllers/news');
const controllerWrapper = require("../../helpers/controllerWrappers");

router.get('/', controllerWrapper(controller.getNews));
router.post('/', controllerWrapper(controller.addNews));

module.exports = router;