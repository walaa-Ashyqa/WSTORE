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
import { OrderContext } from '../context/Orders';


const schema = yup
  .object({
    userName: yup.string().required("user name is required!").min(3,"must be at least 3 char").max(20,"max char must be 20"),
    password: yup.string().required("password is required!").min(3,"must be at least 6 char").max(20,"max char must be 20"),
  });
function CreateOrder() {
    let navigate=useNavigate();
  let {userToken,setUserToken}=useContext(UserContext);
  let {order,setOrder,createOrderContext}=useContext(OrderContext);

  // if(!userToken){
  //   navigate('/home');
  // }
    const form = useForm({mode:"all",   })
    
    const { register, control, handleSubmit,watch, formState: { errors,isDirty,isValid }, } = form

    const onSubmit =  async order => {
      console.log("Form order", order);
      setOrder(order);
      const token=localStorage.getItem("userToken");
      console.log(token)
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/order`,order,
      {headers:{Authorization:`Tariq__${token}`}});
   console.log( data);
   if(data.message=='success'){
    form.reset();
      toast.success('create order succesfully.', {
        position: "top-left",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        navigate('/profile')
      }
   
  
    }
    const onError = (errors) => {
      console.log("Form errors", errors)
    }
  return (
    <>
    <div className='container p-5'>
          <Form className='px-5 pt-5' onSubmit={handleSubmit(onSubmit,onError)} noValidate>
            <h1>Order page</h1>
           
           
            <Form.Group className="mb-3 w-75" >
          <Form.Label>Coupon Name</Form.Label>
          <Form.Control type="text" placeholder="Enter coupon" id='couponName' {...register(
            "couponName",
            {
              required: {
                value: false,
                message: "The coupon is not reguired",           
              },
             
              maxLength:  {
                value: 20,
                message: "max char must be 20",         
              },
              minLength: {
                value: 3,
                message: "must be at least 3 char",     
              },
             
            }

          )} />
          <Form.Text className='text-danger px-4'>
            {errors.couponName?.message}
            {console.log(errors.couponName?.message)}
          </Form.Text>

        </Form.Group>
    
        <Form.Group className="mb-3 w-75" >
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" id='address' {...register(
            "address",
            {
              required: {
                value: true,
                message: "The address is reguired",           
              },
             
              maxLength:  {
                value: 20,
                message: "max char must be 20",         
              },
              minLength: {
                value: 2,
                message: "must be at least 3 char",     
              },
             
            }

          )} />
          <Form.Text className='text-danger px-4'>
            {errors.address?.message}
            {console.log(errors.address?.message)}
          </Form.Text>

        </Form.Group>

            <Form.Group className="mb-3 w-75" >
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="phone" id='phone'  {...register("phone",
                {
                  required: {
                    value: true,
                    message: "The phone is reguired",
                   
                  },
                  maxLength:  {
                    value: 15,
                    message: "max char must be 15",
                   
                  },
                  minLength: {
                    value: 6,
                    message: "must be at least 6 char",
                   
                  },
                }
              
              )} />
              <Form.Text className='text-danger  px-4  '>
                {errors.password?.message}
                {console.log(errors.password?.message)}
              </Form.Text>
            </Form.Group>
            
            <Button className="btn btn-warning mt-4" type="submit" disabled={!isValid}>
              Create order
            </Button>
            <DevTool control={control} />
          </Form>
          </div>
        </>
  )
}

export default CreateOrder