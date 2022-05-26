import { useState, createContext, useContext, useEffect } from 'react'
import { getPostRequest, createPostRequest, deletePostRequest, getPostsRequest } from '../api/post'

const postContext = createContext()

export const usePost = () => {
    const context = useContext(postContext);
    return context
}

export const PostProvider = ({children}) => {
    
    const [posts, setPosts] = useState([])
    
    const getPost = async () => {
        const res = await getPostRequest()
        setPosts(res.data)
    }

    const createPost = async (post) => {
        const res = await createPostRequest(post)
        setPosts([...posts, res.data])
    }

    const deletePost = async (id) => {
        await deletePostRequest(id)
        setPosts(posts.filter(post => post._id !== id))
        
    }

    const getPosts = async (id) => {
        const res = await getPostsRequest(id)
        return res.data
    }

    useEffect(() => {
        getPost()
    },[])

    return (
        <postContext.Provider value={{
            posts,
            getPost,
            createPost,
            deletePost,
            getPosts,
        }}>
            {children}
        </postContext.Provider>
    )
}