const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect(
    "mongodb+srv://DEMO:DEMO@cluster0.npjjx.mongodb.net/demo_db"
  );

  console.log("Base de datos conectada");
};

module.exports = {
  dbConnection,
};
