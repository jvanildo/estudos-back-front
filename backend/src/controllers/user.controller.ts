import { Request, Response } from "express";
import UserService from '../services/user.services';

class UserController {
    static async getUsers(req: Request, res: Response){
        const users = await UserService.getUsers();
        res.json(users);
    }

    static async createUser(req: Request, res: Response){
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    }
}

export default UserController;