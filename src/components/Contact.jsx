import React from 'react'

const Contact = () => {

  const fields = [
    {
      name: "FIRST NAME*",
      type: "text"
    },
    {
      name: "LAST NAME*",
      type: "text"
    },
    {
      name: "EMAIL*",
      type: "email"
    },
    {
      name: "PHONE*",
      type: "number"
    },
    {
      name: "COMPANY",
      type: "text"
    },
    {
      name: "JOB TITLE",
      type: "text"
    }



  ]

  return (
    <div className='container md:mx-48 mx-6 mt-36'>
      <h1 className='text-blue-600 font-bold mb-24'>Request a Demo</h1>

      <h3 className='font-semibold md:w-1/3 mb-16'>Schedule a demo with one of our product consultants.</h3>

      <form action="" className='md:w-2/3 grid md:grid-cols-2 '>

        {fields.map((e, index) => (

          <div className='flex flex-col py-4 pr-20'>
            <label htmlFor="" className='px-4 md:mb-4 mb-2 text-blue-500 font-bold text-sm'>{e.name}</label>
            <input type={e.type} className='focus:outline-none focus:bg-blue-100 w-full border border-blue-600 rounded-full py-[2px] md:py-2 px-4' />
          </div>
        ))}


        <div className="md:my-16 mt-5 md:mb-0 mb-16  mr-20 flex">
          <button className='md:w-full px-16 bg-blue-600 hover:bg-gray-900  text-white  rounded-full py-2 md:px-4' >submit</button>
        </div>
      </form>


    </div>
  )
}

export default Contact