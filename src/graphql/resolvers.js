<<<<<<< HEAD
import { cursos } from "../data/cursos";
import Curso from "../models/Curso"
import Usuario from "../models/Usuario";
import bcrypt from "bcrypt";
=======
import { cursos } from "../data/cursos"
import Curso from "../models/Curso";
import Usuario from "../models/Usuario";
import bcryp from "bcrypt";
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
import { generarJwt } from "../helpers/jwt";

export const resolvers = {
    Query : {
        Hola : (parent, args) => {
            return "Hola " + args.Nombre 
        },
<<<<<<< HEAD
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
=======
        Cursos() {
            return Curso.find();
        },
        async Login(_, {email, password}) {
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
            
            const usuario = await Usuario.findOne({
                email
            })
<<<<<<< HEAD
            console.log(usuario)
            console.log("args", email, password);
            if(!usuario){
                return "Usuario o contraseña incorrecto"
            }
            
            const validarPassword = bcrypt.compareSync(password , usuario.password)
            
=======
            if (!usuario){
                return "Usuario o contraseña incorrecto";
            }
            
            const validarPassword = bcryp.compareSync(password, usuario.password)
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
            if (validarPassword){
                const token = await generarJwt(usuario.id, usuario.nombre)
                return token;
            }
<<<<<<< HEAD

            else {
                return "Usuario o contraseña incorrecto"

            }

=======
            else {
                return "Usuario o contraseña incorrecto";
            }
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
        }
    },
    Mutation : {
        async AgregarCurso(_, {curso}){
<<<<<<< HEAD
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
            
=======
           /* const nCurso = new Curso({
                nombre: curso.nombre,
                lenguaje: curso.lenguaje,
                fecha: curso.fecha,
            });*/
            const nCurso = new Curso(curso);
            return await nCurso.save();
        },
        async AgregarUsuario(_, { usuario }) {            
            const salt = bcryp.genSaltSync();
            let nUsuario = new Usuario(usuario);
            nUsuario.password = bcryp.hashSync(usuario.password, salt);
            return await nUsuario.save();
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
        }
    }
}