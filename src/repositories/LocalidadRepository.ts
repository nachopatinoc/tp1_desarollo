import { PrismaClient } from "@prisma/client";
import { LocalidadAtributos } from "../types";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();
export class LocalidadRepository extends BaseRepository<LocalidadAtributos> {
    protected readonly model = prisma.localidades;
}
