import { Orientacion } from "../src/models/Orientacion";
import { OrientacionService } from "../src/services/OrientacionService";

test('deberia crear y gurdar una orientacion en la base de datos', async () => {
    const nuevaOrientacion = new Orientacion(
        1,
        "Analista de Sistemas",
        1,
        1
    );
    const orientacionCreada = await OrientacionService.crearOrientacion(nuevaOrientacion);

    const orientacionDB = await globalThis.prisma.orientaciones.findUnique({
        where: { id: orientacionCreada.id },
    })

    expect(orientacionDB).toBeTruthy()
    expect(orientacionDB?.id).toBe(nuevaOrientacion.id)
    expect(orientacionDB?.nombre).toBe(nuevaOrientacion.nombre)
})

