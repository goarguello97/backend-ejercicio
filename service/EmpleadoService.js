import Empleado from "../models/Empleado.js";

export default class EmpleadoService {
  static async getEmpleados() {
    try {
      const response = await Empleado.findAll();
      return { error: false, data: response };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}
