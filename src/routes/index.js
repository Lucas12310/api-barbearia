import express from "express";
import barbeiro from "../routes/barbeiroRouter.js"
//imports swagger
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import getSwaggerOptions from "../docs/config/head.js";

const routes = (app) => {
    // Configurando a documentação da Swagger UI para ser servida diretamente em '/'
    app.get("/",(req, res) => {
		res.status(200).redirect("docs"); // redirecionando para documentação
	});

	app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(getSwaggerOptions()), {
		customCssUrl: [ "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css" ]
	}));


    app.use(
        express.json(),
        express.text(),
        barbeiro,
    );


};

export default routes;
