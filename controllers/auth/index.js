const registration = require("./registration");
const login = require("./login");
const logout = require("./logout");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
    registration,
    login,
    logout,
    verifyEmail,
    resendVerifyEmail,
};
