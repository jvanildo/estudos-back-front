import { PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

class UserRepository {
    static async getUsers() {
        return await prisma.user.findMany();
    }

    static async createUser(userData: { name: string; email: string}) {
        return await prisma.user.create({data: userData});
    }
}

export default UserRepository;