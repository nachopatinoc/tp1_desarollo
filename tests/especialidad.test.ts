import { Especialidad } from "../src/models/Especialidad";

test("deberia crear una especialidad", () => {
    const especialidad = new Especialidad(1, "cardiologia");

    expect(especialidad.id).toBe(1);
    expect(especialidad.nombre).toBe("cardiologia");
});


