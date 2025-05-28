import { leerXML } from "./leerXML";
import path from 'path';
import { Grado } from "../models/Grado";
import { GradoService } from "../services/GradoService";

export async function cargarGrados() {
    const datos = await leerXML(path.join(__dirname, '..', '..', 'data', 'grados.xml'));
    const grados = Array.isArray(datos) ? datos : [datos];

    for (const dato of grados) {
        const grado = new Grado(
            parseInt(dato.grado),
            String(dato.nombre)
        );
        await GradoService.crearGrado(grado);
    }
    console.log('Grados cargados exitosamente');
}
