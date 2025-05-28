import { BaseValidator } from "./BaseValidator";

export class PlanValidator extends BaseValidator {
    static validate(
        plan: number,
        nombre: string,
        especialidadId: number
    ): void {
        this.validateRequired(plan, "plan")
        this.validateRequired(nombre, "nombre")
        this.validateRequired(especialidadId, "especialidadId")

        this.validateNumber(plan, "plan")
        this.validateString(nombre, "nombre")
        this.validateNumber(especialidadId, "especialidadId")
    }
}