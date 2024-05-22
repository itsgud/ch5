import connectDB from "@/lib/connectDB";
import { connect } from "mongoose";
import { NextResponse } from "next/server";
import POstModel from "@/models/posts";

export async function GET(req){
    try{
        await connectDB()
        const result=await POstModel.find()
        return NextResponse.json({"result ":result},{status:200})

    }
    catch(error){
        console.log("error on fetch data is:  ",error);
        return NextResponse.json({"msg": " Something went wrong "},{status:400})

    }

}



export async function POST(req){
    const body=await req.json()
    try{
        await connectDB()
        const result=await POstModel.create(body) 
        return NextResponse.json({"result ":result},{status:201})

    }
    catch(error){
        console.log("error on fetch data is:  ",error);
        return NextResponse.json({"msg": " Something went wrong "},{status:400})

    }

}
