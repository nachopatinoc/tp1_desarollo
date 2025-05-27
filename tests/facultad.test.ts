import { Facultad } from "../src/models/Facultad"

test("debería crear una instancia de la clase facultad y leer sus atributos", () => {
    const facultad = new Facultad(
        1,
        "Facultad Regional de San Rafael"
    )

    expect(facultad).toBeTruthy()
    expect(facultad.id).toBe(1)
    expect(facultad.nombre).toBe("Facultad Regional de San Rafael")
})