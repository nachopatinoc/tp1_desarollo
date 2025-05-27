import { BaseValidator } from './BaseValidator';

export class MateriaValidator extends BaseValidator {
    static validate(id: number, especialidadId: number, planId: number, nombre: string,  ano: number | null): void {
        this.validateRequired(id, 'id');
        this.validateRequired(especialidadId, 'especialidadId');
        this.validateRequired(planId, 'planId');
        this.validateRequired(nombre, 'nombre');
        this.validateRequired(ano, 'año');

        this.validateNumber(id, 'id');
        this.validateNumber(especialidadId, 'especialidadId');
        this.validateNumber(planId, 'planId');
        this.validateString(nombre, 'nombre');
        this.validateNumber(ano, 'año');
    }
}
