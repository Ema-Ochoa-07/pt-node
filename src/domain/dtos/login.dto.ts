import { regularExps } from "../../config/regular-exp";


export class CreateUserDto {

   private constructor(
     public readonly email: string,
     public readonly password: string,
   ){}
 
   static create( object: { [key: string]: any } ): [string?, CreateUserDto?]{
     const { email, password } = object;
 
     if( !email ) return ['missing email']
     if( !password ) return ['missing password']

     return [undefined, new CreateUserDto(email, password)]
 
   }
 
 }