import React from 'react'
import {  Formik, Form, Field  } from 'formik'
import { usePost } from '../context/postContext'
import {  useNavigate } from 'react-router-dom'

export const PostForm = () => {

  const { createPost } = usePost()
  const navigate = useNavigate()

  return (
    <div>
      <Formik initialValues={{
        title: '',
        description: ''
      }}
      onSubmit={(values, actions) => {
        createPost(values)
      }}
      >
        {({ handleSubmit }) => (
           <Form onSubmit={handleSubmit}>
             <Field name="title" placeholder="title" />
             <Field name="description" placeholder="description" />
             <button type="submit">Save</button>
           </Form>
        )}  
      </Formik>

    </div>
  )
}

