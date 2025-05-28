import { XMLParser } from 'fast-xml-parser';
import * as fs from 'fs/promises';

export async function leerXML(rutaArchivo: string): Promise<any> {
    const contenido = await fs.readFile(rutaArchivo, 'utf-8');
    const parser = new XMLParser();
    const resultado = parser.parse(contenido);
    return resultado.VFPData._expxml ? resultado.VFPData._expxml : resultado.VFPData._exportar;
}