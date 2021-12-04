import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        Hola(Nombre : String!): String
        Cursos : [Curso]
<<<<<<< HEAD
        Login(email : String! , password : String!) : String
=======
        Login(email : String!, password : String!): String
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
    }


    type Mutation {
        AgregarCurso(curso : CursoInput): Curso
<<<<<<< HEAD
        AgregarUsuario(usuario : UsuarioInput) : Usuario
    }

    type Usuario{
        id : ID,
        nombre : String,
        email : String,
        password : String
=======
        AgregarUsuario(usuario : UsuarioInput): Usuario
    }

    type Usuario {
        id: ID,
        nombre: String,
        email: String,
        password: String,
    }

    input UsuarioInput {
        nombre: String,
        email: String,
        password: String,
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
    }

    type Curso {
        id: ID,
        nombre: String,
        lenguajes: [Lenguaje],
        fecha: String,
    } 

    type Lenguaje {
<<<<<<< HEAD
        lenguaje : String
    }

    input UsuarioInput{
        
        nombre : String,
        email : String,
        password : String
=======
        lenguaje: String
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
    }

    input CursoInput {
        nombre: String,
<<<<<<< HEAD
        lenguajes: [LenguajeInput] ,
=======
        lenguajes: [LenguajeInput],
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
        fecha: String,
    }

    input LenguajeInput {
<<<<<<< HEAD
        lenguaje : String
    }

=======
        lenguaje: String
    }
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
`;

export default makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers : resolvers
})