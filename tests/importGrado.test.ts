import fs from "fs";
import { XMLParser } from "fast-xml-parser";

test("debería importar de grados.xml y parsea los datos a un objeto JS", async () => {

    const xml = fs.readFileSync("data/grados.xml", "utf-8");
    const parser = new XMLParser();
    const parsed = parser.parse(xml);

    const grados = parsed.VFPData?._expxml;


    expect(Array.isArray(grados)).toBe(true);
    expect(grados.length).toBeGreaterThan(0);
    expect(grados[0]).toHaveProperty("grado");
    expect(grados[0]).toHaveProperty("nombre");

})
