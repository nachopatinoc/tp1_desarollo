import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient;
}

const prisma = new PrismaClient()

globalThis.prisma = prisma

beforeEach(async () => {
    await prisma.universidades.deleteMany();
    await prisma.facultades.deleteMany()
    await prisma.grados.deleteMany()
    await prisma.especialidades.deleteMany()
    await prisma.localidades.deleteMany()
    await prisma.materias.deleteMany()
    await prisma.orientaciones.deleteMany()
    await prisma.paises.deleteMany()
    await prisma.planes.deleteMany()
})

afterAll(async () => {
    await prisma.$disconnect();
});