import React from 'react'
import { PostForm, Homepage, NotFoundPage } from './pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/new' element={<PostForm/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  )
}

export default App