import React from 'react';

const Card = () => {
  return (
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Delicious Pizza</h2>
        <p className="text-white mb-4">
        We offer unbeatable prices for our generously sized pizzas, especially our best cheese pizza in Karachi that will leave you craving for more
        </p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-transform">
          Order Now
        </button>

        <h3 className="text-3xl font-semibold text-white mb-4 text-center">
          Coming Soon! Our Best Pizza Launches
        </h3>

        <ul className="text-white space-y-4">
          <li>
            <strong>Classic Pizza:</strong> A timeless favorite, featuring a golden, hand-tossed crust, smothered with our signature tomato sauce and topped with a generous layer of mozzarella cheese. Perfectly seasoned and baked to crispy perfection, this pizza is a simple yet delicious choice for any occasion.
          </li>
          <li>
            <strong>Mexican Pizza:</strong> This bold and spicy creation is loaded with flavors inspired by Mexican cuisine. It starts with a crispy thin crust, topped with zesty salsa, seasoned ground beef, jalapeños, black beans, and a mix of cheddar and mozzarella cheese. Finished with fresh cilantro and a drizzle of sour cream, this pizza is a fiesta of flavors.
          </li>
          <li>
            <strong>Tandoori Pizza:</strong> A fusion of Indian and Italian flavors, our Tandoori Pizza features a unique blend of tandoori chicken, red onions, bell peppers, and a tangy yogurt-based sauce. With a thin, crispy crust and a topping of melted mozzarella, this pizza is a savory, exotic delight that’s sure to impress.
          </li>
        </ul>
      </div>
        <div className='md:w-1/2 mt-6 md:mt-9'>
          <img src='./pi.jpg'
          alt="delicious pizza"
          className=' w-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'/>

        
      </div>
      
    </section>
  );
};

export default Card;


