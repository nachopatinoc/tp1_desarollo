import { PrismaClient } from "@prisma/client";
import { PaisAtributos } from "../types";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();

export class PaisRepository extends BaseRepository<PaisAtributos> {
    protected readonly model = prisma.universidades;
}
