const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  user_name: {
    type: String,
    require: [true, "El nombre es requerido"],
    unique: true,
  },

  password: {
    type: String,
  },
});

module.exports = model("user", UserSchema);
