import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
        {/* left */}
        <div className='flex-1'>
          <Link to="/" className=' text-4xl sm:text-xl font-bold dark:text-white '>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Anurag's Blog</span>
          </Link>
          <p className='p-2 mr-2'>
          Sign up for the new ideas.
          </p>
        </div>
      {/* right */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
          <div>
            <label>Your Username</label> 
            <TextInput
            type='text'
            placeholder='Usename'
            id = 'username' />
          </div>
          <div>
            <label>Your E-mail</label> 
            <TextInput
            type='text'
            placeholder='name@gmail.com'
            id = 'email' />
          </div>
          <div>
            <label>Your Password</label> 
            <TextInput
            type='text'
            placeholder='password'
            id = 'password' />
          </div>
          <Button gradientDuoTone= "purpleToPink" type='submit'>Sign Up</Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account ?</span>
          <Link to ="/sign-in" className='text-blue-500'>Sign In</Link>
        </div>
      </div>

      </div>
    </div>
  )
}
