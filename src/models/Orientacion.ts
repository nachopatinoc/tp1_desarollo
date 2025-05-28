import { type OrientacionAtributos } from "../types";
import { OrientacionValidator } from "../validators/OrientacionValidator";

export class Orientacion implements OrientacionAtributos {
    constructor(
        private readonly _orientacion: number,
        private readonly _nombre: string,
        private readonly _especialidadId: number,
        private readonly _planId: number
    ) {
        OrientacionValidator.validate(_orientacion, _nombre, _especialidadId, _planId)
    }

    get orientacion(): number { return this._orientacion }
    get nombre(): string { return this._nombre }
    get especialidadId(): number { return this._especialidadId }
    get planId(): number { return this._planId }

    toPlainObject(): OrientacionAtributos {
        return {
            orientacion: this.orientacion,
            nombre: this.nombre,
            especialidadId: this.especialidadId,
            planId: this.planId
        };
    }
}
