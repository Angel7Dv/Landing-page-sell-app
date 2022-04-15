import React from 'react'

const Hero = () => {
  return (
    <div className='flex  justify-center min-h-full text-white hero '>
      <div className='flex w-4/6 flex-col justify-center my-4'>

        <div className='flex justify-center my-16 '>

          <h1 className=' text-6xl font-bold'>Fast and Reliable
            Real-Time Data</h1>
          <div>
            <p className='text-sm'>
              I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            <div className='mt-12'>
            <a className='hover:text-blue-600 hover:bg-white text-sm border px-10 py-3 rounded-full' href="">Get Started</a>

            </div>
          </div>
        </div>
        <div className='-mb-24 mx-4 border-blue-800 border bg-white mx-auto p-6 rounded-5xl'>

        <img src="img/Screen.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero