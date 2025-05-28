import { leerXML } from "./leerXML";
import path from 'path';
import { Orientacion } from "../models/Orientacion";
import { OrientacionService } from "../services/OrientacionService";

export async function cargarOrientaciones() {
    const datos = await leerXML(path.join(__dirname, '..', '..', 'data', 'orientaciones.xml'));
    const orientaciones = Array.isArray(datos) ? datos : [datos];

    for (const dato of orientaciones) {
        const orientacion = new Orientacion(
            parseInt(dato.orientacion),
            String(dato.nombre),
            parseInt(dato.especialidad),
            parseInt(dato.plan)
        );
        await OrientacionService.crearOrientacion(orientacion);
    }
    console.log('Orientaciones cargadas exitosamente');
}
