import * as dotenv from 'dotenv';

dotenv.config()
//routes
import { barbeiroRoutes } from "../routes/barbeiro.js";
//schemas
import barbeiroSchemas from "../schemas/barbeiro.js";

// Função para definir as URLs do servidor dependendo do ambiente
const getServersInCorrectOrder = () => {
  const devUrl = { url: process.env.SWAGGER_DEV_URL || "http://localhost:7002" };
  const prodUrl = { url: process.env.SWAGGER_PROD_URL || "https://api-barbearia-indol.vercel.app/" };

  if (process.env.NODE_ENV === "production") return [prodUrl, devUrl];
  else return [devUrl, prodUrl];
};

// Função para obter as opções do Swagger
const getSwaggerOptions = () => {
  return {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "API Barbearia",
        version: "1.0-alpha",
        description: "Api que gerencia uma barbearia",
        contact: {
          name: "Lucas Fernandes",
          email: "lucas12310@hotmail.com",
        },
      },
      servers: getServersInCorrectOrder(),
      tags: [
        {
          name: "Barbeiro",
          description: "Rota para gestão de barbeiros"
        },
      ],
      paths: {
        //login
        ...barbeiroRoutes
      },
      components: {
        schemas: {
          ...barbeiroSchemas
        }
      },
    },
    apis: ["./src/routes/*.js"]
  };
};

export default getSwaggerOptions;
