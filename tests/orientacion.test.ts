import { Orientacion } from "../src/models/Orientacion"

test("debería crear una instancia de la clase orientacion y leer sus atributos", () => {
    const orientacion = new Orientacion(
        1,
        "Analista de Sistemas",
        1,
        1
    )

    expect(orientacion).toBeTruthy()
    expect(orientacion.orientacion).toBe(1)
    expect(orientacion.nombre).toBe("Analista de Sistemas")
    expect(orientacion.planId).toBe(1)
    expect(orientacion.especialidadId).toBe(1)
})