import { Router } from "express";
import { UsersService } from "../../services/users.service";
import { UsersController } from "./controller";

export class UsersRoutes{
    static get routes():Router{
        const router = Router()

        
        const userService = new UsersService()
        const useController = new UsersController(userService)

        router.get('/',useController.getUsers)
        router.post('/',useController.postUser)
        router.get('/:id',useController.getUser)
        router.put('/:id',useController.putUser)
        router.delete('/:id',useController.deletetUser)

        return router
    }
}