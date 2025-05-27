import { BaseValidator } from "./BaseValidator";

export class EspecialidadValidator extends BaseValidator {
    static validate(
        id: number,
        nombre: string,

    ): void {
        this.validateRequired(id, "id")
        this.validateRequired(nombre, "nombre")

        this.validateString(nombre, "nombre")
        this.validateNumber(id, "id")

    }
}
