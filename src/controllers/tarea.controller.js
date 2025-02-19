const Tarea = require("../models/tarea.model");

// Obtener todas las tareas
exports.obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener tareas" });
  }
};

// Crear una nueva tarea
exports.crearTarea = async (req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();
    res.status(201).json(nuevaTarea);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la tarea" });
  }
};

// Eliminar una tarea
exports.eliminarTarea = async (req, res) => {
  try {
    await Tarea.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
};
