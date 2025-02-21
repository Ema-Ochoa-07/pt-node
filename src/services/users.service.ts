import { CreateUserDto } from "../domain/dtos/create-user.dto"

export class UsersService{

    
    async allUsers(){
        return 'Get All user'
    }

    async createUser(createUserDto: CreateUserDto){
        return 'Createuserr'
    }

    async getUser(){
        return 'Get user'
    }

    async updateUser(){
        return 'Update user'
    }

    async deletetUser(){
        return 'Remove user'
    }

}