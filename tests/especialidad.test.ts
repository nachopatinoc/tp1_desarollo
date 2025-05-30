import { instanciaEspecialidad as especialidad } from "./utils";

test("Deberia crear una especialidad", () => {
    expect(especialidad.id).toBe(1);
    expect(especialidad.nombre).toBe("cardiologia");
});


