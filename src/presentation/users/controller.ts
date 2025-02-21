import { Request, Response } from "express";
import { UsersService } from "../../services/users.service"; 
import { CreateUserDto } from "../../domain/dtos/create-user.dto";

export class UsersController{

    constructor(
        private readonly userService: UsersService
    ){}

    getUsers = (req: Request, res: Response) =>{
        this.userService.allUsers()
        .then((data) => res.status(200).json(data))
        .catch(error => res.status(500).json({message:error}))
    }

    postUser = (req: Request, res: Response) =>{
        
        const [error, createUserDto] = CreateUserDto.create(req.body)
        if(error) return res.status(422).json({message: error})

        this.userService.createUser(createUserDto!)
        .then((data) => res.status(201).json(data))
        .catch(error => res.status(500).json({message:error}))
    }

    getUser = (req: Request, res: Response) =>{
        this.userService.getUser()
        .then((data) => res.status(200).json(data))
        .catch(error => res.status(500).json({message:error}))
    }

    putUser = (req: Request, res: Response) =>{
        res.json({ok: true})
    }

    deletetUser = (req: Request, res: Response) =>{
        this.userService.deletetUser()
        .then((data) => res.status(200).json(data))
        .catch(error => res.status(500).json({message:error}))
    }
}