export interface UniversidadAtributos {
    id: number;
    nombre: string;
}

export interface GradoAtributos {
    id: number;
    nombre: string;
}

export interface EspecialidadAtributos {
    id: number;
    nombre: string;
}

export interface OrientacionAtributos {
    id: number;
    nombre: string;
    especialidadId: number;
    planId: number;
}

export interface PlanAtributos {
    id: number;
    nombre: string;
    especialidadId: number;
}

export interface MateriaAtributos {
    id: number;
    nombre: string;
    ano?: number | null;
    planId: number;
    especialidadId: number;
}

export interface LocalidadAtributos {
    id: number;
    ciudad: string;
    provincia: string;
    paisDelC: string;
}
