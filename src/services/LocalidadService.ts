import { LocalidadRepository } from "../repositories/LocalidadRepository";
import { LocalidadAtributos } from "../types";

export class LocalidadService {
    private static readonly localidadRepository = new LocalidadRepository();
    static crearLocalidad(localidad: LocalidadAtributos): Promise<LocalidadAtributos> {
        return this.localidadRepository.crear(localidad);
    }
}
