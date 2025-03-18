import UserRepository from "../repositories/user.repository"

class UserService {
    static async getUsers(){
        return UserRepository.getUsers();
    }

    static async createUser(userData: {name:string; email: string}){
        return UserRepository.createUser(userData);
    }
}

export default UserService;