import React from 'react'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
function Page1() {
  return (
    <div className='flex flex-wrap  mt-4 justify-evenly '>
    
        <div className='bg-white lg:w-64 w-full  p-2  h-44 rounded-lg items-center justify-center flex space-x-3 m-3'>
          <div className='bg-green-200 rounded-full p-10'>
             <MonetizationOnOutlinedIcon color='success' fontSize='large'/>
          </div>
          <div className=''>
            <h1 className='text-gray-500 text-sm'>Earning</h1>
            <h1 className='text-xl font-bold'>$198K</h1>
            <h1 className='flex text-sm '> <h1 className='text-green-800 font-bold mr-1'>38.7%</h1>this month</h1>
          </div>
        </div>

        <div className='bg-white lg:w-64 w-full justify-center p-2 h-44 rounded-lg items-center flex space-x-3 m-3'>
          <div className='bg-purple-200 rounded-full p-10 text-purple-900'>
             <ArticleIcon  fontSize='large'/>
          </div>
          <div className=''>
            <h1 className='text-gray-500 text-sm'>Orders</h1>
            <h1 className='text-xl font-bold'>$198K</h1>
            <h1 className='flex text-sm '> <h1 className='text-red-900 font-bold mr-1'>7%</h1>this month</h1>
          </div>
        </div>

        <div className='bg-white lg:w-64 w-full justify-center p-2 h-44 rounded-lg items-center flex space-x-3 m-3'>
          <div className='bg-blue-200 text-blue-800 rounded-full p-10'>
             <AccountBalanceWalletIcon  fontSize='large'/>
          </div>
          <div className=''>
            <h1 className='text-gray-500 text-sm'>Balance</h1>
            <h1 className='text-xl font-bold'>$198K</h1>
            <h1 className='flex text-sm '> <h1 className='text-red-900 font-bold mr-1'>2%</h1>this month</h1>
          </div>
        </div>

        <div className='bg-white lg:w-64 w-full justify-center p-2 h-44 rounded-lg items-center flex space-x-3 m-3'>
          <div className='bg-pink-200 text-pink-900 rounded-full p-10'>
             <ShoppingBagIcon  fontSize='large'/>
          </div>
          <div className=''>
            <h1 className='text-gray-500 text-sm'>Total Sales</h1>
            <h1 className='text-xl font-bold'>$198K</h1>
            <h1 className='flex text-sm '> <h1 className='text-green-800 font-bold mr-1'>38.7%</h1>this month</h1>
          </div>
        </div>  

    </div>
  )
}

export default Page1