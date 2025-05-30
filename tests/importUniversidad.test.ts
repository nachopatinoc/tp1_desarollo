import path from "path";
import { leerXML } from "../src/utils/leerXML";

test("Debería importar de universidad.xml y parsea los datos a un objeto JS", async () => {

    const universidades = await leerXML(path.join(__dirname, '..', 'data', 'universidad.xml'))

    expect(Array.isArray(universidades)).toBe(true);
    expect(universidades.length).toBeGreaterThan(0);
    expect(universidades[0]).toHaveProperty("universida");
    expect(universidades[0]).toHaveProperty("nombre");
})
