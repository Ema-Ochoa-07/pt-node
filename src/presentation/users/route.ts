import { Router, Request, Response } from "express";
import { UsersService } from "../../services/users.service";
import { UsersController } from "./controller";

export class UsersRoutes {
    static get routes(): Router {
        const router = Router();

        const userService = new UsersService();
        const userController = new UsersController(userService);

        router.get("/", (req: Request, res: Response) => userController.getUsers(req, res));
        router.post("/", (req: Request, res: Response) => userController.postUser(req, res));
        router.get("/:id", (req: Request, res: Response) => userController.getUser(req, res));
        router.put("/:id", (req: Request, res: Response) => userController.putUser(req, res));
        router.delete("/:id", (req: Request, res: Response) => userController.deletetUser(req, res));

        return router;
    }
}
