const juegosController = {};

import JuegosModel from "../models/Juegos.js";

// GET - Obtener todos los juegos
juegosController.getJuegos = async (req, res) => {
  try {
    const juegos = await JuegosModel.find();
    res.json(juegos);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener juegos" });
  }
};

// POST - Crear un nuevo juego
juegosController.createJuegos = async (req, res) => {
  try {
    const { nombre, categoria, apuestaMinima, apuestaMaxima } = req.body;

    const nuevoJuego = new JuegosModel({
      nombre,
      categoria,
      apuestaMinima,
      apuestaMaxima,
    });

    await nuevoJuego.save();
    res.json({ message: "Juego guardado" });
  } catch (error) {
    res.status(400).json({ message: "Error al guardar el juego" });
  }
};

// DELETE - Eliminar juego por ID
juegosController.deleteJuegos = async (req, res) => {
  try {
    await JuegosModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Juego eliminado" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar el juego" });
  }
};

// PUT - Actualizar juego por ID
juegosController.updateJuegos = async (req, res) => {
  try {
    const { nombre, categoria, apuestaMinima, apuestaMaxima } = req.body;

    await JuegosModel.findByIdAndUpdate(
      req.params.id,
      {
        nombre,
        categoria,
        apuestaMinima,
        apuestaMaxima,
      },
      { new: true }
    );

    res.json({ message: "Juego actualizado" });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el juego" });
  }
};

export default juegosController;
