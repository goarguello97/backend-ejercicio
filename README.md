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
ORIGIN=url_frontend
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

### Traer todos los empleados

```http
  GET /api/empleados/
```

#### Ejemplo

```bash
[
    {
        "id": "dc0ce45a-3d19-4b99-b73b-8aad38877b03",
        "nombreCompleto": "Sra. Maica Guevara Solís",
        "edad": 77,
        "area": "Calidad",
        "antiguedad": 43,
        "telefono": "936 755 983",
        "createdAt": "2024-10-18T02:26:21.668Z",
        "updatedAt": "2024-10-18T02:26:21.668Z"
    },
    {
        "id": "704de57e-f1c6-4c35-924a-975143bf379e",
        "nombreCompleto": "María de los Ángeles Ríos Salinas",
        "edad": 114,
        "area": "Soluciones",
        "antiguedad": 20,
        "telefono": "996814279",
        "createdAt": "2024-10-18T02:26:21.669Z",
        "updatedAt": "2024-10-18T02:26:21.669Z"
    },
    {
        "id": "15a26580-2b8f-46cc-8564-eb89eab9c4fd",
        "nombreCompleto": "Pablo Escobar Herrera",
        "edad": 38,
        "area": "Cuentas",
        "antiguedad": 42,
        "telefono": "901.577.450",
        "createdAt": "2024-10-18T02:26:21.667Z",
        "updatedAt": "2024-10-18T02:26:21.667Z"
    },
    {
        "id": "6b37e5ee-558a-4d01-a8c9-d977db3c2e70",
        "nombreCompleto": "Iván Serrano Flórez",
        "edad": 58,
        "area": "Investigación",
        "antiguedad": 3,
        "telefono": "940-491-665",
        "createdAt": "2024-10-18T02:26:21.669Z",
        "updatedAt": "2024-10-18T02:26:21.669Z"
    },
    {
        "id": "4a48c782-56ec-44f7-9cbd-f4a57e0479a0",
        "nombreCompleto": "Jennifer Bañuelos Mondragón",
        "edad": 99,
        "area": "Mercados",
        "antiguedad": 21,
        "telefono": "935.911.306",
        "createdAt": "2024-10-18T02:26:21.667Z",
        "updatedAt": "2024-10-18T02:26:21.667Z"
    },
    {
        "id": "f0ec363b-bcb2-4dbb-bd51-c933f29ac287",
        "nombreCompleto": "Jorge Acosta Carrasquillo",
        "edad": 80,
        "area": "Implementación",
        "antiguedad": 46,
        "telefono": "948 105 139",
        "createdAt": "2024-10-18T02:26:21.668Z",
        "updatedAt": "2024-10-18T02:26:21.668Z"
    },
    {
        "id": "7ec6a04f-b8a6-408e-b787-569e2d179fa5",
        "nombreCompleto": "Ana Atencio Zaragoza",
        "edad": 54,
        "area": "Investigación",
        "antiguedad": 5,
        "telefono": "950-485-302",
        "createdAt": "2024-10-18T02:26:21.668Z",
        "updatedAt": "2024-10-18T02:26:21.668Z"
    },
    {
        "id": "45b6aabf-dfbf-482e-a373-c513a16c1f0e",
        "nombreCompleto": "Pío Coronado Cerda",
        "edad": 73,
        "area": "Investigación",
        "antiguedad": 15,
        "telefono": "972-993-957",
        "createdAt": "2024-10-18T02:26:21.669Z",
        "updatedAt": "2024-10-18T02:26:21.669Z"
    },
    {
        "id": "24c0cbed-6a7d-47f4-aa52-99547b2851ee",
        "nombreCompleto": "Ricardo Quiñónez Alba",
        "edad": 59,
        "area": "Tácticas",
        "antiguedad": 17,
        "telefono": "939007604",
        "createdAt": "2024-10-18T02:26:21.669Z",
        "updatedAt": "2024-10-18T02:26:21.669Z"
    },
    {
        "id": "5591fee1-886e-4c66-9382-6f4231ff34cc",
        "nombreCompleto": "Andrea Pineda Arreola",
        "edad": 95,
        "area": "Aplicaciones",
        "antiguedad": 32,
        "telefono": "936 117 681",
        "createdAt": "2024-10-18T02:26:21.669Z",
        "updatedAt": "2024-10-18T02:26:21.669Z"
    }
]
```

### Trer empleado

```http
  GET /api/empleado/${id}
```

#### Ejemplo

```bash
{
  "id": "1a800bfd-3c95-4283-9bd5-210802cb8197",
  "nombreCompleto": "Sr. Ricardo Corona Luna",
  "edad": 87,
  "area": "Investigación",
  "antiguedad": 50,
  "telefono": "974106945",
  "createdAt": "2024-10-18T01:54:17.999Z",
  "updatedAt": "2024-10-18T01:54:17.999Z"
}
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
