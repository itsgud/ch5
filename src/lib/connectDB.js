import mongoose from "mongoose";

export default async ()=>{
    try{
        const DB_OPTIONS={
            dbName:process.env.DBNAME,
            user:process.env.DBUSERNAME,
            pass:process.env.DBPASSWORD,
            authSource: process.env.DBAUTHSOURCE
        }
        await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS)
        console.log("CONNECTED SUCCESSFULLY.....");

    }catch(error){
            console.log("something wrong with mongodb conntection");
            console.log("error is :   ",error);
    }
}