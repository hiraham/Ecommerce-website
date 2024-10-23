import React from 'react'

const Banner = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7'>
      Banner
      <div className='obsolute inset-0 opacity-20'>
        <img className='w-full h-60 object-cover'
         src='./t.jpg'
          alt='delicious pizza banner' 
          />
      </div>
           <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
            <h2 className='text-white sm:text-5xl font-b mb-4'>
               Discover our classic Pizza
            </h2>
            <p className='text-white text-lg text-center mb-6 max-w-xl'>
              Shop Now for Exclusive Pizza Discount!
            </p>
            <button
            type="button"
            className='bg-amber-500 text white text-sm font-semibold PY-8 px-8 rounded-full shadow-lg hover:bg-blue-600 transition-transform duration-300'>
              Exciting Deal Launch AT 12PM
            </button>
           </div>



    </div>
  )
}

export default Banner


