import { Especialidad } from "../src/models/Especialidad";
import { Facultad } from "../src/models/Facultad";
import { Grado } from "../src/models/Grado";
import { Localidad } from "../src/models/Localidad";
import { Materia } from "../src/models/Materia";
import { Orientacion } from "../src/models/Orientacion";
import { Pais } from "../src/models/Pais";
import { Plan } from "../src/models/Plan";
import { Universidad } from "../src/models/Universidad";

export const instanciaEspecialidad = new Especialidad(1, "cardiologia")
export const instanciaFacultad = new Facultad(1, 'Facultad Regional de San Rafael')
export const instanciaGrado = new Grado(1, "Asociado")
export const instanciaLocalidad = new Localidad(1, "Buenos Aires", "Buenos Aires", "Argentina")
export const instanciaMateria = new Materia(8, 65, 102, "Algebra y Geometría Analítica", 1)
export const instanciaOrientacion = new Orientacion(1, "Analista de Sistemas", 1, 1)
export const instanciaPais = new Pais(1, "Argentina")
export const instanicaPlan = new Plan(1, "Plan 2009", 1)
export const instanicaUniversidad = new Universidad(1, "Universidad Nacional de Buenos Aires")