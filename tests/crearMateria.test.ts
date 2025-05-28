import { MateriaService } from "../src/services/MateriasService";
import { instanciaMateria as nuevaMateria } from "./utils";

test('deberia crear y gurdar una materia en la base de datos', async () => {
    const materiaCreada = await MateriaService.crearMateria(nuevaMateria);

    const materiasDB = await globalThis.prisma.materias.findFirst({
        where: { materia: materiaCreada.materia },
    })

    expect(materiasDB).toBeTruthy()
    expect(materiasDB?.materia).toBe(nuevaMateria.materia)
    expect(materiasDB?.especialidadId).toBe(nuevaMateria.especialidadId)
    expect(materiasDB?.planId).toBe(nuevaMateria.planId)
    expect(materiasDB?.nombre).toBe(nuevaMateria.nombre)
    expect(materiasDB?.ano).toBe(nuevaMateria.ano)
})

