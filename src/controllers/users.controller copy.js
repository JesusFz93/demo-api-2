const { v4: uuid } = require("uuid");
const { users } = require("../database/db");
const User = require("../models/user");

const getUsers = async (req, res) => {
  const usuarios = await User.find();

  return res.json({
    ok: true,
    msg: "Usuarios obtenidos",
    data: usuarios,
  });
};

const createUser = (req, res) => {
  const { user_name, password } = req.body;

  const user = {
    id: uuid(),
    user_name: user_name,
    password: password,
  };

  users.push(user);

  return res.json({
    ok: true,
    msg: "Usuario creado",
    data: user,
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  const { user_name, password } = req.body;

  const usuarioEncontrado = users.find((user) => {
    return user.id === idUser;
  });

  usuarioEncontrado.user_name = user_name;
  usuarioEncontrado.password = password;

  return res.json({
    ok: true,
    msg: "Usuario actualizado",
    data: usuarioEncontrado,
  });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;

  const usuarioEncontrado = users.find((user) => {
    return user.id === idUser;
  });

  users.splice(users.indexOf(usuarioEncontrado), 1);

  return res.json({
    ok: true,
    msg: "Usuario eliminado",
    data: usuarioEncontrado,
  });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
