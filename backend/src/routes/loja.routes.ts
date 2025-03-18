import { Router } from "express";
import LojaController from "../controllers/loja.controller";

const router = Router()

router.get('/',LojaController.getUsers)
router.post('/',LojaController.createUser)
router.get('/proximas/:cep', async( req, res)=>{
    await LojaController.buscarLojasProximas(req,res);
})

export default router;