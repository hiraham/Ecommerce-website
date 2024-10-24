import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCardGrid = () => {
  const productImages = [
    "/a.png",
    "/O.jpg",
    "/c.png",
    "/abc.png",
    "/mini.jpg",
    "/bcd.png",
    "/R.jpg",
    "/t.jpg",
    "/s.png",
  ];

  return (
    <div className="relative text-center p-10 bg-gradient-to-r from-yellow-500 to-red-500">
      
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/abc.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: 0,
          opacity: 0.2,
        }}
      />
      
      <h1 className='font-bold text-4xl mb-4 text-white z-10 relative'>
        RedOven Delicious Pizzas
      </h1>
      <p className='text-xl text-white z-10 relative mb-6'>
        Order now and enjoy the best pizza in town!
      </p>

      <section
        id='projects'
        className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-10 mt-10 mb-5'
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className='w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative'
          >
            <a href='#'>
              <img
                src={productImages[index]}
                alt={`Pizza ${index + 1}`}
                width={300}
                height={300}
                className="h-75 w-72 object-cover rounded-t-xl"
              />
            </a>
            <div className='px-4 py-3 w-72'>
              <span className='text-slate-500 mr-3 uppercase text-xs'>Category</span>
              <p className='text-lg font-bold text-red-700 truncate block capitalize'>special pizzas</p>
              <div className='flex items-center'>
                <p className='text-lg font-semibold text-black my-3 cursor-auto'>1499</p>
                <del>
                  <p className='text-sm text-blue-200 cursor-auto ml-2'>2000</p>
                </del>
                <div className='ml-auto'>
                  <FaShoppingCart className='w-5 h-5 text-blue-500' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <h1 className='font-bold text-4xl mt-10 text-white z-10 relative'>
        Craving More?
      </h1>
      <p className='text-xl text-white z-10 relative'>
        Place your order and enjoy fresh, hot pizzas delivered to your doorstep.
      </p>
    </div>
  );
}

export default ProductCardGrid;
