import { Universidad } from "../src/models/Universidad";

test("deberia crear una instacia de la clase universidad y leer sus atributos", () => {
    const universidad = new Universidad(
        1,
        "Universidad Nacional de Buenos Aires",
    );

    expect(universidad).toBeTruthy()
    expect(universidad.id).toBe(1)
    expect(universidad.nombre).toBe("Universidad Nacional de Buenos Aires")
})
