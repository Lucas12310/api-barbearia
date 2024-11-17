import barbeiroRepository from "../repository/barbeiroRepository.js";

class BarbeiroServices{
    static async listar() {
        const response = await barbeiroRepository.find();
        if(response.length == 0){
            throw{
                message:"Nenhum barbeiro encontrado!",
                code:400
            }
        }
        return response;
    }
    static async listarId(id) {
        const response = await barbeiroRepository.findId(id);
        if(response.length == 0){
            throw{
                message:"Nenhum barbeiro encontrado!",
                code:400
            }
        }
        return response;
    }
    static async inserir(data) {
        const response = await barbeiroRepository.create(data);
        return response;
    }
    static async atualizar(id, data) {
        const response = await barbeiroRepository.update(id,data);
        return response;
    }

    static async excluir(id) {
        const response = await barbeiroRepository.delete(id);
        return response;
    }
    
}

export default BarbeiroServices