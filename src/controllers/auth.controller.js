const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generarJWT } = require("../helpers/jwt.helper");

const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const emailEncontrado = await User.findOne({ email: email });

    if (emailEncontrado) {
      return res.status(400).json({
        ok: false,
        msg: `Error, el correo ${emailEncontrado.email} ya esta registrado`,
      });
    }

    const usernameEncontrado = await User.findOne({ username: username });

    if (usernameEncontrado) {
      return res.status(400).json({
        ok: false,
        msg: `Error, el username ${usernameEncontrado.username} ya esta registrado`,
      });
    }

    const salt = bcrypt.genSaltSync(10);

    const user = {
      email: email,
      username: username,
      password: bcrypt.hashSync(password, salt),
    };

    const nuevoUsuario = await User.create(user);

    const token = await generarJWT(nuevoUsuario.id);

    return res.status(201).json({
      ok: true,
      msg: "Registro exitoso",
      data: nuevoUsuario,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Problemas del lado del servidor",
      data: [],
    });
  }
};

module.exports = {
  registerUser,
};
