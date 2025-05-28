-- CreateTable
CREATE TABLE "Universidades" (
    "universida" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Universidades_pkey" PRIMARY KEY ("universida")
);

-- CreateTable
CREATE TABLE "Grados" (
    "grado" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Grados_pkey" PRIMARY KEY ("grado")
);

-- CreateTable
CREATE TABLE "Facultades" (
    "facultad" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Facultades_pkey" PRIMARY KEY ("facultad")
);

-- CreateTable
CREATE TABLE "Especialidades" (
    "especialidad" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Especialidades_pkey" PRIMARY KEY ("especialidad")
);

-- CreateTable
CREATE TABLE "Localidades" (
    "codigo" INTEGER NOT NULL,
    "ciudad" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "pais_del_c" TEXT NOT NULL,

    CONSTRAINT "Localidades_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "Paises" (
    "pais" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Paises_pkey" PRIMARY KEY ("pais")
);

-- CreateTable
CREATE TABLE "Planes" (
    "id" SERIAL NOT NULL,
    "plan" INTEGER NOT NULL,
    "especialidadId" INTEGER NOT NULL,
    "nombre" TEXT,

    CONSTRAINT "Planes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orientaciones" (
    "orientacion" INTEGER NOT NULL,
    "especialidadId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Orientaciones_pkey" PRIMARY KEY ("orientacion")
);

-- CreateTable
CREATE TABLE "Materias" (
    "materia" INTEGER NOT NULL,
    "especialidadId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "ano" INTEGER,

    CONSTRAINT "Materias_pkey" PRIMARY KEY ("materia")
);
