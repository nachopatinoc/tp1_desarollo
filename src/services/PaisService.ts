import { PaisRepository } from "../repositories/PaisRepository";
import { PaisAtributos } from "../types";

export class PaisService {
    private static readonly paisRepository = new PaisRepository();

    static crearPais(pais: PaisAtributos): Promise<PaisAtributos> {
        return this.paisRepository.crear(pais);
    }

}
