import path from "path";
import { leerXML } from "../src/utils/leerXML";

test("debería importar de localidad.xml y parsea los datos a un objeto JS", async () => {

    const localidades = await leerXML(path.join(__dirname, '..', 'data', 'localidades.xml'))

    expect(Array.isArray(localidades)).toBe(true);
    expect(localidades.length).toBeGreaterThan(0);
    expect(localidades[0]).toHaveProperty("codigo");
    expect(localidades[0]).toHaveProperty("ciudad");
    expect(localidades[0]).toHaveProperty("provincia");
    expect(localidades[0]).toHaveProperty("pais_del_c");
});
