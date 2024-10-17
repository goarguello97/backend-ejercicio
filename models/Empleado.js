import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class Empleado extends Model {}

Empleado.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nombreCompleto: { type: DataTypes.STRING, allowNull: false },
    edad: { type: DataTypes.INTEGER, allowNull: false },
    area: { type: DataTypes.STRING, allowNull: false },
    antiguedad: { type: DataTypes.INTEGER, allowNull: false },
    telefono: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "empleado" }
);

export default Empleado;
