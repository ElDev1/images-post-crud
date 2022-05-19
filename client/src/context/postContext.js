import { useState, createContext, useContext } from 'react'

const postContext = createContext()

export const usePost = () => {
    const context = useContext(postContext);
    return context
}

export const PostProvider = ({children}) => {
    
    const [post, setPost] = useState([])
    
    return (
        <postContext.Provider value={{
            post: post,
        }}>
            {children}
        </postContext.Provider>
    )
}