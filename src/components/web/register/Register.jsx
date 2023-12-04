import React from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DevTool } from '@hookform/devtools';
 
import * as yup from "yup"
const schema = yup
  .object({
    userName: yup.string().required("user name is required!").min(3,"must be at least 3 char").max(20,"max char must be 20"),
    password: yup.string().required("password is required!").min(3,"must be at least 6 char").max(20,"max char must be 20"),
  });
 


function Register() {
  const form = useForm({mode:"all",   })
  const { register, control, handleSubmit,watch, formState: { errors,isDirty,isValid }, } = form

  const onSubmit = (data) => {
    console.log("Form Submeit", data)
  }
  const onError = (errors) => {
    console.log("Form errors", errors)
  }
 //const watchValue=watch();
  return (
    <>
<div className='container p-5'>
      <Form className='px-5 pt-5' onSubmit={handleSubmit(onSubmit,onError)} noValidate>
        <h1>Create New Account</h1>
       
        <Form.Group className="mb-3 w-75" >
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter  Name" id='userName' {...register(
            "userName",
            {
              required: {
                value: true,
                message: "The user name is reguired",           
              },
             
              maxLength:  {
                value: 20,
                message: "max char must be 20",         
              },
              minLength: {
                value: 6,
                message: "must be at least 3 char",     
              },
             
            }

          )} />
          <Form.Text className='text-danger px-4'>
            {errors.userName?.message}
            {console.log(errors.userName?.message)}
          </Form.Text>

        </Form.Group>
        <Form.Group className="mb-3 w-75" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id='email' {...register(
            "email",
            {
              required: {
                  value: true,
                  message: "The email  is reguired",
                   
                }
              ,
              pattern: {
                value:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalied email format"
              },
              validate:{
              notAdmin:(fieldValue)=>{
                return fieldValue !=="admin@example.com" || 
                "Enter a defferent email address"
              },
              notBlackList:(fieldValue)=>{
                return !fieldValue.endsWith ("baddomain.com") || 
                "This domain is not supported"
              },
            
            },
          
            maxLength:  {
              value: 50,
              message: "max char must be 50",
             
            },
            minLength: {
              value: 10,
              message: "must be at least 10 char",
             
            },
             
              
              
            }
          )} />
          <Form.Text className='text-danger px-4'>
            {errors.email?.message}
            {console.log(errors.email?.message)}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 w-75" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='password'  {...register("password",
            {
              required: {
                value: true,
                message: "The password is reguired",
               
              },
              maxLength:  {
                value: 20,
                message: "max char must be 20",
               
              },
              minLength: {
                value: 6,
                message: "must be at least 6 char",
               
              },
            }
          
          )} />
          <Form.Text className='text-danger px-4  '>
            {errors.password?.message}
            {console.log(errors.password?.message)}
          </Form.Text>
        </Form.Group>

        <Button className="btn btn-warning" type="submit" disabled={!isValid}>
          Submit
        </Button>
        <DevTool control={control} />
      </Form>
      </div>
    </>
  )
}

export default Register