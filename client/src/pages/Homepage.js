import { useEffect } from "react"
import { usePost } from "../context/postContext"

export const Homepage = () => {
  
  const  { getPost, posts } = usePost()
 
  useEffect(() => {
    getPost()
  },[])

  return (
    <div className="text-white">
      {posts.map(post => (
        <div key={post._id}>
          {post.title}
        </div>
      ))}
    </div>
  )
}

