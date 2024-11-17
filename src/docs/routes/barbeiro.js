import barbeiroSchemas from "../schemas/barbeiro.js";

const barbeiroRoutes = {
  "/barbeiro": {
    get: {
      tags: ["Barbeiro"],
      summary: "Lista todos os barbeiros cadastrados",
      responses: {
        200: {
          description: "Listado com sucesso!",
          content: { "application/json": { schema: { $ref: "#/components/schemas/barbeiroListagemResposta" } } }
        },
        400: {
          description: "",
          content: { "application/json": { schema: { type: 'object', example: { error: true, code: 400, message: ["Nenhum barbeiro encontrado!"] } } } }
        }
      }
    },
    post: {
      tags: ["Barbeiro"],
      summary: "Cadastra um novo barbeiro",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/barbeiroDetalhes"
            }
          }
        }
      },
      responses: {
        201: {
          description: "Requisição bem sucedida",
          content: { "application/json": { schema: { $ref: "#/components/schemas/barbeiroPostResposta" } } }
        },
        400: {
          description: "",
          content: { "application/json": { schema: { type: 'object', example: { error: true, code: 400, message: ["Erro ao cadastrar barbeiro!"] } } } }
        }
      }
    }
  },
  "/barbeiro/{id}": {
    patch: {
      tags: ["Barbeiro"],
      summary: "Atualiza um barbeiro",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "ID do barbeiro",
          example: "67391c1f9db06ca9f9f36fb8"
        }
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/barbeiroDetalhes"
            }
          }
        }
      },
      responses: {
        202: {
          description: "Requisição bem sucedida",
          content: { "application/json": { schema: { $ref: "#/components/schemas/barbeiroPostResponse" } } }
        },
        400: {
          description: "",
          content: { "application/json": { schema: { type: 'object', example: { error: true, code: 400, message: ["Não é possivel atualizar o barbeiro solicitado!"] } } } }
        }
      }
    },
    delete: {
      tags: ["Barbeiro"],
      summary: "Deleta um barbeiro",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          },
          description: "ID da sala",
          example: "67391c1f9db06ca9f9f36fb8"
        }
      ],
      responses: {
        204: {

        },
        400: {
          description: "",
          content: { "application/json": { schema: { type: 'object', example: { error: true, code: 400, message: ["Barbeiro não encontrado!"] } } } }
        }
      }
    }
  }
};

export { barbeiroRoutes };
