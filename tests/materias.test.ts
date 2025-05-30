import { instanciaMateria as materia } from "./utils";

test("Deberia crear una instacia de la clase materia y leer sus atributos", () => {
    expect(materia).toBeTruthy();
    expect(materia.materia).toBe(8);
    expect(materia.especialidadId).toBe(65);
    expect(materia.planId).toBe(102);
    expect(materia.nombre).toBe("Algebra y Geometría Analítica");
    expect(materia.ano).toBe(1);
})