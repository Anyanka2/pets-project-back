const express = require("express");
const router = express.Router();
const controller = require('../../controllers/news');
const controllerWrapper = require("../../helpers/controllerWrappers");

router.get('/', controllerWrapper(controller.getNews));

module.exports = router;