const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

mongoose.connect(process.env.MONGODB, () => {
  console.log("conectado a mongoDB");
});
