import { BaseValidator } from "./BaseValidator";

export class OrientacionValidator extends BaseValidator {
    static validate(
        orientacion: number,
        nombre: string,
        planId: number,
        especialidadId: number,
    ): void {
        this.validateRequired(orientacion, "orientacion")
        this.validateRequired(nombre, "nombre")
        this.validateRequired(especialidadId, "especialidadId")
        this.validateRequired(planId, "planId")

        this.validateNumber(orientacion, "orientacion")
        this.validateString(nombre, "nombre")
        this.validateNumber(planId, "planId")
        this.validateNumber(especialidadId, "especialidadId")
    }
}