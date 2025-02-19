const mongoose = require("mongoose");

const tareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  completada: { type: Boolean, default: false },
});

const Tarea = mongoose.model("Tarea", tareaSchema);

module.exports = Tarea;
