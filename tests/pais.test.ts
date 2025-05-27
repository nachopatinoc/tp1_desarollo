import { Pais } from "../src/models/Pais"

test("debería crear una instancia de la clase pais y leer sus atributos", () => {
    const pais = new Pais(
        1,
        "Argentina"
    )

    expect(pais).toBeTruthy()
    expect(pais.id).toBe(1)
    expect(pais.nombre).toBe("Argentina")
})