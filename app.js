const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const blogsRouter = require("./controllers/blogs");
const usersRouter = require("./controllers/users");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect(config.mongoUrl)
  .then(() => {
    logger.info("connected to mongoDB");
  })
  .catch(error => logger.error(error));

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);

module.exports = app;
