import React, { useRef } from 'react'

const Navbar = () => {

  const btns = useRef()
  const handlerHidenn = () => {
    const className = btns.current.classList
    className.toggle("hidden")

  }


  return (
    <nav className='px-5 md:px-16 text-sm'>
      {/* button */}
      <div className='flex items-center  md:py-4 py-2 '>
        <div className='flex items-center w-2/3'>
          <svg className='md:mx-4' preserveAspectRatio="xMidYMid meet" data-bbox="29.9 29.6 139.9 140" viewBox="29.9 29.6 139.9 140" height="25" width="25" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="svgcid--53l6ms-tdfc5z">
            <g>
              <path fill="#010203" d="M51.7 47.1c0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9 0-6.02 4.88-10.9 10.9-10.9 6.02 0 10.9 4.88 10.9 10.9z" data-color="1"></path>
              <path fill="#010203" d="M114.1 47.1c0 9.665-7.835 17.5-17.5 17.5s-17.5-7.835-17.5-17.5 7.835-17.5 17.5-17.5 17.5 7.835 17.5 17.5z" data-color="1"></path>
              <path fill="#010203" d="M169.8 47.1c0 9.665-7.835 17.5-17.5 17.5s-17.5-7.835-17.5-17.5 7.835-17.5 17.5-17.5 17.5 7.835 17.5 17.5z" data-color="1"></path>
              <path fill="#010203" d="M51.7 99.6c0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9 0-6.02 4.88-10.9 10.9-10.9 6.02 0 10.9 4.88 10.9 10.9z" data-color="1"></path>
              <path fill="#010203" d="M114.1 99.6c0 9.665-7.835 17.5-17.5 17.5s-17.5-7.835-17.5-17.5 7.835-17.5 17.5-17.5 17.5 7.835 17.5 17.5z" data-color="1"></path>
              <path fill="#010203" d="M169.8 99.6c0 9.665-7.835 17.5-17.5 17.5s-17.5-7.835-17.5-17.5 7.835-17.5 17.5-17.5 17.5 7.835 17.5 17.5z" data-color="1"></path>
              <path fill="#010203" d="M51.7 152.1c0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9 0-6.02 4.88-10.9 10.9-10.9 6.02 0 10.9 4.88 10.9 10.9z" data-color="1"></path>
              <path fill="#010203" d="M114.1 152.1c0 9.665-7.835 17.5-17.5 17.5s-17.5-7.835-17.5-17.5 7.835-17.5 17.5-17.5 17.5 7.835 17.5 17.5z" data-color="1"></path>
              <path fill="#010203" d="M163.2 152.1c0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9 0-6.02 4.88-10.9 10.9-10.9 6.02 0 10.9 4.88 10.9 10.9z" data-color="1"></path>
            </g>
          </svg>
          <h1 className='font-medium text-xl md:text-2xl'>
            Poly
          </h1>
        </div>
        <div className='flex flex-row-reverse md:flex-row'>
          <button className='md:hidden mx-5' onClick={handlerHidenn}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="25" height="25"
              viewBox="0 0 24 24"
            ><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path></svg>
          </button>

          <div href={btns} className='hidden md:flex items-center'>
            <a className='px-4' href="">Product</a>
            <a className='px-4' href="">About</a>
            <a className='px-4' href="">Parthers</a>
          </div>
          <a className='w-2/3 py-2' href="">
            <button className='rounded-full
              bg-black text-white  hover:bg-white hover:text-black'>
              Get a Demo
            </button>
          </a>
        </div>
      </div>



    </nav>
  )
}

export default Navbar