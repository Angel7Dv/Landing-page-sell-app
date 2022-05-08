import React, { useEffect, useState } from 'react'



const Features = () => {


    const feactures = ["01. Fast & Agile", "02. Cost-Effective", "03. Real-Time Analytics"]

    return (
        <div className='container md:my-72 mt-[10rem]'>
            <div className='flex flex-col  justify-center md:mr-24 '>

                <h1 className='md:mb-16 mb-3 font-bold text-4xl md:text-[65px] text-blue-600'>Data You Can Trust</h1>

                <div className='flex flex-col md:flex-row items-center justify-center md:space-x-3'>
                    <div className='md:w-2/4 flex flex-col md:space-y-8 mb-10 md:mb-0'>

                        {feactures.map((e, index) => (
                            <div  key={index}
                                className='md:w-4/6 w-5/6 -ml-60 translate-x-60 transition duration-[1500ms]'>

                                <h3 className='font-bold my-6 text-2xl md:text-xl'>
                                    {e}
                                </h3>
                                <p >
                                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                                </p>
                            </div>
                        ))}


                    </div>
                    <div className='-ml-2  md:mx-0 md:mb-0 mb-12 h-full rounded-4xl bw-wite p-4 border border-blue-600 mx-auto '>
                        <img height={300} src="https://static.wixstatic.com/media/c837a6_f8b99621ba3942abbe98ef6b9716730d~mv2.jpg/v1/fill/w_283,h_589,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Phone.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Features