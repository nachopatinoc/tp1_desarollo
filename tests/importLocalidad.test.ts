import fs from "fs";
import { XMLParser } from "fast-xml-parser";

test("debería importar de localidad.xml y parsea los datos a un objeto JS", async () => {
    const xml = fs.readFileSync("data/localidades.xml", "utf-8");
    const parser = new XMLParser();
    const parsed = parser.parse(xml);

    const localidades = parsed.VFPData?._exportar;

    expect(Array.isArray(localidades)).toBe(true);
    expect(localidades.length).toBeGreaterThan(0);
    expect(localidades[0]).toHaveProperty("codigo");
    expect(localidades[0]).toHaveProperty("ciudad");
    expect(localidades[0]).toHaveProperty("provincia");
    expect(localidades[0]).toHaveProperty("pais_del_c");
});
