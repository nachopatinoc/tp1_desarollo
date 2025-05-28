import { leerXML } from "./leerXML";
import path from 'path';
import { Especialidad } from "../models/Especialidad";
import { EspecialidadService } from "../services/EspecialidadService";

export async function cargarEspecialidades() {
    const datos = await leerXML(path.join(__dirname, '..', '..', 'data', 'especialidades.xml'));
    const especialidades = Array.isArray(datos) ? datos : [datos];

    for (const dato of especialidades) {
        const especialidad = new Especialidad(
            parseInt(dato.especialidad),
            String(dato.nombre)
        );
        await EspecialidadService.crearEspecialidad(especialidad);
    }
    console.log('Especialidades cargadas exitosamente');
}
