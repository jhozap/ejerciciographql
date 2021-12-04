<<<<<<< HEAD
import {Schema, model} from "mongoose";
const CursoSchema = Schema({
    nombre : {type : String, required : true},
    lenguajes : [{
        lenguaje : String
    }],
    fecha : {type : String,  required : true},
   
    
})
export default  model ("Curso", CursoSchema);
=======
import { Schema, model } from "mongoose";
const CursoSchema = Schema({
    nombre: { type: String, required: true },
    lenguajes: [{
        lenguaje: String
    }],
    fecha: { type: String, required: true },
})
export default model("Curso", CursoSchema);
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
