import { useState, createContext, useContext, useEffect } from 'react'
import { getPostRequest, createPostRequest, deletePostRequest, getPostsRequest, updatePostRequest } from '../api/post'

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

    const updatePost = async (id, post) => {
        const res = await updatePostRequest(id, post)
        setPosts(posts.map(post => post._id === id ? res.data : post))
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
            updatePost,
        }}>
            {children}
        </postContext.Provider>
    )
}