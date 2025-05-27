import { EspecialidadRepository } from "../repositories/EspecialidadRepository";
import { EspecialidadAtributos } from "../types";

export class EspecialidadService {
    private static readonly especialidadRepository = new EspecialidadRepository();
    static crearEspecialidad(especialidad: EspecialidadAtributos): Promise<EspecialidadAtributos> {
        return this.especialidadRepository.crear(especialidad);
    }
}
