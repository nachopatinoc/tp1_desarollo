import { MateriaRepository } from "../repositories/MateriaRepository";
import { MateriaAtributos } from "../types";

export class MateriaService {
    private static readonly materiaRepository = new MateriaRepository();

    static crearMateria(materia: MateriaAtributos): Promise<MateriaAtributos> {
        return this.materiaRepository.crear(materia);
    }

}
