import { PrismaClient } from "@prisma/client";
import { GradoAtributos } from "../types";
import { BaseRepository } from "./BaseRepository";

const prisma = new PrismaClient();

export class GradoRepository extends BaseRepository<GradoAtributos> {
    protected readonly model = prisma.grados;
}
