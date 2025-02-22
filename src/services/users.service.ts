import { User, UserStatus } from "../data";
import { CreateUserDto } from "../domain/dtos/create-user.dto"

export class UserService{

    
    async allUsers(){
      try {
        return await User.find({
          where:{
            status: UserStatus.ACTIVE
          }
        })
      } catch (error) {
        throw new Error("Internal Server Error");
      }
    }

    async createUser(createUserData: CreateUserDto){
        const user = new User();
    
        user.name = createUserData.name;
        user.email = createUserData.email;
        user.password = createUserData.password;
    
        try {
          return await user.save();
        } catch (error) {
          throw new Error("Internal Server Error");
          
        }
      }

    async getUser( id: number){
       try {               
        const user =  await User.findOne({
          where:{
            id: id
          }
        }) 
       
        if(!user){
          return "Usuario no encontrado"
        }   
        return user  
       } 

       
       catch (error) {
        throw new Error("Internal Server Error");
       }
    }

    async updateUser(userData: CreateUserDto, idClient: number){

      try {
        const user  = await User.findOne({
          where:{
            id: idClient
          }
        })

        if(!user){
          return "Usuario no encontrado"
        }

        user.name = userData.name
        user.email = userData.email
        user.password = userData.password
        return await user.save()

      } catch (error) {
        throw new Error("Internal Server Error");
      }

    }

    async deleteUser(){
        return 'Remove user'
    }

}