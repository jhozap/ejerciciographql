import jwt from "jsonwebtoken";

<<<<<<< HEAD
const secret = "@mi_llave"
export const generarJwt = (uid , nombre) =>{
    return  new Promise( (resolve, reject) =>{
=======
const secret = "mi_llave"
export const generarJwt = (uid, nombre) => {
    return new Promise((resolve, reject) =>{
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
        const payload = {
            uid,
            nombre
        }

<<<<<<< HEAD
        jwt.sign(payload, secret, {expiresIn : "2h"}, 
            (err, token) =>{
                if(err){
                    console.log(err)
                    reject("no se generó el token")
                }

                resolve(token)

            }
        )
    })

=======
        jwt.sign(payload, secret, {expiresIn: "2h"}, 
            (err, token) => {
                if (err) {
                    console.log (err)
                    reject("No se pudo generar el Token")
                }

                resolve(token)
            }
        )
    })
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
}