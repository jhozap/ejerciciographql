import Usuario from "../models/Usuario";
import Rol from "../models/Rol";

import bcrypt from "bcrypt";
import { generarJwt } from "../helpers/jwt";

export const resolvers = {
    Query : {
        usuarios(_,args,{user}) {
            console.log('usuarios', user);
            
            if(user.auth) {                
                return Usuario.find();
            } else {
                throw new Error("Not authenticated");
            }
        },
        async usuarioById(_, {id}) {
            return await Usuario.findById(id);
        },
        async login(_, {email, password}) {
            
            const usuario = await Usuario.findOne({
                email
            })
            .populate('rol')
            // console.log(usuario)
            // console.log("args", email, password);
            if(!usuario){
                // return "Usuario o contraseña incorrecto"
                throw new Error("Usuario o contraseña incorrecto");
            }
            
            const validarPassword = bcrypt.compareSync(password , usuario.password);
            
            if (validarPassword){
                const token = await generarJwt(usuario.id, usuario.nombre)
                return {
                    token,
                    usuario: `${ usuario.nombre } ${ usuario.apellido }`,
                    rol: usuario.rol.name
                };
            }

            else {
                throw new Error("Usuario o contraseña incorrecto");
            }

        }
    },
    Mutation : {
        async crearUsuario(_, {usuario}){

            const nUsuario = new Usuario(usuario);

             /**Encriptando contraseña */
            const salt = bcrypt.genSaltSync();
            nUsuario.password = bcrypt.hashSync(usuario.password, salt);

            return await nUsuario.save();            
        },
        async actualizarUsuario(_,{usuario}) {
            
        },
        async eliminarUsuario(_,{usuario}) {
            
        }
    }
}