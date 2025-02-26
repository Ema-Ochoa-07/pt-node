
import jwt from 'jsonwebtoken'
import {envs} from "./envs";

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
}