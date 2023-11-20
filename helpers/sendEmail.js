const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SEND_GRID_API_KEY } = process.env;
sgMail.setApiKey(SEND_GRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "info.petrilogik@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
