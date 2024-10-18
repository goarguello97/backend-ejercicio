# Backend para Ejercicio Fullstack

Este repositorio contiene el backend de un ejercicio fullstack. Está diseñado para facilitar el desarrollo de una aplicación web utilizando Node.js y Express.

## Descripción

Este proyecto incluye un servidor Express y una configuración básica para interactuar con una base de datos PostgreSQL a través de Sequelize. También se utiliza nodemon para reiniciar automáticamente el servidor durante el desarrollo.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
  npm install
```

Asegúrate de tener un archivo .env configurado en la raíz del proyecto para las variables de entorno necesarias.

## Variables de Entorno

Antes de ejecutar el proyecto, necesitas crear tu propia base de datos en PostgreSQL. Asegúrate de tener PostgreSQL instalado y funcionando. Luego, crea una base de datos y completa las siguientes variables de entorno en un archivo .env en la raíz del proyecto:

```bash
PORT=3001
DB_USER=tu_usuario_de_postgres
DB_PASSWORD=tu_contraseña_de_postgres
DB_HOST=localhost
DB_NAME=nombre_de_tu_base_de_datos
```

## Uso

Para iniciar el servidor en modo de desarrollo, utiliza el siguiente comando:

```bash
  npm run server
```

Para ejecutar el script de siembra de datos, utiliza:

```bash
  npm run seed
```

## Scripts

### server:

Inicia el servidor utilizando nodemon.

### start:

Inicia el servidor usando node.

### seed:

Ejecuta el archivo seed.js para sembrar datos en la base de datos.

## Referencias API

#### Traer todos los empleados

```http
  GET /api/empleados/
```

#### Trer empleado

```http
  GET /api/empleado/${id}
```

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- cors: Middleware para habilitar CORS.
- dotenv: Carga variables de entorno desde un archivo .env.
- express: Framework web para Node.js.
- nodemon: Herramienta para reiniciar automáticamente el servidor.
- pg: Cliente PostgreSQL para Node.js.
- sequelize: ORM para Node.js que facilita la interacción con bases de datos.

## Dependencias de Desarrollo

- @faker-js/faker: Biblioteca para generar datos falsos para pruebas.
