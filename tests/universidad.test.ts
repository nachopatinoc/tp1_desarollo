import { instanicaUniversidad as universidad } from "./utils";

test("Deberia crear una instacia de la clase universidad y leer sus atributos", () => {
    expect(universidad).toBeTruthy()
    expect(universidad.id).toBe(1)
    expect(universidad.nombre).toBe("Universidad Tegnologica Nacional de Buenos Aires")
})
