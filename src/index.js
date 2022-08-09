// 1. IMPORTACIONES
const express = require("express");
const app = express();
const PORT = 4003;
const { v4: uuid } = require("uuid");

const { users } = require("./database/db");

// 2.MIDDLEWARES
app.use(express.json());

// 3.ROUTES
app.get("/", (req, res) => {
  return res.json({
    ok: true,
    msg: "Usuarios obtenidos",
    data: users,
  });
});

app.post("/", (req, res) => {
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
});

// 4. SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
