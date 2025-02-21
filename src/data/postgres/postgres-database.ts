import { DataSource } from "typeorm"
import { User } from "./models/users.model"


interface Options {
    host: string
    port: number
    username: string
    password:string
    database:string
}

export class PostgresDatabase{

    private datasource: DataSource

    constructor(option: Options){
        this.datasource = new DataSource({
            type:'postgres',
            host: option.host,
            port: option.port,
            username: option.username,
            password: option.password,
            database: option.database,
            entities:[User],
            // entities: [table1, table2],
            synchronize: true,
        })
    } 

    async connect(){
        try {
            await this.datasource.initialize()
            console.log('Connected to database 👌')
            
        } catch (error) {
            console.error('Error conecting to the database 🧨', error)
        }
    }

}