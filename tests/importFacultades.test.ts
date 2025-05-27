;
import fs from "fs";
import { XMLParser } from "fast-xml-parser";

test("debería importar de facultades.xml y parsea los datos a un objeto JS", async () => {
    
    const xml = fs.readFileSync("data/facultades.xml", "utf-8");
    const parser = new XMLParser();
    const parsed = parser.parse(xml);

    const facultades = parsed.VFPData?._expxml;

    
    expect(Array.isArray(facultades)).toBe(true);
    expect(facultades.length).toBeGreaterThan(0);
    expect(facultades[0]).toHaveProperty("facultad");
    expect(facultades[0]).toHaveProperty("nombre");

})

