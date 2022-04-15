import React from 'react'

const About = () => {
  return (
    <div className='container mx-52  my-40 ' >
      <h1 className='text-5xl text-blue-600 font-bold mb-24'>

        About
      </h1>
      <div className='flex space-x-5'>
        <div className='w-1/4 pr-10 '>
          <h3  className='text-3xl font-bold mb-6'>
          Story
          </h3>
          <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
          </p>
        </div>
        <div className='w-1/4 pr-10 '>
          <h3  className='text-3xl font-bold mb-6'>
          Vision
          </h3>
          <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
          </p>
        </div>
        <div className='w-1/4 pr-10 '>
          <h3  className='text-3xl font-bold mb-6'>
          Technology
          </h3>
          <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
          </p>
        </div>
      </div>

    </div>
  )
}

export default About