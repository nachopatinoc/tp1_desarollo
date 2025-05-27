import { BaseValidator } from './BaseValidator';

export class MateriaValidator extends BaseValidator {
    static validate(id: number, nombre: string, ano: number | null, planId: number, especialidadId: number): void {
        this.validateRequired(id, 'id');
        this.validateRequired(nombre, 'nombre');
        this.validateRequired(ano, 'año');
        this.validateRequired(planId, 'planId');
        this.validateRequired(especialidadId, 'especialidadId');

        this.validateNumber(id, 'id');
        this.validateString(nombre, 'nombre');
        this.validateNumber(ano, 'año');
        this.validateNumber(planId, 'planId');
        this.validateNumber(especialidadId, 'especialidadId');
    }
}
