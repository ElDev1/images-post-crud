import { usePost } from "../context/postContext"
import {  VscEmptyWindow  } from 'react-icons/vsc'
import {  Link  } from 'react-router-dom'

export const Homepage = () => {
  
  const  { posts } = usePost()
  
  if(posts.length === 0) return (
    <div className="flex flex-col justify-center items-center">
      <VscEmptyWindow className="w-48 h-48 text-white" />
      <h1 className="text-white text-2xl">There are no posts</h1>
    </div>
  )

  return (
    <div className="text-white">
      
      <Link to="/new">Create New Post</Link>

      {posts.map(post => (
        <div key={post._id}>
          {post.title}
        </div>
      ))}
    </div>
  )
}

