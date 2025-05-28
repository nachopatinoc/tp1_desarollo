import path from 'path'
import { leerXML } from '../src/utils/leerXML';

test("debería importar de grados.xml y parsea los datos a un objeto JS", async () => {

    const grados = await leerXML(path.join(__dirname, '..', 'data', 'grados.xml'))

    expect(Array.isArray(grados)).toBe(true);
    expect(grados.length).toBeGreaterThan(0);
    expect(grados[0]).toHaveProperty("grado");
    expect(grados[0]).toHaveProperty("nombre");

})
