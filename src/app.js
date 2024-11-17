
import express, { json } from "express";
import routes from "../src/routes/index.js";
const app = express()

import cors from "cors";

app.use(cors({
    origin: '*', // Permitir requisições da aplicação rodando em localhost:3000
    methods: ['GET', 'POST', 'PUT', 'PATCH','DELETE', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization', "application/json"], // Cabeçalhos permitidos
    credentials: true // Permitir envio de cookies ou headers de autenticação
}));

app.use(express.json())
routes(app);

export default app;