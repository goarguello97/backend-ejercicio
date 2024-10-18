import express from "express";
import EmpleadoController from "../controllers/EmpleadoController.js";

const empleadoRouter = express.Router();

empleadoRouter.get("/", EmpleadoController.getEmpleados);
empleadoRouter.get("/:id", EmpleadoController.getEmpleado);

export default empleadoRouter;
