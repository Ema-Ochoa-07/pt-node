##  API: Tienda De Video Juegos
Proyecto tipo Backend que tiene como objetivo: la creación modificación, búsqueda o eliminación de un usuario, además de realizar una verificación  por medio de correo electrónico y asu vez que el usuario se permita loggear haciendo match con su credenciasles y por medio de la consecución de tokens.


####  Aplicativo realizado con:

- Lenguaje de programación: **Java Script - Type Script**
- Entorno de tiempo de ejecución: **NodeJs**
- Famework: **Express**
- Motor de base de datos: **PostgreSQL**
- ORM: **TypeORM**

                    
### Variables de entornos
Se debe crear un archivo en el directorio raiz del proyecto `.env`  con el cual se procede a agregar las variables de entorno, para la conexión de la base de datos, con motor de bd postgreSQL.

```javascript
PORT = 3000
DATABASE_HOST = localhost
DATABASE_PORT = 5432
DATABASE_USERNAME = postgres -> o tu username de postgreSQL
DATABASE_PASSWORD = ********* -> clave de postgrest
DATABASE_DATABASE = nombre_BD

JWT_SEED =RXN0b3kgZW4gbGEgZ2VuIDM3

MAILER_SERVICE =gmail
MAILER_EMAIL =pruebadev177@gmail.com
MAILER_SECRET_KEY=vtmrjgspcpuenggm
SEND_EMAIL =true
WEBSERVICE_URL= http://localhost:3000/api/v1

```
####  Configuración inicial
- Una vez clonado el repositorio, en directorio raiz del proyecto abrimos la terminal y ejecutamos el siguiente comando:`npm install` esto permitirá descargar las dependencias de NodeJs, instaladas para esta aplicación
- El comando para correr el proyecto: `npm run dev`

####  EndPoints - Postman
https://documenter.getpostman.com/view/36288876/2sAYdinUvL
