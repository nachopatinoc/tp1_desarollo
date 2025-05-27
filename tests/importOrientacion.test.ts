import fs from "fs";
import { XMLParser } from "fast-xml-parser";

test("debería importar de orientaciones.xml y parsea los datos a un objeto JS", async () => {

    const xml = fs.readFileSync("data/orientaciones.xml", "utf-8");
    const parser = new XMLParser();
    const parsed = parser.parse(xml);

    const orientaciones = parsed.VFPData?._expxml;


    expect(Array.isArray(orientaciones)).toBe(true);
    expect(orientaciones.length).toBeGreaterThan(0);
    expect(orientaciones[0]).toHaveProperty("especialidad");
    expect(orientaciones[0]).toHaveProperty("plan");
    expect(orientaciones[0]).toHaveProperty("orientacion");
    expect(orientaciones[0]).toHaveProperty("nombre");
})
