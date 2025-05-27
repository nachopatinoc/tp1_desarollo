import { OrientacionRepository } from "../repositories/OrientacionRepository";
import { OrientacionAtributos } from "../types";

export class OrientacionService {
    private static readonly orientacionRepository = new OrientacionRepository();

    static crearOrientacion(orientacion: OrientacionAtributos): Promise<OrientacionAtributos> {
        return this.orientacionRepository.crear(orientacion);
    }

}
