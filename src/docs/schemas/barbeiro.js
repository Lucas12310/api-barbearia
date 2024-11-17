const barbeiroSchemas = {
    barbeiroListagemResposta: {
        type: "object",
        example:{
            message: "Listado com sucesso!",
            error: false,
            code: 200,
            data: {
                _id: "67391c259db06ca9f9f36fba",
                nome: "Carlos Almeida",
                especialidade: "Fade com Design",
                ativo: true,
                __v: 0
        }}
    },
    barbeiroDetalhes: {
        type: "object",
        properties: {
            nome:  {type: "string",    description: "Nome do barbeiro"},
            especialidade:  {type: "integer",   description: "Corte de especialidade"},
            ativo:   {type: "boolean",    description: "ativou ou inativo"                     }
        },
        example: {
            nome: "Carlos Almeida",
            especialidade: "Fade com Design",
            ativo: true
        }
    },
    barbeiroPostResposta: {
        type: "object",
        required: ["nome", "especialidade", "ativo"],
        properties: {
            nome:  {type: "string",    description: "Nome do barbeiro"},
            especialidade:  {type: "integer",   description: "Corte de especialidade"},
            ativo:   {type: "boolean",    description: "ativou ou inativo"                     }
        },
        example: {
            message: "Barbeiro criado com sucesso!",
            error: false,
            code: 201,
            data: {
                nome: "Eduardo Costa",
                especialidade: "Fade Simétrico",
                ativo: true,
                _id: "67391c479db06ca9f9f36fc8"
            }
        }
    },
    barbeiroPostResponse: {
        type: "object",
        properties: {
          message: { type: "string", example: "Barbeiro atualizado com sucesso!" },
          error: { type: "boolean", example: false },
          code: { type: "integer", example: 202 },
          data: {
            type: "object",
            properties: {
                nome:  {type: "string",    description: "Nome do barbeiro"},
                especialidade:  {type: "integer",   description: "Corte de especialidade"},
                ativo:   {type: "boolean",    description: "ativou ou inativo"                     }
            }
          }
        },
        example: {
          message: "Barbeiro atualizado com sucesso!",
          error: false,
          code: 202,
          data: {
            nome: "Eduardo Costa",
            especialidade: "Fade Simétrico",
            ativo: true,
            _id: "67391c479db06ca9f9f36fc8"
          }
        }
      }
};
export default barbeiroSchemas;
