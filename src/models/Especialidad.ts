import { type EspecialidadAtributos } from "../types";
import { EspecialidadValidator } from "../validators/EspecialidadValidator";

export class Especialidad implements EspecialidadAtributos {
    constructor(
        private readonly _id: number,
        private readonly _nombre: string,

    ) {
        EspecialidadValidator.validate(_id,_nombre);
    }
    get id(): number { return this._id }
    get nombre(): string { return this._nombre }

    toPlainObject() {
        return {
            id: this.id,
            nombre: this.nombre
        };
    }
}
