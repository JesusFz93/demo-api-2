// 1. IMPORTACIONES
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PUERTO;

// 2.MIDDLEWARES
app.use(express.json());

// 3.ROUTES
app.get("/", (req, res) => {
  return res.json({
    msg: "Bienvenido al API",
    autor: process.env.AUTOR,
  });
});
app.use("/api/users", require("./routes/users.routes"));

// 4. SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
