import React from 'react'
import { PostForm, Homepage, NotFoundPage } from './pages'
import { Routes, Route } from 'react-router-dom'
import { PostProvider } from './context/postContext'

const App = () => {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='px-10 container m-auto'>
        <PostProvider>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/new' element={<PostForm/>} />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
        </PostProvider>
      </div>
    </div>
    
  )
}

export default App