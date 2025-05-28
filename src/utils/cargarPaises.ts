import { PaisService } from "../services/PaisService";
import { leerXML } from "./leerXML";
import path from 'path';
import { Pais } from "../models/Pais";


export async function cargarPaises() {
    const datos = await leerXML(path.join(__dirname, '..', '..', 'data', 'paises.xml'));
    const paises = Array.isArray(datos) ? datos : [datos];

    for (const dato of paises) {
        const pais = new Pais(
            parseInt(dato.pais),
            String(dato.nombre)
        );
        await PaisService.crearPais(pais);
    }
    console.log('Países cargados exitosamente');
}

