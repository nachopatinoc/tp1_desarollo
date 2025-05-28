import { PaisService } from "../src/services/PaisService";
import { instanciaPais as nuevoPais } from "./utils";

test('deberia crear y gurdar una país en la base de datos', async () => {
    const paisCreado = await PaisService.crearPais(nuevoPais);

    const paisDB = await globalThis.prisma.paises.findUnique({
        where: { id: paisCreado.id },
    })

    expect(paisDB).toBeTruthy()
    expect(paisDB?.id).toBe(nuevoPais.id)
    expect(paisDB?.nombre).toBe(nuevoPais.nombre)
})

