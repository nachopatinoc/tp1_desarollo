import path from "path";
import { leerXML } from "../src/utils/leerXML";

test("debería importar de especialidad.xml y parsea los datos a un objeto JS", async () => {

    const especialidades = await leerXML(path.join(__dirname, '..', 'data', 'especialidades.xml'))

    expect(Array.isArray(especialidades)).toBe(true);
    expect(especialidades.length).toBeGreaterThan(0);
    expect(especialidades[0]).toHaveProperty("especialidad");
    expect(especialidades[0]).toHaveProperty("nombre");

})
