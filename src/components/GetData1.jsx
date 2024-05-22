import { get } from "mongoose"

const getData=async()=> {
    const res =await fetch("http://localhost:3000/api/posts",{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    const posts=await res.json()
    // console.log("data in mongodb is ");
    // console.log("All POsts: ",posts);
    // console.log("enddddddddddd   ");
    return posts 
}


export default async function GetData1(){
    const allPosts=await getData()
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
                Array.isArray(allPosts.result) ? (
                    allPosts.result.map((post, i) => (
                        <div key={i}> {post.title} </div> // Example usage of post data
                    ))
                ) : (
                    <p>No posts available</p>
                )
            }
        </main>
    )
}