import { type OrientacionAtributos } from "../types";
import { OrientacionValidator } from "../validators/OrientacionValidator";

export class Orientacion implements OrientacionAtributos {
    constructor(
        private readonly _id: number,
        private readonly _nombre: string,
        private readonly _especialidadId: number,
        private readonly _planId: number
    ) {
        OrientacionValidator.validate(_id, _nombre, _especialidadId, _planId)
    }

    get id(): number { return this._id }
    get nombre(): string { return this._nombre }
    get especialidadId(): number { return this._especialidadId }
    get planId(): number { return this._planId }

    toPlainObject(): OrientacionAtributos {
        return {
            id: this.id,
            nombre: this.nombre,
            especialidadId: this.especialidadId,
            planId: this.planId
        };
    }
}
