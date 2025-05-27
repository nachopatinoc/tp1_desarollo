import { FacultadRepository } from "../repositories/FacultadRepository";
import { type FacultadAtributos } from "../types";

export class FacultadService {
    private static readonly facultadRepository = new FacultadRepository();

    static crearFacultad(facultad: FacultadAtributos): Promise<FacultadAtributos> {
        return this.facultadRepository.crear(facultad);
    }

}
