import { EspecialidadService } from "../src/services/EspecialidadService";
import { instanciaEspecialidad as nuevaEspecialidad } from "./utils";

test("Deberia crear y guardar una especialidad en la base de datos", async () => {

    const especialidadCreada = await EspecialidadService.crearEspecialidad(nuevaEspecialidad);

    const especialidadBD = await globalThis.prisma.especialidades.findUnique({
        where: { id: especialidadCreada.id },
    });
    expect(especialidadBD).toBeTruthy();
    expect(especialidadBD?.id).toBe(nuevaEspecialidad.id);
    expect(especialidadBD?.nombre).toBe(nuevaEspecialidad.nombre);
});
