import { useState, createContext, useContext, useEffect } from 'react'
import { getPostRequest, createPostRequest } from '../api/post'

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
        console.log(res)
    }

    useEffect(() => {
        getPost()
    },[])

    return (
        <postContext.Provider value={{
            posts,
            getPost,
            createPost,
        }}>
            {children}
        </postContext.Provider>
    )
}