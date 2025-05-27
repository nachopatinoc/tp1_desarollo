;
import fs from "fs";
import { XMLParser } from "fast-xml-parser";

test("debería importar de planes.xml y parsea los datos a un objeto JS", async () => {
    
    const xml = fs.readFileSync("data/planes.xml", "utf-8");
    const parser = new XMLParser();
    const parsed = parser.parse(xml);

    const planes = parsed.VFPData?._expxml;

    expect(Array.isArray(planes)).toBe(true);
    expect(planes.length).toBeGreaterThan(0);
    expect(planes[0]).toHaveProperty("especialidad");
    expect(planes[0]).toHaveProperty("plan");
    expect(planes[0]).toHaveProperty("nombre");
})

