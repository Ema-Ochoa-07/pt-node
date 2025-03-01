
import jwt, { decode } from 'jsonwebtoken'
import {envs} from "./envs";
import { resolve } from 'path';
import { error } from 'console';

const JWT_SEED = envs.JWT_SEED

export class JwtAdapter {

  static async generateToken(payload: any, duration: string = '3h') {

    return new Promise((resolve) => {

      // @ts-expect-error Ignorar error de TypeScript en jwt.sign
      jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {

        if( err ) return resolve(null);

        resolve(token)
      })
    })
  }

  static async validateToken<T>(token: string): Promise <T | null>{
    return  new Promise((resolve) =>{
      jwt.verify(token, JWT_SEED,(error, decode) =>{
        if(error) return resolve(null)

          resolve(decode as T)
      })
    })
  }
}