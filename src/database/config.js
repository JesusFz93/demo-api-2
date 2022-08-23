const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Base de datos conectada");
  } catch {
    console.log("Error en la base de datos");
  }
};

module.exports = {
  dbConnection,
};
