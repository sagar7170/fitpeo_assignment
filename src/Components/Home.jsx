import React, { useState } from 'react'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Avatar } from '@mui/material';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
function Home() {
    const [show, setShow] = useState(false);
    const sidebar = () => {
        setShow(!show);
    }

    return (
        <div className='flex relative'>


            <div className='fixed z-30'>

                  {/* MOBILE VIEW SIDEBAR */}
                <div className={!show ? 'hidden' : 'flex bg-blue-900 w-64 h-screen p-3 absolute z-10 flex-col justify-between '}>
                    <div className='space-y-10'>
                        <div className='text-white  flex  items-center justify-between'>
                            <div className='flex items-center space-x-2 text-2xl font-bold'>
                                <WidgetsOutlinedIcon />
                                <h1>Dashboard</h1>
                            </div>
                            <div onClick={sidebar} className=' left-52 top-1 z-20 text-red-400 text-4xl '>
                                <CloseOutlinedIcon fontSize='large ' />
                            </div>

                        </div>
                        <div className='text-white font-semibold space-y-4'>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <KeyboardCommandKeyOutlinedIcon />
                                <h1>Dashboard</h1>
                            </div>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <CheckBoxOutlinedIcon />
                                <h1>Products</h1>
                            </div>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <AccountBoxOutlinedIcon />
                                <h1>Customers</h1>
                            </div>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <PaidOutlinedIcon />
                                <h1>Income</h1>
                            </div>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <PercentOutlinedIcon />
                                <h1>Permote</h1>
                            </div>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <LiveHelpOutlinedIcon />
                                <h1>Help</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center space-x-3 bg-blue-600 rounded-md p-2'>
                        <Avatar
                            src=''
                        />
                        <span className=''>
                            <h1 className='text-base text-white font-semibold'>Shiva</h1>
                            <h1 className='text-sm text-white'>Project Manager</h1>
                        </span>
                    </div>
                </div>
                
                  {/* Desktop , tablet VIEW SIDEBAR */}
                <div className='bg-blue-900 w-64 h-screen p-3 sm:flex flex-col justify-between hidden'>
                    <div className='space-y-10'>
                        <div className='text-white text-2xl font-bold flex space-x-2 items-center'>
                            <WidgetsOutlinedIcon />
                            <h1>Dashboard</h1>
                        </div>
                        <div className='text-white font-semibold space-y-4'>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <KeyboardCommandKeyOutlinedIcon />
                                <h1>Dashboard</h1>
                            </div>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <CheckBoxOutlinedIcon />
                                <h1>Products</h1>
                            </div>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <AccountBoxOutlinedIcon />
                                <h1>Customers</h1>
                            </div>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <PaidOutlinedIcon />
                                <h1>Income</h1>
                            </div>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <PercentOutlinedIcon />
                                <h1>Permote</h1>
                            </div>
                            <div className='flex space-x-3 rounded-md p-2 hover:bg-blue-500'>
                                <LiveHelpOutlinedIcon />
                                <h1>Help</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center space-x-3 bg-blue-600 rounded-md p-2'>
                        <Avatar
                            src=''
                        />
                        <span className=''>
                            <h1 className='text-base text-white font-semibold'>Shiva</h1>
                            <h1 className='text-sm text-white'>Project Manager</h1>
                        </span>
                    </div>
                </div>
            </div>


            <div className='bg-pink-100 w-full p-4 sm:ml-64 '>

                {/* HEADER */}
                <header className='flex justify-between items-center'>
                    <h1 className='font-semibold text-lg '>Hello '👋'</h1>
                    <div className='relative'>
                        <span className='absolute top-1 left-1 text-gray-400'>
                            <SearchOutlinedIcon />
                        </span>
                        <input className='pl-7 p-1 rounded-md' type="text" placeholder='Search' />
                    </div>
                </header>
                <div onClick={sidebar} className='bg-pink-100 sm:hidden flex  '>
                    <MenuOpenOutlinedIcon fontSize='large' />
                </div>

                <Page1 />
                <Page2 />
                <Page3 />
            </div>
        </div>
    )
}

export default Home