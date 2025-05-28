import { instanciaLocalidad as localidad } from "./utils";

test("deberia crear una instacia de la clase localidad y leer sus atributos", () => {

    expect(localidad).toBeTruthy()
    expect(localidad.id).toBe(1)
    expect(localidad.ciudad).toBe("Buenos Aires")
    expect(localidad.provincia).toBe("Buenos Aires")
    expect(localidad.paisDelC).toBe("Argentina")
});
