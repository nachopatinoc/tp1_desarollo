import { type GradoAtributos } from "../types";
import { GradoValidator } from "../validators/GradoValidator";

export class Grado implements GradoAtributos {
    constructor(
        private readonly _id: number,
        private readonly _nombre: string,
    ) {
        GradoValidator.validate(_id, _nombre)
    }

    get id(): number { return this._id }
    get nombre(): string { return this._nombre }
}

