import { UniversidadService } from "../services/UniversidadService";
import { leerXML } from "./leerXML";
import path from 'path';
import { Universidad } from "../models/Universidad";

export async function cargarUniversidades() {
    const datos = await leerXML(path.join(__dirname, '..', '..', 'data', 'universidad.xml'));
    const universidades = Array.isArray(datos) ? datos : [datos];

    for (const dato of universidades) {
        const universidad = new Universidad(
            parseInt(dato.universida),
            String(dato.nombre)
        );
        await UniversidadService.crearUniversidad(universidad);
    }
    console.log('Universidades cargadas exitosamente');
}
