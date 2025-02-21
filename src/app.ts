import "reflect-metadata"
import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"
import { envs } from "./config/envs"
import { PostgresDatabase } from "./data"



async function main (){

    
    const postgresqlDB = new PostgresDatabase({
        port: envs.DB_PORT,
        host: envs.DB_HOST,
        username: envs.DB_USERNAME,
        password: envs.DB_PASSWORD,
        database: envs.DB_DATABASE
    })

    await postgresqlDB.connect()
    
    const server = new Server({
        port: 3000,
        routes: AppRoutes.routes
    })

    await server.start()

}

main()