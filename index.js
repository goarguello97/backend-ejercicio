import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import db from "./config/db.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Permitir solo tu frontend
    credentials: true, // Permitir credenciales
  })
);
app.use(express.json());

// Rutas
app.use("/api", router);

const PORT = process.env.PORT || 3001;

// Si ponemos true cada vez que reiniciemos el server, limpiara la base de datos.
db.sync({ force: false }).then(() => {
  console.log("DB conectada");
  app.listen(PORT, () => console.log(`Server escuchando en el puerto ${PORT}`));
});
