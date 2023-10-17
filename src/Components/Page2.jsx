import React from 'react'

function Page2() {
    return (
        <div className='lg:flex lg:space-x-4 mt-3 '>

            <div className=' flex flex-col flex-1 rounded-md  bg-white p-2 '>
                <div className='  rounded-lg mr-5'>
                    <div className='flex justify-between'>
                        <h1 className='font-bold text-xl'>Overview<h1 className='font-thin text-sm'>Monthly Earning</h1></h1>
                        <h1 className='text-sm text-gray-500'>Quaterly</h1>
                    </div>
                </div>

                <div className='flex space-x-1  text-sm justify-evenly'>
                    <div className='flex flex-col items-center justify-items-center'>
                        <div className='bg-white h-16  w-5 sm:w-10 rounded-md'> </div>
                        <div>
                            <div className='bg-blue-200 h-24 w-5 sm:w-10 rounded-md'></div>
                            <h1>Jan</h1>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-items-center'>

                        <div className='bg-blue-200 h-full w-5 sm:w-10 rounded-md'> </div>
                        <h1>Feb</h1>
                    </div>

                    <div className='flex flex-col items-center justify-items-center justify-between'>
                        <div className='bg-white  w-5 sm:w-10 rounded-md'> </div>
                        <div>
                            <div className='bg-blue-200 h-28 w-5 sm:w-10 rounded-md'> </div>
                            <h1>Mar</h1>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-items-center justify-between'>
                        <div className='bg-white h-14 w-5 sm:w-10 rounded-md'> </div>
                        <div>
                            <div className='bg-blue-200 h-24 w-5 sm:w-10 rounded-md'> </div>
                            <h1>Apr</h1>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-items-center'>
                        <div className='bg-white h-20 w-5 sm:w-10 rounded-md'> </div>
                        <div>
                            <div className='bg-blue-200 h-20 w-5 sm:w-10 rounded-md'> </div>
                            <h1>May</h1>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-items-center'>
                        <div className='bg-white h-20 w-5 sm:w-10 rounded-md'> </div>
                        <div><div className='bg-blue-200 h-20 w-5 sm:w-10 rounded-md'> </div>
                        <h1>June</h1></div>
                    </div>
                    <div className='flex flex-col items-center justify-items-center'>
                        <div className='bg-white h-20 w-5 sm:w-10 rounded-md'> </div>
                        <div><div className='bg-blue-200 h-20 w-5 sm:w-10 rounded-md'> </div>
                        <h1>July</h1></div>
                    </div>
                    <div className='flex flex-col items-center justify-items-center justify-between'>
                        
                     
                         <div className='bg-blue-700 h-full w-5 sm:w-10 rounded-md'> </div>
                         <h1>Aug</h1>
                    
                    </div>
                    <div className='flex flex-col items-center justify-items-center'>
                        <div className='bg-white h-20 w-5 sm:w-10 rounded-md'> </div>
                       <div> <div className='bg-blue-200 h-20 w-5 sm:w-10 rounded-md'> </div>
                        <h1>Sep</h1></div>
                    </div>
                    <div className='flex flex-col items-center justify-items-center'>
                        <div className='bg-white h-20 w-5 sm:w-10 rounded-md'> </div>
                       <div> <div className='bg-blue-200 h-20 w-5 sm:w-10 rounded-md'> </div>
                        <h1>Oct</h1></div>
                    </div>
                    <div className='flex flex-col items-center justify-items-center justify-between'>
                        <div className='bg-white h-2 w-5 sm:w-10 rounded-md'> </div>
                       <div> <div className='bg-blue-200 h-28 w-5 sm:w-10 rounded-md'> </div>
                        <h1>Nov</h1></div>
                    </div>
                    <div className='flex flex-col items-center justify-items-center'>
                        <div className='bg-white h-20 w-5 sm:w-10 rounded-md'> </div>
                       <div> <div className='bg-blue-200 h-20 w-5 sm:w-10 rounded-md'> </div>
                        <h1>Dec</h1></div>
                    </div>
                </div>
            </div>
            
            <div className=' rounded-md bg-white  p-6 flex items-center justify-center flex-col lg:mt-0 mt-2'>
                <h1 className='font-bold text-2xl'>Customers <h1 className='font-light text-sm '>Custobers that buy products</h1></h1>
                <div className='bg-blue-500 w-40 h-40 rounded-full p-6 mt-5'>
                    <div className='bg-white w-28 h-28 rounded-full flex items-center justify-center'>
                        <h1 className='font-bold text-xl absolute text-center'>65% <h1 className='font-normal text-sm'>New customers</h1></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2