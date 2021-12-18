import Usuario from "../models/Usuario";
import Rol from "../models/Rol";

import bcrypt from "bcrypt";
import { generarJwt } from "../helpers/jwt";

export const resolvers = {
    Query: {
        async usuarios(_, args, { user }) {

            try {
                // console.log('paso', user);

                if (user.auth) {
                    const resp = await Usuario.find({});
                    // console.log('respuesta', resp);
                    return resp;
                } else {
                    throw new Error("Not authenticated");
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        async usuarioById(_, { id }) {
            return await Usuario.findById(id);
        },
        async login(_, { email, password }) {

            const usuario = await Usuario.findOne({
                email
            })
                .populate('rol');

            if (!usuario) {
                throw new Error("Usuario o contraseña incorrecto");
            }

            const validarPassword = bcrypt.compareSync(password, usuario.password);

            if (validarPassword) {
                const token = await generarJwt(usuario.id, usuario.nombre)
                return {
                    token,
                    usuario: `${usuario.nombre} ${usuario.apellido}`,
                    rol: usuario.rol.name
                };
            }

            else {
                throw new Error("Usuario o contraseña incorrecto");
            }

        }
    },
    Mutation: {
        async crearUsuario(_, { usuario }) {

            const nUsuario = new Usuario(usuario);

            /**Encriptando contraseña */
            const salt = bcrypt.genSaltSync();
            nUsuario.password = bcrypt.hashSync(usuario.password, salt);

            return await nUsuario.save();
        },
        async actualizarUsuario(_, { usuario }) {

        },
        async eliminarUsuario(_, { usuario }) {

        }
    }
}