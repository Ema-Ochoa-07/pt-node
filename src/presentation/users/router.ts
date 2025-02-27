

import { Router, Request, Response } from 'express';
import { UserService } from '../../services/users.service';
import { UserController } from './controller';
import { EmailService } from '../../services/email.service';
import { envs } from '../../config';


export class UserRoutes {
  
  static get routes(): Router {
    const router = Router();

    const emailService = new EmailService(
      envs.MAILER_SERVICE,
      envs.MAILER_EMAIL,
      envs.MAILER_SECRET_KEY
    )

    const userService = new UserService(emailService)
    const userController = new UserController(userService)

    router.post('/', userController.createUser)
    router.post('/login', userController.loginUser)

    router.get('/', userController.getUsers)
    router.get('/:id', userController.getUser)
    router.patch('/:id', userController.patchUser)
    router.delete('/:id', userController.deleteUser)
    
    return router;
  }

}