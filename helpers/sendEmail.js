const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { API_TOKEN } = process.env;
sgMail.setApiKey(API_TOKEN);

const sendEmail = async (data) => {
  const email = { ...data, from: "liutyivova995@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
