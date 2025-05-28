import { leerXML } from "./leerXML";
import path from 'path';
import { Plan } from "../models/Plan";
import { PlanService } from "../services/PlanService";

export async function cargarPlanes() {
    const datos = await leerXML(path.join(__dirname, '..', '..', 'data', 'planes.xml'));
    const planes = Array.isArray(datos) ? datos : [datos];

    for (const dato of planes) {
        const plan = new Plan(
            parseInt(dato.plan),
            String(dato.nombre),
            parseInt(dato.especialidad)
        );
        await PlanService.crearPlan(plan);
    }
    console.log('Planes cargados exitosamente');
}
