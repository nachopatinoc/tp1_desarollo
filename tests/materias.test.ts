import { Materia } from "../src/models/Materia";

test ("deberia crear una instacia de la clase materia y leer sus atributos", () => {
    const materia = new Materia(

        1,
        "Matemáticas",
        2023,
        101,
        202
    );

    expect(materia).toBeTruthy();
    expect(materia.id).toBe(1);
    expect(materia.nombre).toBe("Matemáticas");
    expect(materia.ano).toBe(2023);
    expect(materia.planId).toBe(101);
})