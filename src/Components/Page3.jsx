import React from 'react'

function Page3() {
  return (
    <div className='bg-white mt-2 p-3'>

      <div className='flex justify-between mb-12'>
        <span className='font-bold'>Product Sell</span>
        <div className='flex justify-between space-x-3'>
          <input className='bg-blue-50 rounded-md p-1 w-28' type="text" placeholder='Search' />
          <h1 className='bg-blue-50 rounded-md  p-1 text-sm'>Last 30 day</h1>
        </div>
      </div>

      <div>
        <div className='flex justify-between '>
          <div className=' space-x-2 items-center'>
            <img className='sm:w-20 sm:h-10 w-16  rounded-md' src="https://4kwallpapers.com/images/walls/thumbs/12661.jpg" alt="" />
            <h1 className='font-bold text-sm'>Abstract</h1>
          </div>
          <div className='space-x-5 flex'>
            <span className='text-center text-sm'><h1 className='text-sm text-gray-400'>Stock</h1>32 in stock</span>
            <span className='font-bold text-center text-sm'> <h1 className='text-sm text-gray-400'>Price</h1>$45.99</span>
            <span className='text-center text-sm'><h1 className='text-sm text-gray-400'>Total sale</h1>20</span>
          </div>
      </div>
      
        <div className='flex justify-between'>
          <div className=' space-x-2 items-center'>
            <img className='sm:w-20 sm:h-10 w-16 rounded-md' src="https://cdn2.vectorstock.com/i/1000x1000/57/61/smooth-abstract-wallpaper-vector-12285761.jpg" alt="" />
            <h1 className='font-bold text-sm'>Sarphens illustration</h1>
          </div>
          <div className='space-x-5 flex'>
            <span className='text-center text-sm'><h1 className='text-sm text-gray-400'>Stock</h1>32 in stock</span>
            <span className='font-bold text-center text-sm'> <h1 className='text-sm text-gray-400'>Price</h1>$45.99</span>
            <span className='text-center  text-sm'><h1 className='text-sm text-gray-400'>Total sale</h1>20</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Page3 