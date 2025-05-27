import { UniversidadRepository } from "../repositories/UniversidadRepository";
import { UniversidadAtributos } from "../types";

export class UniversidadService {
    private static readonly universidadRepository = new UniversidadRepository();

    static crearUniversidad(universidad: UniversidadAtributos): Promise<UniversidadAtributos> {
        return this.universidadRepository.crear(universidad);
    }

}
