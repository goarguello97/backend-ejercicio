import express from "express";
import empleadoRouter from "./Empleado.routes.js";

const router = express.Router();

router.use("/empleados", empleadoRouter);

export default router;
