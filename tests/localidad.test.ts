import { Localidad } from "../src/models/Localidad"

test("deberia crear una instacia de la clase localidad y leer sus atributos", () => {
    const localidad = new Localidad(
        1,
        "Buenos Aires",
        "Buenos Aires",
        "Argentina",
    );
    expect(localidad).toBeTruthy()
    expect(localidad.id).toBe(1)
    expect(localidad.ciudad).toBe("Buenos Aires")
    expect(localidad.provincia).toBe("Buenos Aires")
    expect(localidad.paisDelC).toBe("Argentina")
});
