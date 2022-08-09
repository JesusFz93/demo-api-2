// 1. IMPORTACIONES
const express = require("express");
const app = express();
const PORT = 4003;

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

// 4. SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
