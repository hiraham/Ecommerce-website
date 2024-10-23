import React from 'react';
import Image from 'next/image';

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
        id='pizza-products'
        className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative'
      >
        {productImages.map((src, index) => (
          <div key={index} className="relative p-4 bg-white rounded-lg shadow-md">
            <Image
              src={src}
              alt={`Pizza ${index + 1}`}
              width={300}
              height={300}
              className="rounded-lg"
            />
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

