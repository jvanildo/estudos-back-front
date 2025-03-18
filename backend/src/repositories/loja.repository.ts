import { PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

class LojaRepository {
    static async getLojas() {
        return await prisma.loja.findMany()
    }

    static async createLoja(userData: {name:string; endereco: string; cep:string; numero: number, latitude:number, longitude:number}) {
        return await prisma.loja.create({data: userData});
    }
}

export default LojaRepository;