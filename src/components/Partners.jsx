import React from 'react'


const pathers = [
  "https://static.wixstatic.com/media/c837a6_bbd8a321092549b8adecaa747ab7fa67~mv2.png/v1/crop/x_78,y_115,w_667,h_542/fill/w_115,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Velo_City-01.png",
  "https://static.wixstatic.com/media/c837a6_2e80fea635a64b8796b88461f274ab93~mv2.png/v1/crop/x_0,y_193,w_834,h_478/fill/w_148,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Pome_Grante-01.png",
  "https://static.wixstatic.com/media/c837a6_a9a0649774bf4bf99ead9115932c55d3~mv2.png/v1/crop/x_0,y_141,w_834,h_448/fill/w_162,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Mikron-01.png",]

const Partners = () => {
  return (
    <div className=' bg-gradient-to-br from-indigo-600 to-blue-700 py-6 md:py-40 text-white'>

      <div className="flex flex-col justify-center md:flex-row md:justify-start md:container">

        <div className="text-center md:text-left text-6xl font-bold border-r py-5 md:pr-10 border-white" >
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
          <p className='text-3xl text-center md:text-left font-bold md:w-2/3 md:my-0 my-16'>
          “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”
          </p>
        </div>



      </div>

    </div>
  )
}

export default Partners