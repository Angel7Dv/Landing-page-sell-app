import React from 'react'

const Hero = () => {
  return (
    <div className='snap-center
    flex  justify-center min-h-full text-white 
    bg-cover bg-center bg-no-repeat bg-fixed w-full'
    style={{
      backgroundImage: `url("/img/hero02.webp")` 
    }}
    
    >
      <div className='flex w-4/6 flex-col justify-center my-4'>

        <div className='flex justify-center my-16 '>

          <h1 className=' text-[65px] font-bold'>Fast and Reliable
            Real-Time Data</h1>
          <div>
            <p className='text-sm'>
              I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            <div className='mt-12'>
            <a className='hover:text-blue-600 hover:bg-white text-sm border px-10 py-3 rounded-full' href="">Get Started</a>

            </div>
          </div>
        </div>
        <div className='-mb-24 border-blue-800 border bg-white mx-auto p-6 rounded-[3rem]'>

        <img src="img/Screen.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero