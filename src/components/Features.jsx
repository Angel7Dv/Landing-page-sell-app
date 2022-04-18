import React, { useEffect } from 'react'


const Features = () => {



    const feactures = ["01. Fast & Agile", "02. Cost-Effective", "03. Real-Time Analytics"]

    return (
        <div className='flex flex-col mx-52 justify-center my-72'>

            <h1 className='mb-16 font-bold text-5xl text-blue-600'>Data You Can Trust</h1>


            <div className='flex justify-between space-x-3'>

                <div className='w-2/4 flex flex-col space-y-8'>

                    {feactures.map((e, index) => (


                        <div key={index} 
                        className=' w-5/6
                        -ml-60 translate-x-60 transition duration-[1500ms]'>
                            
                            <h3 className='font-bold text-3xl my-6'>
                                {e}
                            </h3>
                            <p >
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            </p>
                        </div>
                    ))}


                </div>
                <div className='h-full rounded-4xl bw-wite p-4 border border-blue-600'>
                    <img height={300} src="img/Phone.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Features