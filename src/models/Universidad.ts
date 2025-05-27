import { type UniversidadAtributos } from "../types";
import { UniversidadValidator } from "../validators/UniversidadValidator";

export class Universidad implements UniversidadAtributos {
    constructor(
        private readonly _id: number,
        private readonly _nombre: string,
    ) {
        UniversidadValidator.validate(_id, _nombre)
    }

    get id(): number { return this._id }
    get nombre(): string { return this._nombre }

    toPlainObject(): UniversidadAtributos {
        return {
            id: this.id,
            nombre: this.nombre,
        };
    }
}
