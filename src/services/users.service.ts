import { bcryptAdapter } from "../config";
import { JwtAdapter } from "../config/jwt.adapter";
import { User } from "../data";
import { CreateUserDto } from "../domain/dtos/create-user.dto"
import { LoginUserDto } from "../domain/dtos/login.dto";
import { EmailService } from "./email.service";

export enum UserStatus{
  ACTIVE = 'ACTIVE',
  DISABLE = 'DISABLE'
}

export class UserService{

  constructor(
    private readonly emailService: EmailService
  ){}

    
    async createUser(createUserData: CreateUserDto){
        
      const existUser = await User.findOne({
        where:{
          email:createUserData.email,
          status: UserStatus.ACTIVE
          
        }
      })

      if(existUser){
        throw new Error("El correo ya existe, vuelve a intentar!!!");
      }

      const user = new User();    
        user.name = createUserData.name;
        user.email = createUserData.email;
        user.password = bcryptAdapter.hash(createUserData.password);
    
        try {
          const userSave = await user.save();
          const token = await JwtAdapter.generateToken({id: user.id})
          if(!token){
            throw new Error('Error al crear el token')
          }
          return {
            token,
            user: userSave
          }

        } catch (error) {
          throw new Error("Internal Server Error");
          
        }
      }

      async login(loginData: LoginUserDto){

        // const existUser = await User.findOne({
        //   where:{
        //     email: loginData.email,
        //     status: UserStatus.ACTIVE
        //   }
        // })
        // if(!existUser){
        //   throw new Error("El usuario no existe, porfavor registrese!!!");
        // }
        // const userLogin = new User()
        // userLogin.email = loginData.email
        // userLogin.password = bcryptAdapter.hash(createUserData.password);

        // try {
        //   userLogin.save()
        // } catch (error) {
        //   throw new Error("Internal Server Error");
        // }

      }

    async getUser( id: number){
       try {               
        const user =  await User.findOne({
          where:{
            id: id
          }
        }) 
       
        if(!user){
          throw new Error ("Usuario no encontrado")
        }   
        return user  
       } 

       
       catch (error) {
        throw new Error("Internal Server Error");
       }
    }

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

    async updateUser(userData: CreateUserDto, idClient: number){

      try {
        const user  = await User.findOne({
          where:{
            id: idClient
          }
        })

        if(!user){
          throw new Error ("Usuario no encontrado")
        }

        user.name = userData.name
        user.email = userData.email
        user.password = userData.password
        return await user.save()

      } catch (error) {
        throw new Error("Internal Server Error");
      }

    }

    async deleteUser(id: number){
      try {
        const user = await User.findOne({
          where:{
            id:id
          }
        }) 
        
        if(!user){
          throw new Error ("Usuario no encontrado")
        }
        user.status= UserStatus.DISABLE
        
        return user.save()
      } catch (error) {
        throw new Error("Internal Server Error");
      }
      
    }

}