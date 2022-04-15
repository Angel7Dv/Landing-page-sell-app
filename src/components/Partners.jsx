import React from 'react'

const pathers = ["img/Partner01.webp", "img/Partner02.webp", "img/Partner03.webp",]

const Partners = () => {
  return (
    <div className=' bg-gradient-to-br from-indigo-600 to-blue-700 py-40 text-white'>

      <div className="flex container mx-48 ">

        <div className="text-6xl font-bold border-r py-5 pr-10 border-white" >
          Partners
        </div>

        {pathers.map(e => (

          <div>
            <img className='mx-14' src={e} alt="" />

          </div>
        ))}


      </div>

      <div className="border-t border-white mt-20">

        <div className="mx-48 mt-20">
          <div className='flex mb-5'>

            <p className='pr-5 mr-5 border-r border-white'>
              Richard Heiman
            </p>
            <p>
              CEO at Mikron
            </p>
          </div>
          <p className='text-3xl font-bold w-2/3 '>
          “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”
          </p>
        </div>



      </div>

    </div>
  )
}

export default Partners