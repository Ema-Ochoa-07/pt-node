import { compare, compareSync, genSaltSync, hashSync } from "bcrypt"
export const bcryptAdapter = {
    
    hash: ( password: string) =>{
        const jump = genSaltSync(12)
        return hashSync(password, jump)
    },
    
    compare: (bodyPassword: string, hashedPassword: string): boolean =>{
        return compareSync(bodyPassword, hashedPassword)
    }
}