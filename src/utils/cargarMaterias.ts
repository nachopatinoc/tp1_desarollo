import { leerXML } from "./leerXML";
import path from 'path';
import { Materia } from "../models/Materia";
import { MateriaService } from "../services/MateriasService"


export async function cargarMaterias() {
    const datos = await leerXML(path.join(__dirname, '..', '..', 'data', 'materias.xml'));
    const materias = Array.isArray(datos) ? datos : [datos];

    for (const dato of materias) {
        const materia = new Materia(
            parseInt(dato.materia),
            parseInt(dato.especialidad),
            parseInt(dato.plan),
            String(dato.nombre),
            dato.ano ? parseInt(dato.ano) : null
        );
        await MateriaService.crearMateria(materia);
    }
    console.log('Materias cargadas exitosamente');
}

