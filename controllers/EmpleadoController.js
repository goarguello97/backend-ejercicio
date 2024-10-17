import EmpleadoService from "../service/EmpleadoService.js";

export default class EmpleadoController {
  static async getEmpleados(req, res) {
    const { error, data } = await EmpleadoService.getEmpleados();
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }
}
