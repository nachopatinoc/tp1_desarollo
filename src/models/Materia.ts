import { type MateriaAtributos } from "../types";
import { MateriaValidator } from "../validators/MateriaValidator";

export class Materia implements MateriaAtributos {
    constructor(
        private readonly _id: number,
        private readonly _especialidadId: number,
        private readonly _planId: number,
        private readonly _nombre: string,
        private readonly _ano: number | null = null,
    ) {
        MateriaValidator.validate(_id, _especialidadId, _planId, _nombre, _ano);
    }

    get id(): number { return this._id }
    get especialidadId(): number { return this._especialidadId }
    get planId(): number { return this._planId }
    get nombre(): string { return this._nombre }
    get ano(): number | null { return this._ano }

    toPlainObject(): MateriaAtributos {
        return {
            id: this._id,
            nombre: this._nombre,
            ano: this._ano,
            planId: this._planId,
            especialidadId: this._especialidadId
        };
    }
}
