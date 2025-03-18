import { Request, Response } from "express";
import LojaService from '../services/loja.services';
import { limparCep } from "../../utils/formatters";

class LojaController {
    static async getUsers(req: Request, res: Response){
        const lojas = await LojaService.getLoja();
        res.json(lojas);
    }

    static async createUser(req: Request, res: Response){
        const loja = await LojaService.createLoja(req.body);
        res.status(201).json(loja);
    }
    static async buscarLojasProximas(req: Request, res: Response){
        try{
            const { cep } =  req.params;
            if (!cep) {
                return res.status(400).json({ error: "CEP é obrigatório" });
              }
            const { raio } = req.params;

            const lojas = await LojaService.buscarLojasProximas(limparCep(cep), Number(raio)| 5);
            return res.status(200).json(lojas)
        }catch(error){
            return res.status(500).json({error: error.menssage});
        }
    }
}

export default LojaController;