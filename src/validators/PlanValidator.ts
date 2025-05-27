import { BaseValidator } from "./BaseValidator";

export class PlanValidator extends BaseValidator {
    static validate(
        id: number,
        nombre: string,
        especialidadId: number
    ): void {
        this.validateRequired(id, "id")
        this.validateRequired(nombre, "nombre")
        this.validateRequired(especialidadId, "especialidadId")

        this.validateNumber(id, "id")
        this.validateString(nombre, "nombre")
        this.validateNumber(especialidadId, "especialidadId")
    }
}