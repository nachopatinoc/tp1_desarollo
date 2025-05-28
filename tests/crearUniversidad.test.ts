import { UniversidadService } from "../src/services/UniversidadService";
import { instanicaUniversidad as nuevaUniversidad } from "./utils";

test('deberia crear y gurdar una universidad en la abse de datos', async () => {
    const universidadCreada = await UniversidadService.crearUniversidad(nuevaUniversidad);

    const universidadBD = await globalThis.prisma.universidades.findUnique({
        where: { id: universidadCreada.id },
    })

    expect(universidadBD).toBeTruthy()
    expect(universidadBD?.id).toBe(nuevaUniversidad.id)
    expect(universidadBD?.nombre).toBe(nuevaUniversidad.nombre)
})

