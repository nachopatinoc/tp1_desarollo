import { leerXML } from "./leerXML";
import path from 'path';
import { Localidad } from "../models/Localidad";
import { LocalidadService } from "../services/LocalidadService";

export async function cargarLocalidades() {
    const datos = await leerXML(path.join(__dirname, '..', '..', 'data', 'localidades.xml'));
    const localidades = Array.isArray(datos) ? datos : [datos];

    for (const dato of localidades) {
        const localidad = new Localidad(
            parseInt(dato.codigo),
            String(dato.ciudad),
            String(dato.provincia),
            String(dato.pais_del_c)
        );
        await LocalidadService.crearLocalidad(localidad);
    }
    console.log('Localidades cargadas exitosamente');
}
