import React from 'react'
import Features from './Features'

const About = () => {

  const feactures = ["Story", "Vision", "Technology"]

  return (
    <div className='container md:my-40  mb-32' >
      <h1 className='text-blue-600 font-bold md:mb-24 my-12 text-4xl md:text-[65px]'>
        About
      </h1>
      <div className='flex flex-col md:flex-row space-y-8 md:space-x-5 md:space-y-0 '>

        {feactures.map((e, i) => (
          <div key={i} className='md:w-1/4 md:pr-10'>
            <h3 className='font-bold md:mb-6 text-2xl md:text-xl'>
              {e}
            </h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default About