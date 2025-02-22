import { Request, Response } from "express";
import { UserService } from "../../services/users.service"; 
import { CreateUserDto } from "../../domain";

export class UserController{

    constructor(
        private readonly userService: UserService
    ){}

    getUsers = (req: Request, res: Response) =>{
        this.userService.allUsers()
        .then((data) => res.status(200).json(data))
        .catch(error => res.status(500).json({message:error}))
    }

    createUser = (req: Request, res: Response) =>{

        const [error, createUserDto ] = CreateUserDto.create(req.body);
        if( error ) return res.status(422).json({message: error})      
        this.userService.createUser(createUserDto!)

        .then((data) => res.status(201).json(data))
        .catch(error => res.status(500).json({message:'Ups!! algo salió mal no se pudo crear el usuario, Vuelve a intentar!!'}))
    }

    getUser = (req: Request, res: Response) =>{
        const {id} = req.params


        if(isNaN(+id)){
            return res.status(400).json({message:'Digita un número entero'})
        }

        this.userService.getUser(+id)
        .then((data) => res.status(200).json(data))
        .catch(error => res.status(500).json({message:'Ups!! algo salió mal; intenta nuevamente!!!'}))
    }

    patchUser = (req: Request, res: Response) =>{
        
        const {id} = req.params
        const [error, createUserDto ] = CreateUserDto.create(req.body)

        if(isNaN(+id)){
            return res.status(400).json({message:'Digita un número entero'})
        }

        this.userService.updateUser(createUserDto!, +id)
        .then((data) => res.status(200).json(data))
        .catch(error => res.status(500).json({message:error}))
    }

    deleteUser = (req: Request, res: Response) =>{
        this.userService.deleteUser()
        .then((data) => res.status(200).json(data))
        .catch(error => res.status(500).json({message:error}))
    }
}