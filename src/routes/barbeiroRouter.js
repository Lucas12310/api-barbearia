import express from "express";
import BarbeiroController from "../controller/barbeiroController.js";

const router = express.Router();

router.get('/barbeiro', BarbeiroController.listar);
router.get('/barbeiro/:id', BarbeiroController.listarId);
router.post('/barbeiro', BarbeiroController.inserir);
router.patch('/barbeiro/:id', BarbeiroController.atualizar);
router.delete('/barbeiro/:id', BarbeiroController.excluir);

export default router;
