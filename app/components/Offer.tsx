'use client';
import React from 'react';

type Offer = {
  title: string;
  description: string;
};

const Offer: React.FC = () => {
  const offers: Offer[] = [
    {
      title: 'Family Meal Deal',
      description: 'Get a 20% discount on your next family meal',
    },
    {
      title: 'Couple’s Deal',
      description: 'Get a free dessert with your next meal',
    },
    {
      title: 'Weekly Deal',
      description: 'Enjoy 15% off all orders this week only!',
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className='py-10'>
      <h2 className='text-4xl font-bold mb-6 text-white'>Special Offers</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {offers.map((offer, index) => (
          <button
            key={index}
            onClick={() => handleOfferClick(offer.description)}
            className='bg-white shadow-lg rounded-lg text-center p-6 hover:bg-gray-300 transition-transform'
          >
            <h3 className='text-2xl font-semibold text-gray-800'>{offer.title}</h3>
            <p className='text-red-600 mt-3'>{offer.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Offer;


