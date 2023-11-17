const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");
const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>  console.log("Database connection successful"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  app.listen(PORT, () => {
    console.log(`Server running using port: ${PORT}`);
  })