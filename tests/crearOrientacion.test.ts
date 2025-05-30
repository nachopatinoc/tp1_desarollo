import { OrientacionService } from "../src/services/OrientacionService";
import { instanciaOrientacion as nuevaOrientacion } from "./utils";

test('Deberia crear y gurdar una orientacion en la base de datos', async () => {
    const orientacionCreada = await OrientacionService.crearOrientacion(nuevaOrientacion);

    const orientacionDB = await globalThis.prisma.orientaciones.findFirst({
        where: { orientacion: orientacionCreada.orientacion },
    })

    expect(orientacionDB).toBeTruthy()
    expect(orientacionDB?.orientacion).toBe(nuevaOrientacion.orientacion)
    expect(orientacionDB?.nombre).toBe(nuevaOrientacion.nombre)
})

