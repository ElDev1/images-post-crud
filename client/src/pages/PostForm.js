import React from 'react'
import {  Formik, Form, Field, ErrorMessage  } from 'formik'
import { usePost } from '../context/postContext'
import {  useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

export const PostForm = () => {

  const { createPost } = usePost()
  const navigate = useNavigate()

  return (
    <div>
      <Formik initialValues={{
        title: '',
        description: ''
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('title is required'),
        description: Yup.string().required('description is required')
      })}
      onSubmit={async (values, actions) => {
        await createPost(values)
        navigate('/')
      }}
      >
        {({ handleSubmit }) => (
           <Form onSubmit={handleSubmit}>
             <Field name="title" placeholder="title" className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full ' />
             <ErrorMessage component='p' className='text-red-400 text-sm' name='title' />
             <Field name="description" placeholder="description" className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full '/>
             <ErrorMessage component='p' className='text-red-400 text-sm' name='description' />
             <button type="submit">Save</button>
           </Form>
        )}  
      </Formik>

    </div>
  )
}

