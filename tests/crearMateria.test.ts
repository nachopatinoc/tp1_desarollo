import { Materia } from "../src/models/Materia";
import { MateriaService } from "../src/services/MateriasService";

test('deberia crear y gurdar una universidad en la base de datos', async () => {
    const nuevaMateria = new Materia(
        8,
        65,
        102,
        "Programación de Aplicaciones Web",
        1
    );

    const materiaCreada = await MateriaService.crearMateria(nuevaMateria);

    const materiasDB = await globalThis.prisma.materias.findUnique({
        where: { id: materiaCreada.id },
    })

    expect(materiasDB).toBeTruthy()
    expect(materiasDB?.id).toBe(nuevaMateria.id)
    expect(materiasDB?.especialidadId).toBe(nuevaMateria.especialidadId)
    expect(materiasDB?.planId).toBe(nuevaMateria.planId)
    expect(materiasDB?.nombre).toBe(nuevaMateria.nombre)
    expect(materiasDB?.ano).toBe(nuevaMateria.ano)
})

