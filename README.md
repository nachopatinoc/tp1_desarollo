# Trabajo Práctico 1 - Desarrollo de Software

Este proyecto es un sistema heredado del proyecto de rediseño del sistema académico SysAcad utilizando TypeScript. Los requerimientos del trabajo práctico son persistrir todos los registros dentro de los XML en una base de datos de Postgresql implementando metodología TDD (Test Driven Development) y siguiendo principios SOLID, KISS, YAGNI y DRY.

## Requisitos Previos

- Node.js (versión recomendada: 18.x o superior)
- Docker y Docker Compose
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/nachopatinoc/tp1_desarollo.git
cd tp1_desarrollo
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
POSTGRES_USER=tu_usuario
POSTGRES_PASSWORD=tu_contraseña
POSTGRES_DB=sysacad_db
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5433/${POSTGRES_DB}?schema=public"
```

4. Iniciar la base de datos PostgreSQL usando Docker:
```bash
docker compose up -d
```

5. Ejecutar las migraciones de Prisma:
```bash
npx prisma migrate dev
```

## Scripts Disponibles

- `npm start`: Inicia la aplicación y persiste todos los registros de los XML
- `npm test`: Ejecuta los tests
- `npm run clear-db`: Limpia la base de datos (útil para desarrollo)

Se recomienda ejecutar el script de limpieza de base de datos antes de ejecuctar el script de inicio de la apliación

## Estructura del Proyecto

```
.
├── src/           # Código fuente
├── tests/         # Tests unitarios y de integración
├── prisma/        # Configuración y migraciones de la base de datos
├── data/          # Datos de ejemplo y archivos de configuración
└── node_modules/  # Dependencias (no versionado)
```

## Tecnologías Principales

- TypeScript
- Node.js
- Prisma (ORM)
- PostgreSQL
- Jest (Testing)
- Docker

## Desarrollo

El proyecto sigue una metodología TDD (Test Driven Development), por lo que se recomienda:

1. Escribir los tests primero
2. Implementar la funcionalidad
3. Refactorizar manteniendo los tests pasando

## Base de Datos

La base de datos PostgreSQL se ejecuta en un contenedor Docker en el puerto 5433. Para acceder a la base de datos:

- Host: localhost
- Puerto: 5433
- Usuario y contraseña: según configuración en .env
- Base de datos: DEV_SYSACAD

## Integrantes del proyecto
- Araya Valentino
- Conforti Angelo
- Contreras Facundo
- Duran Faustino
- Patiño Ignacio
- Romero Tomás