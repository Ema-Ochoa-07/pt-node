

import { Router, Request, Response } from 'express';
import { UserService } from '../../services/users.service';
import { UserController } from './controller';


export class UserRoutes {
  
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const userController = new UserController(userService);

    router.get('/', userController.getUsers)
    router.post('/', userController.createUser)
    router.get('/:id', userController.getUser)
    router.patch('/:id', userController.patchUser)
    router.delete('/:id', userController.deleteUser)
    
    return router;
  }

}