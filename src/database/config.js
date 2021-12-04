import mongoose from "mongoose";
export const dbConnection = async () =>{
    try {
        await mongoose.connect("mongodb+srv://Prueba:yWQx7KGHM6YsSGmy@ventas-c3.s2ski.mongodb.net/gpl");
        console.log("base conectada")
        
    } catch (error) {
        console.log(error)
        
    }
}
