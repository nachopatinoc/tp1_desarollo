import fs from "fs";
import { XMLParser } from "fast-xml-parser";

test("debería importar de especialidad.xml y parsea los datos a un objeto JS", async () => {

    const xml = fs.readFileSync("data/especialidades.xml", "utf-8");
    const parser = new XMLParser();
    const parsed = parser.parse(xml);

    const especialidades = parsed.VFPData?._expxml;


    expect(Array.isArray(especialidades)).toBe(true);
    expect(especialidades.length).toBeGreaterThan(0);
    expect(especialidades[0]).toHaveProperty("especialidad");
    expect(especialidades[0]).toHaveProperty("nombre");

})
