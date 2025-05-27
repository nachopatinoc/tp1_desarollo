import { BaseValidator } from "./BaseValidator";

export class PaisValidator extends BaseValidator {
    static validate(
        id: number,
        nombre: string
    ) {
        this.validateRequired(id, "id")
        this.validateRequired(nombre, "nombre")

        this.validateNumber(id, "id")
        this.validatePositive(id, "id")
        this.validateString(nombre, "nombre")
    }
}