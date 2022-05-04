import React from 'react'

const Hero = () => {
  return (
    <div className='snap-center
    flex  justify-center min-h-full text-white 
    bg-cover bg-center bg-no-repeat bg-fixed w-full'
    style={{
      backgroundImage: `url("https://static.wixstatic.com/media/84770f_96c11cebc98e403394dc617de39729e6~mv2.jpg/v1/fill/w_980,h_1020,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_96c11cebc98e403394dc617de39729e6~mv2.jpg")` 
    }}
    
    >
      <div className='flex w-4/6 flex-col justify-center my-4'>

        <div className='flex flex-col md:flex-row justify-center my-6 md:my-16'>
          <h1 className='text-4xl md:text-[65px] font-bold -mt-24 md:mt-0 '>
            Fast and Reliable
            Real-Time Data</h1>
          <div>
            <p className='text-sm mt-5 md:mt-0'>
              I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            <div className='mt-5 md:mt-12'>
            <a className='hover:text-blue-600 hover:bg-white text-sm
             border py-1 px-3 md:px-10 md:py-3 rounded-full' href="">
              Get Started
              </a>

            </div>
          </div>
        </div>
        <div className='-mb-24 border-blue-800 border bg-white mx-auto p-3 md:p-6
        md:rounded-[3rem] rounded-2xl'>

        <img src="https://static.wixstatic.com/media/84770f_b3f47a9f0f544356b9c0ed17210c47be~mv2.jpg/v1/fill/w_760,h_570,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero