import React from 'react'

function FeatureItem({icon, title, description}) {
  return (
    <div className='bg-gold p-8 rounded-2xl flex flex-col items-center md:hover:scale-105 md:transition md:duration-200 gap-4 lg:p-10 lg:gap-6'>
      <img src={`/assets/images/${icon}.png`} className='w-20 lg:w-24' alt="" />
      <h3 className='text-primary font-serif text-3xl lg:text-4xl'>{title}</h3>
      <p className='mt-4 text-primary sm:max-w-xl text-xl sm:text-2xl lg:text-3xl md:max-w-none'>
        {description}
      </p>
    </div>
  );
}



export default FeatureItem