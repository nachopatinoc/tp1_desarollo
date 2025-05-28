import { type PlanAtributos } from "../types";
import { PlanValidator } from "../validators/PlanValidator";

export class Plan implements PlanAtributos {
    constructor(
        private readonly _plan: number,
        private readonly _nombre: string,
        private readonly _especialidadId: number,
    ) {
        PlanValidator.validate(_plan, _nombre, _especialidadId)
    }

    get plan(): number { return this._plan }
    get nombre(): string { return this._nombre }
    get especialidadId(): number { return this._especialidadId }

    toPlainObject(): PlanAtributos {
        return {
            plan: this.plan,
            nombre: this.nombre,
            especialidadId: this.especialidadId,
        };
    }
}
