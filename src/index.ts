import { cargarEspecialidades } from "./utils/cargarEspecialidades";
import { cargarFacultades } from "./utils/cargarFacultades";
import { cargarGrados } from "./utils/cargarGrados";
import { cargarLocalidades } from "./utils/cargarLocalidades";
import { cargarMaterias } from "./utils/cargarMaterias";
import { cargarOrientaciones } from "./utils/cargarOrientaciones";
import { cargarPlanes } from "./utils/cargarPlanes";
import { cargarPaises } from "./utils/cargarPaises";
import { cargarUniversidades } from "./utils/cargarUniversidades";

async function cargarDatos() {
    try {
        await cargarPaises();
        await cargarUniversidades();
        await cargarFacultades();
        await cargarGrados();
        await cargarEspecialidades();
        await cargarPlanes();
        await cargarOrientaciones();
        await cargarMaterias();
        await cargarLocalidades();

        console.log('Todos los datos han sido cargados exitosamente');
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        throw error;
    }
}

cargarDatos().catch(console.error);
