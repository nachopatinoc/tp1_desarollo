import { type FacultadAtributos } from "../types";
import { FacultadValidator } from "../validators/FacultadValidator";

export class Facultad implements FacultadAtributos {
    constructor(
        private readonly _id: number,
        private readonly _nombre: string,
    ) {
        FacultadValidator.validate(_id, _nombre)
    }

    get id(): number { return this._id }
    get nombre(): string { return this._nombre; }
}
