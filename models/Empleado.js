import { DataTypes, Model } from "sequelize";

class Empleado extends Model {}

Empleado.init(
  {
    nombreCompleto: { type: DataTypes.STRING, allowNull: false },
    edad: { type: DataTypes.NUMBER, allowNull: false },
    area: { type: DataTypes.STRING, allowNull: false },
    antiguedad: { type: DataTypes.NUMBER, allowNull: false },
    telefono: { type: DataTypes.NUMBER, allowNull: false },
  },
  { sequelize, modelName: "empleado" }
);

export default Empleado;
