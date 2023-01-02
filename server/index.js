const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const cors = require("cors");
const port = process.env.PORT || 3002;
require("./dbConfig/mongo");
require("dotenv").config({ path: "./.env" });
const cartRoutes = require("./routes/cartRoutes");
const foodRoutes = require("./routes/foods");
const mcRoutes = require("./routes/mcdonaldsroutes");
const bkRoutes = require("./routes/bkroutes");
const restoRoutes = require("./routes/restaurants");
const authRoutes = require("./routes/auth");
const passport = require("passport");

const app = express();

//middlewares
app.use(
  cookieSession({
    name: "session",
    keys: ["fede"],
    maxAge: 24 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", cartRoutes);
app.use("/foods", foodRoutes);
app.use("/restaurants/:nombre", mcRoutes);
app.use("/restaurants/:nombre", bkRoutes);
app.use("/restaurants", restoRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`servidor corriendo en el puerto ${port}`);
});
