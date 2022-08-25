const { Router } = require("express");

const {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/products.controller");

const router = Router();

router.get("/", obtenerProductos);
router.post("/", crearProducto);
router.put("/:idProducto", actualizarProducto);
router.delete("/:idProducto", eliminarProducto);

module.exports = router;
