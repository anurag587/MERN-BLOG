import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Dropdown } from 'flowbite-react'
import { Avatar } from 'flowbite-react'

export default function Header() {
    const path = useLocation().pathname;
    const currentUser = useSelector((state)=>state.user.currentUser)
    console.log(currentUser)
  return (
    <Navbar className='border-b-2'>
        <Link to  = "/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Anurag's Blog</span>
        </Link>
        <form>
            <TextInput
            className='hidden lg:inline' //jab bhi screen choti hogi search icon ko hide krdo
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            />
        </form>
        {/* jab bhi screen choti hogi button ko show krdo search vale */}
        <Button className='w-12 h-10  lg:hidden' color = 'gray' pill>
            <AiOutlineSearch/>
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                    <FaMoon/>
                </Button>
                {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item >Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link active ={path === '/'} as={"div"}>
                    <Link to='/'>Home</Link>
                    {/* we cannot use two anchor tags i.e one inside another it will throw an error in comsole so to avoid it we use as={"div"} */}
                </Navbar.Link>
                <Navbar.Link active ={path === '/about'} as={"div"}>
                    <Link to='/about'>About</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
  )
}
