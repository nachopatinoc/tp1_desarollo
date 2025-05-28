import { FacultadService } from "../src/services/FacultadService";
import { instanciaFacultad as nuevaFacultad } from "./utils";

test('deberia crear y gurdar una facultad en la base de datos', async () => {
    const facultadCreada = await FacultadService.crearFacultad(nuevaFacultad);

    const facultadBD = await globalThis.prisma.facultades.findUnique({
        where: { id: facultadCreada.id },
    })

    expect(facultadBD).toBeTruthy()
    expect(facultadBD?.id).toBe(nuevaFacultad.id)
    expect(facultadBD?.nombre).toBe(nuevaFacultad.nombre)
})

