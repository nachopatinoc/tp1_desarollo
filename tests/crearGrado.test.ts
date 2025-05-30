import { GradoService } from "../src/services/GradoService";
import { instanciaGrado as nuevoGrado } from "./utils";

test('Deberia crear y gurdar un grado en la base de datos', async () => {
    const gradoCreado = await GradoService.crearGrado(nuevoGrado);

    const gradoDB = await globalThis.prisma.grados.findUnique({
        where: { id: gradoCreado.id },
    })

    expect(gradoDB).toBeTruthy()
    expect(gradoDB?.id).toBe(nuevoGrado.id)
    expect(gradoDB?.nombre).toBe(nuevoGrado.nombre)
})

