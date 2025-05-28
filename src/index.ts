import { XMLParser } from 'fast-xml-parser';
import * as fs from 'fs/promises';
import * as path from 'path';
import { PaisService } from './services/PaisService';
import { UniversidadService } from './services/UniversidadService';
import { FacultadService } from './services/FacultadService';
import { GradoService } from './services/GradoService';
import { EspecialidadService } from './services/EspecialidadService';
import { PlanService } from './services/PlanService';
import { OrientacionService } from './services/OrientacionService';
import { MateriaService } from './services/MateriasService';
import { LocalidadService } from './services/LocalidadService';
import { Pais } from './models/Pais';
import { Universidad } from './models/Universidad';
import { Facultad } from './models/Facultad';
import { Grado } from './models/Grado';
import { Especialidad } from './models/Especialidad';
import { Plan } from './models/Plan';
import { Orientacion } from './models/Orientacion';
import { Materia } from './models/Materia';
import { Localidad } from './models/Localidad';

async function leerXML(rutaArchivo: string): Promise<any> {
    const contenido = await fs.readFile(rutaArchivo, 'utf-8');
    const parser = new XMLParser();
    const resultado = parser.parse(contenido);
    return resultado.VFPData._expxml ? resultado.VFPData._expxml : resultado.VFPData._exportar;
}

async function cargarPaises() {
    const datos = await leerXML(path.join(__dirname, '..', 'data', 'paises.xml'));
    const paises = Array.isArray(datos) ? datos : [datos];

    for (const dato of paises) {
        const pais = new Pais(
            parseInt(dato.pais),
            String(dato.nombre)
        );
        await PaisService.crearPais(pais);
    }
    console.log('Países cargados exitosamente');
}

async function cargarUniversidades() {
    const datos = await leerXML(path.join(__dirname, '..', 'data', 'universidad.xml'));
    const universidades = Array.isArray(datos) ? datos : [datos];

    for (const dato of universidades) {
        const universidad = new Universidad(
            parseInt(dato.universida),
            String(dato.nombre)
        );
        await UniversidadService.crearUniversidad(universidad);
    }
    console.log('Universidades cargadas exitosamente');
}

async function cargarFacultades() {
    const datos = await leerXML(path.join(__dirname, '..', 'data', 'facultades.xml'));
    const facultades = Array.isArray(datos) ? datos : [datos];

    for (const dato of facultades) {
        const facultad = new Facultad(
            parseInt(dato.facultad),
            String(dato.nombre)
        );
        await FacultadService.crearFacultad(facultad);
    }
    console.log('Facultades cargadas exitosamente');
}

async function cargarGrados() {
    const datos = await leerXML(path.join(__dirname, '..', 'data', 'grados.xml'));
    const grados = Array.isArray(datos) ? datos : [datos];

    for (const dato of grados) {
        const grado = new Grado(
            parseInt(dato.grado),
            String(dato.nombre)
        );
        await GradoService.crearGrado(grado);
    }
    console.log('Grados cargados exitosamente');
}

async function cargarEspecialidades() {
    const datos = await leerXML(path.join(__dirname, '..', 'data', 'especialidades.xml'));
    const especialidades = Array.isArray(datos) ? datos : [datos];

    for (const dato of especialidades) {
        const especialidad = new Especialidad(
            parseInt(dato.especialidad),
            String(dato.nombre)
        );
        await EspecialidadService.crearEspecialidad(especialidad);
    }
    console.log('Especialidades cargadas exitosamente');
}

async function cargarPlanes() {
    const datos = await leerXML(path.join(__dirname, '..', 'data', 'planes.xml'));
    const planes = Array.isArray(datos) ? datos : [datos];

    for (const dato of planes) {
        const plan = new Plan(
            parseInt(dato.plan),
            String(dato.nombre),
            parseInt(dato.especialidad)
        );
        await PlanService.crearPlan(plan);
    }
    console.log('Planes cargados exitosamente');
}

async function cargarOrientaciones() {
    const datos = await leerXML(path.join(__dirname, '..', 'data', 'orientaciones.xml'));
    const orientaciones = Array.isArray(datos) ? datos : [datos];

    for (const dato of orientaciones) {
        const orientacion = new Orientacion(
            parseInt(dato.orientacion),
            String(dato.nombre),
            parseInt(dato.especialidad),
            parseInt(dato.plan)
        );
        await OrientacionService.crearOrientacion(orientacion);
    }
    console.log('Orientaciones cargadas exitosamente');
}

async function cargarMaterias() {
    const datos = await leerXML(path.join(__dirname, '..', 'data', 'materias.xml'));
    const materias = Array.isArray(datos) ? datos : [datos];

    for (const dato of materias) {
        const materia = new Materia(
            parseInt(dato.materia),
            parseInt(dato.especialidad),
            parseInt(dato.plan),
            String(dato.nombre),
            dato.ano ? parseInt(dato.ano) : null
        );
        await MateriaService.crearMateria(materia);
    }
    console.log('Materias cargadas exitosamente');
}

async function cargarLocalidades() {
    const datos = await leerXML(path.join(__dirname, '..', 'data', 'localidades.xml'));
    const localidades = Array.isArray(datos) ? datos : [datos];

    for (const dato of localidades) {
        const localidad = new Localidad(
            parseInt(dato.codigo),
            String(dato.nombre),
            String(dato.provincia),
            String(dato.pais)
        );
        await LocalidadService.crearLocalidad(localidad);
    }
    console.log('Localidades cargadas exitosamente');
}

async function cargarDatos() {
    try {
        await cargarPaises();
        await cargarUniversidades();
        await cargarFacultades();
        await cargarGrados();
        await cargarEspecialidades();
        await cargarPlanes();
        await cargarOrientaciones();
        await cargarMaterias();
        await cargarLocalidades();

        console.log('Todos los datos han sido cargados exitosamente');
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        throw error;
    }
}

cargarDatos().catch(console.error);
