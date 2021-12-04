import express from "express";
import { graphqlHTTP } from "express-graphql";
<<<<<<< HEAD
import schema from "./graphql/schema";
import {dbConnection}  from "./database/config";
import { validarJwt } from "./middleware/validar-jwt";

 const app = express();
 dbConnection();
 app.use(validarJwt);
 app.use("/graphql", graphqlHTTP((req) => ({
=======
import schema from "./graphql/schema"
import {dbConnection } from "./database/config";

 const app = express();

dbConnection();

 app.use("/graphql", graphqlHTTP({
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
     graphiql : true,
     schema : schema,
     context : {
         user : req.user
     }
 })));

 app.listen(4000, () => {
     console.log ("Servidor conectado en el puerto 4000");
 })