import { type MateriaAtributos } from "../types";
import { MateriaValidator } from "../validators/MateriaValidator";

export class Materia implements MateriaAtributos {
    constructor(
        private readonly _id: number,
        private readonly _nombre: string,
        private readonly _ano: number | null = null,
        private readonly _planId: number,
        private readonly _especialidadId: number,
    ) {
        MateriaValidator.validate(_id, _nombre, _ano, _planId, _especialidadId);
    }

    get id(): number { return this._id }
    get nombre(): string { return this._nombre }
    get ano(): number | null { return this._ano }
    get planId(): number { return this._planId }
    get especialidadId(): number { return this._especialidadId }
}
