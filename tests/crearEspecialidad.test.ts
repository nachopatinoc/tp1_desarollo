import { Especialidad } from "../src/models/Especialidad";
import { EspecialidadService } from "../src/services/EspecialidadService";

test("deberia crear y guardar una especialidad en la base de datos", async () => {
    const nuevaEspecialidad = new Especialidad(
        1,
        "Ingenieria en Sistemas"
    );
    const especialidadCreada = await EspecialidadService.crearEspecialidad(nuevaEspecialidad);

    const especialidadBD = await globalThis.prisma.especialidades.findUnique({
        where: { id: especialidadCreada.id },
    });
    expect(especialidadBD).toBeTruthy();
    expect(especialidadBD?.id).toBe(nuevaEspecialidad.id);
    expect(especialidadBD?.nombre).toBe(nuevaEspecialidad.nombre);
});
