import path from "path";
import { leerXML } from "../src/utils/leerXML";

test("Debería importar de materias.xml y parsea los datos a un objeto JS", async () => {

    const materias = await leerXML(path.join(__dirname, '..', 'data', 'materias.xml'))

    expect(Array.isArray(materias)).toBe(true);
    expect(materias.length).toBeGreaterThan(0);
    expect(materias[0]).toHaveProperty("especialidad");
    expect(materias[0]).toHaveProperty("plan");
    expect(materias[0]).toHaveProperty("materia");
    expect(materias[0]).toHaveProperty("nombre");
    expect(materias[0]).toHaveProperty("ano");
})
