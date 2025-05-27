import { GradoRepository } from "../repositories/GradoRepository";
import { type GradoAtributos } from "../types";

export class GradoService {
    private static readonly gradoRepository = new GradoRepository();

    static crearGrado(grado: GradoAtributos): Promise<GradoAtributos> {
        return this.gradoRepository.crear(grado);
    }

}
