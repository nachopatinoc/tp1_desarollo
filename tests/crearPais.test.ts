import { Pais } from "../src/models/Pais";
import { PaisService } from "../src/services/PaisService";

test('deberia crear y gurdar una universidad en la abse de datos', async () => {
    const nuevoPais = new Pais(
        1,
        "AFGANISTAN"
    );
    const paisCreado = await PaisService.crearPais(nuevoPais);

    const paisDB = await globalThis.prisma.universidades.findUnique({
        where: { id: paisCreado.id },
    })

    expect(paisDB).toBeTruthy()
    expect(paisDB?.id).toBe(nuevoPais.id)
    expect(paisDB?.nombre).toBe(nuevoPais.nombre)
})

