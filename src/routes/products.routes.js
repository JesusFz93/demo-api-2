const { Router } = require("express");

const {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/products.controller");

const { validarJWT } = require("../middlewares/jwt.middleware");

const router = Router();

router.get("/", validarJWT, obtenerProductos);
router.post("/", crearProducto);
router.put("/:idProducto", actualizarProducto);
router.delete("/:idProducto", eliminarProducto);

module.exports = router;
