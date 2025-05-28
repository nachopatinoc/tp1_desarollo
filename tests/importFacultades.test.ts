import path from "path";
import { leerXML } from "../src/utils/leerXML";

test("debería importar de facultades.xml y parsea los datos a un objeto JS", async () => {

    const facultades = await leerXML(path.join(__dirname, '..', 'data', 'facultades.xml'))

    expect(Array.isArray(facultades)).toBe(true);
    expect(facultades.length).toBeGreaterThan(0);
    expect(facultades[0]).toHaveProperty("facultad");
    expect(facultades[0]).toHaveProperty("nombre");
})

