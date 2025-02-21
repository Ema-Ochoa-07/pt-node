import express, { Router, urlencoded } from "express"

interface Options {
port: number
routes: Router
}

export class Server{

    private readonly app = express()    
    private readonly port: number
    private readonly routes: Router

    constructor(options: Options){
        this.port = options.port
        this.routes = options.routes
    }

    async start(){
    
        //Middelware - Decodificar archivos JSON Y urlencoded
        this.app.use(express.json())
        this.app.use(urlencoded({extended:true }))

        //Middelware - ejecutar las rutas de la app
        this.app.use(this.routes)

        //Middelware - Definir por qué puerto se va a ejecutar la aplicación
        this.app.listen(this.port,() =>{
            console.log(`Server running on port ${this.port}`)
        })

    }
}