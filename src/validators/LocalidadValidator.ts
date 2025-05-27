import { BaseValidator } from "./BaseValidator";

export class LocalidadValidator extends BaseValidator {
    static validate(id:number,ciudad: string, provincia: string, paisDelC: string): void {
        this.validateRequired(id, 'id');
        this.validateRequired(ciudad, 'ciudad');
        this.validateRequired(provincia, 'provincia');
        this.validateRequired(paisDelC, 'pais del centro');

        this.validateNumber(id, 'id');
        this.validateString(ciudad, 'ciudad');
        this.validateString(provincia, 'provincia');
        this.validateString(paisDelC, 'pais del centro');

    }
}
