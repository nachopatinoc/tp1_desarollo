import { instanciaEspecialidad as especialidad } from "./utils";

test("deberia crear una especialidad", () => {
    expect(especialidad.id).toBe(1);
    expect(especialidad.nombre).toBe("cardiologia");
});


