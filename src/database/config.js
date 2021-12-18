import mongoose from "mongoose";



export const dbConnection = async () => {
    const { MONGO_DB, MONGO_DB_TEST, NODE_ENV } = process.env;

    const connectionString = NODE_ENV === 'test' ? MONGO_DB_TEST : MONGO_DB
    // console.log(connectionString);
    try {
        await mongoose.connect(connectionString);
        console.log("base conectada")

    } catch (error) {
        console.log(error)

    }
}
