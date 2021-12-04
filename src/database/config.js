import mongoose from "mongoose";
<<<<<<< HEAD
export const dbConnection = async () =>{
    try {
        await mongoose.connect("mongodb+srv://mateosoto:verde23@ensayo.nv4qi.mongodb.net/graphql2");
        console.log("base conectada")
        
    } catch (error) {
        console.log(error)
        
    }
}
=======
export const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://misiontic2022_1:SoluWeb2022@cluster0.rjlj0.mongodb.net/graphql2");
        console.log("base conectada")

    } catch (error) {
        console.log(error)

    }
}
>>>>>>> 7ee9dd6ce4afb09bc98956d5eb3092eddaff9468
