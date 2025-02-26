
import jwt from 'jsonwebtoken'
import {envs} from "./envs";

const JWT_SEED = envs.JWT_SEED

export class JwtAdapter {

    static async generateToken(payload: any, duration: string = '3h') {
        return new Promise((resolve, reject) => {
            
        //   jwt.sign(payload, JWT_SEED as string, { expiresIn: duration }, (err, token) => {
        //     if (err) return reject(err);
        //     resolve(token);
        //   });
        });
      }
        
}