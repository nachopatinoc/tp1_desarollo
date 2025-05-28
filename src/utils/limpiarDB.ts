import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function limpiarBaseDeDatos() {
    try {
        console.log('Iniciando limpieza de la base de datos...');

        await prisma.materias.deleteMany({});
        console.log('Tabla Materias limpiada');

        await prisma.orientaciones.deleteMany({});
        console.log('Tabla Orientaciones limpiada');

        await prisma.planes.deleteMany({});
        console.log('Tabla Planes limpiada');

        await prisma.especialidades.deleteMany({});
        console.log('Tabla Especialidades limpiada');

        await prisma.localidades.deleteMany({});
        console.log('Tabla Localidades limpiada');

        await prisma.universidades.deleteMany({});
        console.log('Tabla Universidades limpiada');

        await prisma.facultades.deleteMany({});
        console.log('Tabla Facultades limpiada');

        await prisma.grados.deleteMany({});
        console.log('Tabla Grados limpiada');

        await prisma.paises.deleteMany({});
        console.log('Tabla Paises limpiada');

        console.log('Limpieza de la base de datos completada exitosamente');
    } catch (error) {
        console.error('Error al limpiar la base de datos:', error);
        throw error;
    }
}

limpiarBaseDeDatos()
