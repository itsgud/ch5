import connectDB from "@/lib/connectDB";
import PostModel from "@/models/posts";

import { connect } from "mongoose";


export default async function GetData2(){
    await connectDB()
    const allPosts=await PostModel.find()

    // const allPosts=await getData()
    console.log("-------------------------------")
    console.log(allPosts);
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24" >
            {/* {
                allPosts.result.map((post,i)=>(
                    <div key={i}> </div>
                ))
            } */}

{
                Array.isArray(allPosts) ? (
                    allPosts.map((post, i) => (
                        <div key={i}> 
                        <h1 className="text-red-500">  {post.title} </h1> <p> {post.body} </p>  
                        
                        </div> // Example usage of post data
                    ))
                ) : (
                    <p>No posts available</p>
                )
            }
        </main>
    )
}