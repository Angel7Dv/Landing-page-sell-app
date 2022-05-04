import React from 'react'

const Contact = () => {
  return (
    <div className='container md:mx-48 mx-6 mt-36'>
      <h1 className='text-blue-600 font-bold text-6xl mb-24'>Request a Demo</h1>

      <h2 className='text-3xl font-semibold md:w-1/3 mb-16'>Schedule a demo with one of our product consultants.</h2>

      <form action="" className='md:w-2/3 grid grid-cols-2 '>
        <div className='flex flex-col py-4 pr-20'>
          <label htmlFor="" className='px-4 mb-4 text-blue-500 font-bold text-sm'>FIRST NAME*</label>
          <input type="text" className='focus:outline-none focus:bg-blue-100 w-full border border-blue-600 rounded-full py-2 px-4' />
        </div>
        <div className='flex flex-col py-4 pr-20'>
          <label htmlFor="" className='px-4 mb-4 text-blue-500 font-bold text-sm'>LAST NAME*</label>
          <input type="text" className='focus:outline-none focus:bg-blue-100 w-full border border-blue-600 rounded-full py-2 px-4' />
        </div>
        <div className='flex flex-col py-4 pr-20'>
          <label htmlFor="" className='px-4 mb-4 text-blue-500 font-bold text-sm'>EMAIL*</label>
          <input type="text" className='focus:outline-none focus:bg-blue-100 w-full border border-blue-600 rounded-full py-2 px-4' />
        </div>
        <div className='flex flex-col py-4 pr-20'>
          <label htmlFor="" className='px-4 mb-4 text-blue-500 font-bold text-sm'>PHONE</label>
          <input type="text" className='focus:outline-none focus:bg-blue-100 w-full border border-blue-600 rounded-full py-2 px-4' />
        </div>
        <div className='flex flex-col py-4 pr-20'>
          <label htmlFor="" className='px-4 mb-4 text-blue-500 font-bold text-sm'>COMPANY</label>
          <input type="text" className='focus:outline-none focus:bg-blue-100 w-full border border-blue-600 rounded-full py-2 px-4' />
        </div>
        <div className='flex flex-col py-4 pr-20'>
          <label htmlFor="" className='px-4 mb-4 text-blue-500 font-bold text-sm'>JOB TITLE</label>
          <input type="text" className='focus:outline-none focus:bg-blue-100 w-full border border-blue-600 rounded-full py-2 px-4' />
        </div>

        <div className="my-16 mr-20">

        <button className='w-full bg-blue-600 hover:bg-gray-900  text-white  rounded-full py-2 px-4' >submit</button>
        </div>
      </form>


    </div>
  )
}

export default Contact