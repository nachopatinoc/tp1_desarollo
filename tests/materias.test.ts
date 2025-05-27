import { Materia } from "../src/models/Materia";

test ("deberia crear una instacia de la clase materia y leer sus atributos", () => {
    const materia = new Materia(

        8,
        65,
        102,
        "Algebra y Geometría Analítica",
        1
    );

    expect(materia).toBeTruthy();
    expect(materia.id).toBe(8);
    expect(materia.especialidadId).toBe(65);
    expect(materia.planId).toBe(102);
    expect(materia.nombre).toBe("Algebra y Geometría Analítica");
    expect(materia.ano).toBe(1);
})