const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const petsRouter = require("./routes/api/pets");
const authRouter = require("./routes/api/auth");
const userRouter = require("./routes/api/user");
const noticesRouter = require("./routes/api/notices");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/pets", petsRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/find_pet", noticesRouter);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
    res.status(404).json({message: "Not found"});
});

app.use((err, req, res, next) => {
    let {status = 500, message = "Server error"} = err;
    if (message.includes("ENOENT")) {
        message = "Server Error";
    }
    console.log(err.code);
    res.status(status).json({message});
});

module.exports = app;
