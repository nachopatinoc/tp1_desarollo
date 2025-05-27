import fs from "fs";
import { XMLParser } from "fast-xml-parser";

test("debería importar de universidad.xml y parsea los datos a un objeto JS", async () => {

    const xml = fs.readFileSync("data/universidad.xml", "utf-8");
    const parser = new XMLParser();
    const parsed = parser.parse(xml);

    const universidades = parsed.VFPData?._expxml;


    expect(Array.isArray(universidades)).toBe(true);
    expect(universidades.length).toBeGreaterThan(0);
    expect(universidades[0]).toHaveProperty("universida");
    expect(universidades[0]).toHaveProperty("nombre");
})
