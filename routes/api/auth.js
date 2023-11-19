const express = require("express");
const router = express.Router();
const controller = require("../../controllers/auth");
const wrapper = require("../../helpers/controllerWrappers");

router.post("/registration", wrapper(controller.registration));

router.post("/login", wrapper(controller.login));

router.post("/logout", wrapper(controller.logout));

// router.get("/verify/:verificationToken", wrapper(controller.verifyEmail));

// router.post("/verify", wrapper(controller.resendVerifyEmail));

module.exports = router;


//  "securitySchemes": {
//       "Bearer": {
//         "type": "http",
//         "scheme": "bearer",
//         "bearerFormat": "JWT"
//       }