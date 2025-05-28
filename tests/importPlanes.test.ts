import path from "path";
import { leerXML } from "../src/utils/leerXML";

test("debería importar de planes.xml y parsea los datos a un objeto JS", async () => {

    const planes = await leerXML(path.join(__dirname, '..', 'data', 'planes.xml'))

    expect(Array.isArray(planes)).toBe(true);
    expect(planes.length).toBeGreaterThan(0);
    expect(planes[0]).toHaveProperty("especialidad");
    expect(planes[0]).toHaveProperty("plan");
    expect(planes[0]).toHaveProperty("nombre");
})

