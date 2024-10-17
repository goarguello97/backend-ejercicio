import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import db from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rutas
//app.use("/api")

const PORT = process.env.PORT || 3001;

db.sync({ force: true }).then(() => {
  console.log("DB conectada");
  app.listen(PORT, () => console.log(`Server escuchando en el puerto ${PORT}`));
});
