export interface UniversidadAtributos {
    id: number;         // ID viene como <universida> en XML
    nombre: string;     // Campo obligatorio
}

export interface GradoAtributos {
    id: number;       // <grado> en XML
    nombre: string;
}

export interface EspecialidadAtributos {
    id: number;         // <especialidad>
    nombre: string;
}

export interface OrientacionAtributos {
    id: number;             // <orientacion>
    nombre: string;
    especialidadId: number; // relación por ID
    planId: number;
}

export interface PlanAtributos {
    id: number;       // <plan>
    nombre: string;   // puede estar vacío
    especialidadId: number;
}

export interface MateriaAtributos {
    id: number;               // <materia>
    nombre: string;
    ano?: number | null;      // opcional
    planId: number;
    especialidadId: number;
}

export interface LocalidadAtributos {
    id: number;            // <codigo>
    ciudad: string;
    provincia: string;
    paisDelC: string;      // <pais_del_c>
}
