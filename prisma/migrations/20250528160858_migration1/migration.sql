/*
  Warnings:

  - The primary key for the `Materias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Orientaciones` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Materias" DROP CONSTRAINT "Materias_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Materias_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Orientaciones" DROP CONSTRAINT "Orientaciones_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Orientaciones_pkey" PRIMARY KEY ("id");
