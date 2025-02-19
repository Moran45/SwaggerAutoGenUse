# Swagger Autogen con Express y TypeScript

Este proyecto utiliza **Express** y **Swagger Autogen** para documentar automáticamente los endpoints de una API en TypeScript.

## 📌 Instalación de Dependencias
Antes de ejecutar el proyecto, instala las dependencias necesarias con:

npm install express swagger-autogen swagger-ui-express js-yaml ts-node @types/node @types/express

## 📌 Importaciones Usadas
En los archivos del proyecto, se utilizan las siguientes importaciones:

### pruebaapi.ts (Servidor Express con Swagger UI)
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

### swagger-gen.ts (Generación automática de documentación Swagger)
import autogen from 'swagger-autogen';
import fs from 'fs';
import YAML from 'js-yaml';
import configFile from './swagger-config.json';

## 🚀 Comandos para Ejecutar el Proyecto

### 1️⃣ Arrancar el Servidor Express
Para iniciar el servidor, ejecuta:

npx ts-node pruebaapi.ts

### 2️⃣ Generar la Documentación Swagger
Para generar o actualizar la documentación de la API, ejecuta:

npx ts-node swagger-gen.ts

## 📄 Acceso a la Documentación Swagger
Una vez que el servidor esté corriendo, puedes acceder a la documentación Swagger en:

http://localhost:3000/docs

## 📌 Notas Importantes
- Asegúrate de haber generado `swagger.json` antes de iniciar el servidor.
- Si ves errores de `Cannot find module './swagger.json'`, ejecuta primero el script de generación de documentación (`swagger-gen.ts`).
- Si estás usando TypeScript, verifica que `tsconfig.json` tenga `"resolveJsonModule": true` para poder importar JSON sin problemas.
