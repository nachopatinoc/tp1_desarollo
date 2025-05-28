import { instanciaFacultad as facultad } from "./utils"

test("debería crear una instancia de la clase facultad y leer sus atributos", () => {
    expect(facultad).toBeTruthy()
    expect(facultad.id).toBe(1)
    expect(facultad.nombre).toBe("Facultad Regional de San Rafael")
})