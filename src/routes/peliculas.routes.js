const { Router } = require("express");

const {
  getPeliculas,
  crearPelicula,
  actualizarPelicula,
  deletepelicula,
} = require("../controllers/peliculas.controller");

const router = Router();

router.get("/", getPeliculas);

router.post("/", crearPelicula);

router.put("/:idPelicula", actualizarPelicula);

router.delete("/:idPelicula", deletepelicula);

module.exports = router;
