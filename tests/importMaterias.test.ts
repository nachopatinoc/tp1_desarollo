
import fs from "fs";
import { XMLParser } from "fast-xml-parser";

test("debería importar de materias.xml y parsea los datos a un objeto JS", async () => {
    
    const xml = fs.readFileSync("data/materias.xml", "utf-8");
    const parser = new XMLParser();
    const parsed = parser.parse(xml);

    const materias = parsed.VFPData?._expxml;
    
    expect(Array.isArray(materias)).toBe(true);
    expect(materias.length).toBeGreaterThan(0);
    expect(materias[0]).toHaveProperty("especialidad");
    expect(materias[0]).toHaveProperty("plan");
    expect(materias[0]).toHaveProperty("materia");
    expect(materias[0]).toHaveProperty("nombre");
    expect(materias[0]).toHaveProperty("ano");
})
