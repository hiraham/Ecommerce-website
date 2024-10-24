import React from 'react'

const Carousel = () => {
  return (
    <div>
      <section className='bg-gradient-to-r from-black to-slate-700'>
       <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>

      <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-400'>
        <a href=''
        className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
        <img src='./pizza.jpg'
        alt='pizza'
        className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
       <div className='absolute inset-0 bg-gradient-to-b from-slate-900/25 to-900/5'>
       </div>
       <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-3 xs:text-xl md:text-0xl'>
        classic bites(&quot;)
       </h3>
       </a>
       </div>


      

       <div className=' grid gap-4 grid-col-2 sm:col-span-1 md:col-2 lg:grid-cols-2'>
        <a href=''
        className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
        <img src='./O.jpg'
        alt='pizza'
        className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
       <div className='absolute inset-0 bg-gradient-to-b from-slate-900/25 to-900/5'>
       </div>
       <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-3 xs:text-xl md:text-0xl'>
        special pizza(&quot;)
       </h3>
       </a>
       <a href=''
       className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
        <img src='./R.jpg'
        alt='pizza'
        className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
        <div className='absolute inset-0 bg-gradient-to-b from-slate-900/25 to-900/5'>
       </div>
       <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-3 xs:text-xl md:text-0xl'>
        tandori pizza(&quot;)
       </h3>
       </a>
       </div>

       <div className='col-span-3 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-400'>
        <a href=''
        className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
          <img src="./s.png"
          alt="pizza"
          className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
          <div className='absolute inset-0 bg-gradient-to-b from-slate-900/25 to-900/5'>
          </div>
          <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-3 xs:text-xl md:text-0xl'>
           yummy pizza(&quot;)
          </h3>
        </a>
       </div>


       <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-400'>
        <a href=''
        className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
          <img src="./pi.jpg"
          alt="pizza"
          className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
          <div className='absolute inset-0 bg-gradient-to-b from-slate-900/25 to-900/5'>
          </div>
          <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-3 xs:text-xl md:text-0xl'>
           tandori pizza(&quot;)
          </h3>
        </a>
       </div>

       <div className=' grid gap-4 grid-col-2 sm:col-span-1 md:col-2 lg:grid-cols-2'>
        <a href=''
        className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
        <img src='./mini.jpg'
        alt='pizza'
        className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
       <div className='absolute inset-0 bg-gradient-to-b from-slate-900/25 to-900/5'>
       </div>
       <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-3 xs:text-xl md:text-0xl'>
        mini pizza(&quot;)
       </h3>
       </a>
       <a href=''
       className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
        <img src='./pizza.jpg'
        alt='pizza'
        className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
        <div className='absolute inset-0 bg-gradient-to-b from-slate-900/25 to-900/5'>
       </div>
       <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-3 xs:text-xl md:text-0xl'>
        tikka pizza(&quot;)
       </h3>
       </a>
       </div>
     


       <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-400'>
        <a href=''
        className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
          <img src="./t.jpg"
          alt="pizza"
          className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
          <div className='absolute inset-0 bg-gradient-to-b from-slate-900/25 to-900/5'>
          </div>
          <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-3 xs:text-xl md:text-0xl'>
           classic pizza(&quot;)
          </h3>
        </a>
       </div>
       </div>
     </div>
    </section>
    </div>
  )
}

export default Carousel;
