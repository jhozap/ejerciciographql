import { cursos } from "../data/cursos";
import Curso from "../models/Curso"
import Usuario from "../models/Usuario";
import bcrypt from "bcrypt";
import { generarJwt } from "../helpers/jwt";

export const resolvers = {
    Query : {
        Hola : (parent, args) => {
            return "Hola " + args.Nombre 
        },
        Cursos(_,args,context) {
            console.log(context);
            if(context.user.auth){
                
                return Curso.find();

            }
            else{
                return null;
            }
        },
        async Login(_, {email, password}){
            
            const usuario = await Usuario.findOne({
                email
            })
            console.log(usuario)
            console.log("args", email, password);
            if(!usuario){
                return "Usuario o contraseña incorrecto"
            }
            
            const validarPassword = bcrypt.compareSync(password , usuario.password)
            
            if (validarPassword){
                const token = await generarJwt(usuario.id, usuario.nombre)
                return token;
            }

            else {
                return "Usuario o contraseña incorrecto"

            }

        }
    },
    Mutation : {
        async AgregarCurso(_, {curso}){
            // const nCurso = new Curso({
            //     nombre: curso.nombre,
            //     lenguaje: curso.lenguaje,
            //     fecha: curso.fecha,
                
            //   });
            const nCurso = new Curso(curso)
            
              return await nCurso.save();

            
        },
        async AgregarUsuario(_,{usuario}){

            const salt = bcrypt.genSaltSync();


             
            let nUsuario = new Usuario(usuario)
            nUsuario.password = bcrypt.hashSync(usuario.password, salt );
            
              return await nUsuario.save();
            
        }
    }
}