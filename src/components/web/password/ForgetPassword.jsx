import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DevTool } from '@hookform/devtools';
import axios from "axios"
import * as yup from "yup"
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { UserContext } from '../context/User';
function ForgetPassword() {
    const navigate=useNavigate();
    const form = useForm({mode:"all",   })
    const { register, control, handleSubmit,watch, formState: { errors,isDirty,isValid }, } = form
  let {setUserToken}=useContext(UserContext)

    const onSubmit =  async users => {
        console.log("Form users", users)
     const {data}= await axios.patch("https://ecommerce-node4.vercel.app/auth/sendcode",users)
    console.log( data)
     if(data.message=='success'){
      
      form.reset();
        toast.success('Send Code succesfully.', {
          position: "top-left",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          navigate('/resetpassword')
        }
     
    
      }
      const onError = (errors) => {
        console.log("Form errors", errors)
      }
  return (
    <div className='container p-5'>
        <Form className='px-5 pt-5' onSubmit={handleSubmit(onSubmit,onError)} noValidate>
          <h1>Login Page</h1>
         
         
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
  
         
           <Button className="btn btn-warning" type="submit" disabled={!isValid}>
            Send Code
          </Button>
          <DevTool control={control} />
        </Form>
        </div>
  )
}

export default ForgetPassword