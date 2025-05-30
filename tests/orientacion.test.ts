import { instanciaOrientacion as orientacion } from "./utils"

test("Debería crear una instancia de la clase orientacion y leer sus atributos", () => {

    expect(orientacion).toBeTruthy()
    expect(orientacion.orientacion).toBe(1)
    expect(orientacion.nombre).toBe("Analista de Sistemas")
    expect(orientacion.planId).toBe(1)
    expect(orientacion.especialidadId).toBe(1)
})