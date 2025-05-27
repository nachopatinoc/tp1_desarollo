/*
  Warnings:

  - The primary key for the `Especialidad` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Especialidad` table. All the data in the column will be lost.
  - The primary key for the `Facultad` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Facultad` table. All the data in the column will be lost.
  - The primary key for the `Grado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Grado` table. All the data in the column will be lost.
  - Added the required column `especialidad` to the `Especialidad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `facultad` to the `Facultad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grado` to the `Grado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Especialidad" DROP CONSTRAINT "Especialidad_pkey",
DROP COLUMN "id",
ADD COLUMN     "especialidad" INTEGER NOT NULL,
ADD CONSTRAINT "Especialidad_pkey" PRIMARY KEY ("especialidad");

-- AlterTable
ALTER TABLE "Facultad" DROP CONSTRAINT "Facultad_pkey",
DROP COLUMN "id",
ADD COLUMN     "facultad" INTEGER NOT NULL,
ADD CONSTRAINT "Facultad_pkey" PRIMARY KEY ("facultad");

-- AlterTable
ALTER TABLE "Grado" DROP CONSTRAINT "Grado_pkey",
DROP COLUMN "id",
ADD COLUMN     "grado" INTEGER NOT NULL,
ADD CONSTRAINT "Grado_pkey" PRIMARY KEY ("grado");
