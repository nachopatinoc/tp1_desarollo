import { instanciaPais as pais } from "./utils"

test("Debería crear una instancia de la clase pais y leer sus atributos", () => {
    expect(pais).toBeTruthy()
    expect(pais.id).toBe(1)
    expect(pais.nombre).toBe("Argentina")
})