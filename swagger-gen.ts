import autogen from 'swagger-autogen';
import fs from 'fs';
import YAML from 'js-yaml';
import configFile from './swagger-config.json';

const outputFile = './swagger.json'; // Archivo de salida
const endpointsFiles = ['./pruebaapi.ts']; // Archivo donde están las rutas


const generateDocs = async () => {
  await autogen({ openapi: '3.1.0' })(outputFile, endpointsFiles, configFile);

  // Convertir JSON a YAML
  const jsonFile = require('./swagger.json');
  const yamlFile = YAML.dump(jsonFile);
  fs.writeFileSync('./swagger.yml', yamlFile, 'utf8');

  console.log('✅ Documentación generada correctamente.');
};

generateDocs();