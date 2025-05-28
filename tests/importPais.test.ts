import path from "path";
import { leerXML } from "../src/utils/leerXML";

test("debería importar de paises.xml y parsea los datos a un objeto JS", async () => {

    const paises = await leerXML(path.join(__dirname, '..', 'data', 'paises.xml'))

    expect(Array.isArray(paises)).toBe(true);
    expect(paises.length).toBeGreaterThan(0);
    expect(paises[0]).toHaveProperty("pais");
    expect(paises[0]).toHaveProperty("nombre");
})
