import fs from "fs";
import { XMLParser } from "fast-xml-parser";

test("debería importar de paises.xml y parsea los datos a un objeto JS", async () => {

    const xml = fs.readFileSync("data/paises.xml", "utf-8");
    const parser = new XMLParser();
    const parsed = parser.parse(xml);

    const paises = parsed.VFPData?._expxml;

    expect(Array.isArray(paises)).toBe(true);
    expect(paises.length).toBeGreaterThan(0);
    expect(paises[0]).toHaveProperty("pais");
    expect(paises[0]).toHaveProperty("nombre");
})
