import { FacultadService } from "../services/FacultadService";
import { Facultad } from "../models/Facultad";
import path from "path";
import { leerXML } from "./leerXML";

export async function cargarFacultades() {
    const datos = await leerXML(path.join(__dirname, '..', '..', 'data', 'facultades.xml'));
    const facultades = Array.isArray(datos) ? datos : [datos];

    for (const dato of facultades) {
        const facultad = new Facultad(
            parseInt(dato.facultad),
            String(dato.nombre)
        );
        await FacultadService.crearFacultad(facultad);
    }
    console.log('Facultades cargadas exitosamente');
}
