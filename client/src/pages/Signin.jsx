import { Alert, Button, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import {OAuth} from '../components/OAuth';

export default function Signin() {
  const [formData,setFormData] = useState({}); //formData
  const {loading, error : errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange =(e)=>{
    setFormData({...formData, [e.target.id]:e.target.value.trim()})
  }
  //console.log(formData);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill out all fields.'));
    }
    try {
     // setLoading(true)
     dispatch(signInStart());
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      
      //This is basically because --> if the database is having a username of similar name it will throw an error. 
      if(data.success === false){
         dispatch(signInFailure(data.message));
      }
     
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
        {/* left */}
        <div className='flex-1'>
          <img className = "max-w-full mx-auto border border-gray-300 shadow-sm rounded-md p-2 " src='blog.png' alt='image'/>
        </div>
      {/* right */}
      <div className='flex-1 p-4'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <label>Your E-mail</label> 
            <TextInput
            type='email'
            placeholder='name@gmail.com'
            id = 'email' onChange={handleChange}/>
          </div>
          <div>
            <label>Your Password</label> 
            <TextInput
            type='password'
            placeholder='password'
            id = 'password' onChange={handleChange}/>
          </div>
          <Button gradientDuoTone= "purpleToPink" type='submit' disabled ={loading}>{loading ? (
            <>
            <Spinner size= 'sm'/>
            <span className='pl-3'>Loading...</span>
            </>
          ) : 'Sign In'}</Button>
           <OAuth/>
        </form>
       
        <div className='flex gap-2 text-sm mt-5'>
          <span>Don't have an account ?</span>
          <Link to ="/sign-up " className='text-blue-500'>Sign Up</Link>
        </div>
        {errorMessage && (
          <Alert className='mt-5 color = faliure'>
            {errorMessage}
          </Alert>
        )}
      </div>
      </div>
    </div>
  )
}
