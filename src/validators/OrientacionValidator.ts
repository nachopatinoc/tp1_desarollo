import { BaseValidator } from "./BaseValidator";

export class OrientacionValidator extends BaseValidator {
    static validate(
        id: number,
        nombre: string,
        planId: number,
        especialidadId: number,
    ): void {
        this.validateRequired(id, "id")
        this.validateRequired(nombre, "nombre")
        this.validateRequired(especialidadId, "especialidadId")
        this.validateRequired(planId, "planId")

        this.validateNumber(id, "id")
        this.validateString(nombre, "nombre")
        this.validateNumber(planId, "planId")
        this.validateNumber(especialidadId, "especialidadId")
    }
}