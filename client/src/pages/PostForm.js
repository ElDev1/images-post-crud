import React, { useEffect, useState } from 'react'
import {  Formik, Form, Field, ErrorMessage  } from 'formik'
import { usePost } from '../context/postContext'
import {  Link, useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'


export const PostForm = () => {

  const { createPost, getPosts, updatePost } = usePost()
  const navigate = useNavigate()
  const params = useParams()
  const [post, setPost] = useState({
    title: '',
    description: '',
    image: null,
  })

  useEffect(() => {
    (async () => {
      if(params.id) {
        const post = await getPosts(params.id)
        setPost(post)
      }
    })()
  },[params.id])

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-zinc-800 p-10 shadow-md shadow-black'>

        <header className='flex justify-between items-center py-4 text-white'>
          <h3 className='text-xl'>New Post</h3>
          <Link to='/' className='text-gray-400 text-sm hover:text-gray-300'>Go back</Link>
        </header>

        <Formik initialValues={post}
        validationSchema={Yup.object({
          title: Yup.string().required('title is required'),
          description: Yup.string().required('description is required'),
          
        })}
        onSubmit={async (values, actions) => {
         
          if(params.id) {
            await updatePost(params.id, values)
          } else {
            await createPost(values)
          }

          navigate('/')
        }}
        enableReinitialize
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <label htmlFor='title' className='text-sm block font-bold text-gray-400 '>Title</label>
              <Field name="title" placeholder="title" className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full ' />
              <ErrorMessage component='p' className='text-red-400 text-sm' name='title' />
              <label htmlFor='description' className='text-sm block font-bold text-gray-400 '>Description</label>
              <Field component="textarea" rows={3} name="description" placeholder="description" className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full '/>
              <ErrorMessage component='p' className='text-red-400 text-sm' name='description' />
              <label htmlFor='description' className='text-sm block font-bold text-gray-400 '>Description</label>
              <input type="file" onChange={(e) => setFieldValue('image',e.target.files[0])} name='image' className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'/>
              <button type="submit" className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400'>Save</button>
            </Form>
          )}  
        </Formik>
      </div>
    </div>
  )
}

