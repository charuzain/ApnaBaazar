const db = require("./db");
const express = require("express");
const path = require("path");
const cors = require("cors");

// DB Helper functions
const dbHelpers = require("./helpers/dbHelpers")(db);

const cookieParser = require("cookie-parser");
let cookieSession = require("cookie-session");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productRouter = require("./routes/products");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const registerRouter = require("./routes/register");
const orderRouter = require("./routes/order");
const cartRouter = require("./routes/cart");
const paymentRouter = require("./routes/payment");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["user_id"],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter(dbHelpers));
app.use("/api/products", productRouter(dbHelpers));
app.use("/login", loginRouter(dbHelpers));
app.use("/logout", logoutRouter());
app.use("/register", registerRouter(dbHelpers));
app.use("/order", orderRouter(dbHelpers));
app.use("/cart", cartRouter(dbHelpers));
app.use("/create-payment-intent", paymentRouter());

module.exports = app;
