import connectDB from "@/lib/connectDB"
import PostModel from "@/models/posts"

const create=async (FormData)=>{
    'use server'
    await connectDB()
    const result =await PostModel.create({
        title: FormData.get('title'),
        body:FormData.get('body'),
    })
      console.log("result is : ",result);   

}
const PostData2 = () => {
      
  return (
    
    
    <form action={create} >
        Title: <input type='text' name='title'   className='text-black p-2' /> <br/><br/>
        body: <input type='text' name='body'  className='text-black p-2' />
        <br/><br/>
        <button type='submit' className='p-2 bg-rose-600'>Submit </button>
    </form>
  )
}

export default PostData2