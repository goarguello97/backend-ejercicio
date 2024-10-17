import { Faker, es } from "@faker-js/faker";
import Empleado from "../models/Empleado.js";

const customFaker = new Faker({ locale: [es] });

for (let i = 0; i < 10; i++) {
  Empleado.create({
    nombreCompleto: customFaker.person.fullName(),
    edad: customFaker.number.int({ min: 18, max: 120 }),
    area: customFaker.person.jobArea(),
    antiguedad: customFaker.number.int({ min: 0, max: 50 }),
    telefono: customFaker.phone.number(),
  });
}
