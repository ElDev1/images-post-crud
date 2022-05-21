import { useState, createContext, useContext } from 'react'
import { getPostRequest } from '../api/post'

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

    return (
        <postContext.Provider value={{
            posts,
            getPost,
        }}>
            {children}
        </postContext.Provider>
    )
}