import express from "express";
import barbeiro from "../routes/barbeiroRouter.js";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import getSwaggerOptions from "../docs/config/head.js";

const routes = (app) => {
    // Redirecionando para a documentação (agora corrigido para funcionar em qualquer ambiente)
    app.get("/", (req, res) => {
        res.status(200).redirect("/docs"); // Redirecionando para a rota '/docs' com a barra inicial
    });

    // Configurando a documentação do Swagger UI
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(getSwaggerOptions()), {
        customCssUrl: [
            "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css" // Usando o CSS do Swagger diretamente do CDN
        ],
        customJsUrl: [
            "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js", // Usando o JS do Swagger diretamente do CDN
            "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js" // Usando o JS adicional do Swagger via CDN
        ],
        customSiteTitle: "API Barbeiro", // Personalizando o título da página de documentação
    }));

    // Configurando as rotas da aplicação (aqui estamos assumindo que `barbeiro` é a sua rota principal)
    app.use(
        express.json(),
        express.text(),
        barbeiro, // Rota do barbeiro, onde você tem suas APIs
    );
};

export default routes;


