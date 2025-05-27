import { type PlanAtributos } from "../types";
import { PlanValidator } from "../validators/PlanValidator";

export class Plan implements PlanAtributos {
    constructor(
        private readonly _id: number,
        private readonly _nombre: string,
        private readonly _especialidadId: number,
    ) {
        PlanValidator.validate(_id, _nombre, _especialidadId)
    }

    get id(): number { return this._id }
    get nombre(): string { return this._nombre }
    get especialidadId(): number { return this._especialidadId }
}
