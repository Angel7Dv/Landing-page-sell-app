import React from 'react'

const pathers = ["Landing-page-sell-app/img/Partner01.webp", "Landing-page-sell-app/img/Partner02.webp", "Landing-page-sell-app/img/Partner03.webp",]

const Partners = () => {
  return (
    <div className=' bg-gradient-to-br from-indigo-600 to-blue-700 py-6 md:py-40 text-white'>

      <div className="flex flex-col justify-center md:flex-row md:justify-start container md:mx-48 mx-6 ">

        <div className="text-center md:text-left text-6xl font-bold border-r py-5 pr-10 border-white" >
          Partners
        </div>

        {pathers.map(e => (

          <div className='flex justify-center'>
            <img className='md:mx-14' src={e} alt="" />

          </div>
        ))}


      </div>

      <div className="border-t border-white mt-20">

        <div className="md:mx-48 mx-4 mt-20">
          <div className='flex justify-center md:justify-start mb-5'>

            <p className='pr-5 mr-5 border-r border-white'>
              Richard Heiman
            </p>
            <p>
              CEO at Mikron
            </p>
          </div>
          <p className='text-3xl text-center md:text-left font-bold md:w-2/3 '>
          “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”
          </p>
        </div>



      </div>

    </div>
  )
}

export default Partners