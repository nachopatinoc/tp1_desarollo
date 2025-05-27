import { type PaisAtributos } from "../types";
import { PaisValidator } from "../validators/PaisValidator"

export class Pais implements PaisAtributos {
    constructor(
        private readonly _id: number,
        private readonly _nombre: string
    ) {
        PaisValidator.validate(_id, _nombre)
    }

    get id(): number { return this._id }
    get nombre(): string { return this._nombre }
}