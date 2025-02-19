const express = require("express");
const cors = require("cors");
const db = require("./config/database");
const tareaRoutes = require("./routes/tarea.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/tareas", tareaRoutes);

module.exports = app;
