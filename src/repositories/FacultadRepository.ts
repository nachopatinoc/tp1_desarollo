import { PrismaClient } from "@prisma/client";
import { FacultadAtributos } from "../types";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();

export class FacultadRepository extends BaseRepository<FacultadAtributos> {
    protected readonly model = prisma.facultades;
}
