import path from "path";
import { leerXML } from "../src/utils/leerXML";

test("debería importar de orientaciones.xml y parsea los datos a un objeto JS", async () => {

    const orientaciones = await leerXML(path.join(__dirname, '..', 'data', 'orientaciones.xml'))

    expect(Array.isArray(orientaciones)).toBe(true);
    expect(orientaciones.length).toBeGreaterThan(0);
    expect(orientaciones[0]).toHaveProperty("especialidad");
    expect(orientaciones[0]).toHaveProperty("plan");
    expect(orientaciones[0]).toHaveProperty("orientacion");
    expect(orientaciones[0]).toHaveProperty("nombre");
})
