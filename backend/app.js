const db = require("./db");
const express = require("express");
const path = require("path");

// DB Helper functions
const dbHelpers = require("./helpers/dbHelpers")(db);
const dbProductHelper = require("./helpers/dbProductHelpers")(db);
const dbLoginHelper = require("./helpers/dbLoginHelpers")(db);
const dbRegisterHelpers = require("./helpers/dbRegisterHelpers")(db);

const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productRouter = require("./routes/products");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const registerRouter = require("./routes/register");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter(dbHelpers));
app.use("/api/products", productRouter(dbProductHelper));
app.use("/login", loginRouter(dbLoginHelper));
app.use("/logout", logoutRouter());
app.use("/register", registerRouter(dbRegisterHelpers));
module.exports = app;
