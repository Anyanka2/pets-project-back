const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");


const authRouter = require("./routes/api/auth");
const userRouter = require("./routes/api/user.router");
const noticesRouter = require("./routes/api/notices.router")
const newsRouter = require("./routes/api/news.router");
const friendsRouter = require("./routes/api/friends.router");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/notices", noticesRouter);
app.use("/api/news", newsRouter);
app.use("/api/friends", friendsRouter);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
    res.status(404).json({message: "Not found"});
});

app.use((err, req, res, next) => {
    let {status = 500, message = "Server error"} = err;
    if (message.includes("ENOENT")) {
        message = "Server Error";
    }
    
    res.status(status).json({message});
});

module.exports = app;
