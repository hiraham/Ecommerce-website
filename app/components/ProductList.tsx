import React from 'react';

const products = [
  {
    id: 1,
    title: "Classic Pizza",
    category: "fixing",
    price: "1000",
    imageUrl: "./a.png",
    bgColor: "bg-amber-500",
  },
  {
    id: 2,
    title: "Mexican Pizza",
    category: "fixed",
    price: "1200",
    imageUrl: "./bcd.png",
    bgColor: "bg-amber-400",
  },
  {
    id: 3,
    title: " Pizza",
    category: "fixed",
    price: "1500",
    imageUrl: "./cde.png",
    bgColor: "bg-amber-300",
  },
  {
    id: 4,
    title: " Pizza",
    category: "fixed",
    price: "1000",
    imageUrl: "./c.png",
    bgColor: "bg-amber-200",
  },
  {
    id: 5,
    title: "spicy Pizza",
    category: "fixed",
    price: "1200",
    imageUrl: "./s.png",
    bgColor: "bg-amber-100",
  },
];

const ProductList = () => {
  return (
    <div className='p-1 flex flex-wrap items-center justify-center mb-4'>
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-4 scale-150 group-hover:scale-105 transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              x="8"
              y="107.45"
              width="152"
              rx="8"
              height="107.48"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className='relative p-10 flex items-center justify-center grow hover:scale-110 transition-transform'>
            <div
              className='absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
              style={{
                background: 'radial-gradient(circle, black, transparent 50%)',
                transform: 'rotate3d(0, 0, 3, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2,
              }}
            />
            <img className='relative w-48' src={product.imageUrl} alt={product.title} />
          </div>
        
          <div className='relative text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>{product.category}</span>
            <div className='flex justify-between'>
              <span className='block font-semibold text-xl'>{product.title}</span>
              <span className='block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center'>
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;


