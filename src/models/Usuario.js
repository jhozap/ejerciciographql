<<<<<<< HEAD
import {Schema, model} from "mongoose";
const UsuarioSchema = Schema({
    nombre : {type :  String, required : true},
    email : {type :  String, required : true},
    password : {type : String, required : true}
})
export default  model("Usuario", UsuarioSchema);
=======
import { Schema, model } from "mongoose"
const UsuarioSchema = Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})
export default model("Usuario", UsuarioSchema);
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
