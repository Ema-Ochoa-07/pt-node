import { regularExps } from "../../config/regular-exp";


export class CreateUserDto {

   private constructor(
     public readonly name: string,
     public readonly email: string,
     public readonly password: string,
   ){}
 
   static create( object: { [key: string]: any } ): [string?, CreateUserDto?]{
     const { name, password, email } = object;
 
     if( !name ) return ['missing name', undefined]
     if( !email ) return ['missing email']
     if( !password ) return ['missing password']

     if(!regularExps.email.test(email)) return['Invalid email']
     if(!regularExps.password.test(password)) return [` The password must be at leaste 10 characters long and contain at
        least one uppercase, one lowercase letter, one number, and one special character `]

 
     return [undefined, new CreateUserDto(name, email, password)]
 
   }
 
 }