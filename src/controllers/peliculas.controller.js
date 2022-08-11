const { v4: uuid } = require("uuid");
const { peliculas } = require("../database/db");

const getPeliculas = (req, res) => {
  return res.json({
    ok: true,
    msg: "Peliculas obtenidas",
    data: peliculas,
  });
};

const crearPelicula = (req, res) => {
  const { title, year, price, regions, category } = req.body;

  const pelicula = {
    id: uuid(),
    title,
    year,
    price,
    regions,
    category,
  };

  peliculas.push(pelicula);

  return res.json({
    ok: true,
    msg: "Pelicula creada",
    data: pelicula,
  });
};

const actualizarPelicula = (req, res) => {
  const { idPelicula } = req.params;
  const { title, year, price, regions, category } = req.body;

  const peliculaEncontrada = peliculas.find((pelicula) => {
    return pelicula.id === idPelicula;
  });

  peliculaEncontrada.title = title;
  peliculaEncontrada.year = year;
  peliculaEncontrada.price = price;
  peliculaEncontrada.regions = regions;
  peliculaEncontrada.category = category;

  return res.json({
    ok: true,
    msg: "Pelicula actualizada",
    data: peliculaEncontrada,
  });
};

const deletepelicula = (req, res) => {
  const { idPelicula } = req.params;

  const peliculaEncontrada = peliculas.find((pelicula) => {
    return pelicula.id === idPelicula;
  });

  peliculas.splice(peliculas.indexOf(peliculaEncontrada), 1);

  return res.json({
    ok: true,
    msg: "Pelicula eliminada",
    data: peliculaEncontrada,
  });
};

module.exports = {
  getPeliculas,
  crearPelicula,
  actualizarPelicula,
  deletepelicula,
};
