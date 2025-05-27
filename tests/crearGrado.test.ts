import { Grado } from "../src/models/Grado";
import { GradoService } from "../src/services/GradoService";

test('deberia crear y gurdar un grado en la base de datos', async () => {
    const nuevoGrado = new Grado(
        1,
        "Adjunto"
    );
    const gradoCreado = await GradoService.crearGrado(nuevoGrado);

    const gradoDB = await globalThis.prisma.grados.findUnique({
        where: { id: gradoCreado.id },
    })

    expect(gradoDB).toBeTruthy()
    expect(gradoDB?.id).toBe(nuevoGrado.id)
    expect(gradoDB?.nombre).toBe(nuevoGrado.nombre)
})

