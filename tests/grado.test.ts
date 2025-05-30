import { instanciaGrado as grado } from "./utils"

test("Debería crear una instancia de la clase grado y leer sus atributos", () => {
    expect(grado).toBeTruthy()
    expect(grado.id).toBe(1)
    expect(grado.nombre).toBe("Asociado")
})