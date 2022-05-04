import React from 'react'

const Section = () => {
  return (
    <div className='
    bg-cover bg-center bg-no-repeat bg-fixed w-full 
    flex justify-center min-h-full text-white
    '
    style={{
      backgroundImage: `url("Landing-page-sell-app/img/hero02.webp")` 
    }}
    >
      {/* <img className='bg-scream' src="img/hero02.webp" alt="" /> */}


      <div className='flex justify-center items-center w-2/4 px-16 flex-col text-center mt-36'>

        <h1 className='text-5xl font-bold px-10'>
          Understand Your
          Users Better</h1>
        <p className='text-md font-normal mt-12'>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
         </p>
        <div className='mt-12'>
          <a className='hover:text-blue-600 hover:bg-white text-sm border px-10 py-3 rounded-full' href="">Get a Demo</a>

        </div>
        <div className='flex justify-center my-16 '>

        </div>

      </div>
    </div>
  )
}

export default Section