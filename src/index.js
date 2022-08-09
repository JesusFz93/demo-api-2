// 1. IMPORTACIONES
const express = require("express");
const app = express();
const PORT = 4003;

// 2.MIDDLEWARES
app.use(express.json());

// 3.ROUTES
app.use("/api/users", require("./routes/users.routes"));

// 4. SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
