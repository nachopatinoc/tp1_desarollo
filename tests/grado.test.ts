import { Grado } from "../src/models/Grado"

test("debería crear una instancia de la clase grado y leer sus atributos", () => {
    const grado = new Grado(
        1,
        "Asociado"
    )

    expect(grado).toBeTruthy()
    expect(grado.id).toBe(1)
    expect(grado.nombre).toBe("Asociado")
})