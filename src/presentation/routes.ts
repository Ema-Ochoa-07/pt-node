import { Router } from "express";
import { UsersRoutes } from "./users/route";

export class AppRoutes{
    static get routes():Router{
        const router = Router()

        router.use('/api/v1/users', UsersRoutes.routes)

        return router
    }
}