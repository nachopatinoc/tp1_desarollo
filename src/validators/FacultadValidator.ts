import { BaseValidator } from "./BaseValidator";

export class FacultadValidator extends BaseValidator {
    static validate(
        id: number,
        nombre: string
    ): void {
        this.validateRequired(id, "id")
        this.validateRequired(nombre, "nombre")

        this.validateNumber(id, "id")
        this.validateString(nombre, "nombre")
    }
}