-- CreateTable
CREATE TABLE "Universidad" (
    "universida" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Universidad_pkey" PRIMARY KEY ("universida")
);

-- CreateTable
CREATE TABLE "Grado" (
    "id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Grado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Facultad" (
    "id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Facultad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especialidad" (
    "id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Especialidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Localidad" (
    "codigo" INTEGER NOT NULL,
    "ciudad" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "pais_del_c" TEXT NOT NULL,

    CONSTRAINT "Localidad_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "Pais" (
    "pais" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Pais_pkey" PRIMARY KEY ("pais")
);

-- CreateTable
CREATE TABLE "Plan" (
    "plan" INTEGER NOT NULL,
    "especialidadId" INTEGER NOT NULL,
    "nombre" TEXT,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("plan")
);

-- CreateTable
CREATE TABLE "Orientacion" (
    "orientacion" INTEGER NOT NULL,
    "especialidadId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Orientacion_pkey" PRIMARY KEY ("orientacion")
);

-- CreateTable
CREATE TABLE "Materia" (
    "materia" INTEGER NOT NULL,
    "especialidadId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "ano" INTEGER,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("materia")
);
