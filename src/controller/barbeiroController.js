import barbeiroService from "../services/barbeiroServices.js";

class barbeiroController {
    static listar = async (req, res) => {
        try {
            const response = await barbeiroService.listar();
            res.status(200).json({
                message: 'Listado com sucesso!',
                error: false,
                code: 200,
                ...response
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        };
    }
    static listarId = async (req, res) => {
        try {
            const id = req.params.id
            const response = await barbeiroService.listarId(id);
            res.status(200).json({
                message: 'Listado com sucesso!',
                error: false,
                code: 200,
                data:response
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        };
    }
    static inserir = async (req, res) => {
        try {
            const { nome, especialidade, ativo } = req.body
            const data = {
                nome: nome, especialidade: especialidade, ativo: ativo,
            }
            const response = await barbeiroService.inserir(data)
            res.status(201).json({
                message: 'Barbeiro criado com sucesso!',
                error: false,
                code: 201,
                data: response
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
    static atualizar = async (req, res) => {
        try {
            const id = req.params.id

            const { nome, especialidade, ativo } = req.body
            const data = {
                nome: nome, especialidade: especialidade, ativo: ativo,
            }
            const response = await barbeiroService.atualizar(id, data)
            res.status(202).json({
                message: 'Barbeiro atualizado com sucesso!',
                error: false,
                code: 202,
                data: response
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    static excluir = async (req, res) => {
        try {
            const id = req.params.id
            const response = await barbeiroService.excluir(id)

            res.status(204).json({
                message: 'Barbeiro deletado com sucesso!',
                error: false,
                code: 204,
                data: response
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

export default barbeiroController;