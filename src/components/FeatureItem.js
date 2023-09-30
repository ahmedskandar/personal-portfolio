import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FeatureItem({icon, title, description}) {
  return (
    <div className='bg-gold p-8 rounded-2xl flex flex-col items-center md:hover:scale-105 md:transition md:duration-200 gap-4 lg:p-10 lg:gap-6'>
      <img src={`/assets/images/${icon}.png`} className='w-20 lg:w-24' alt="" />
      <h3 className='text-primary font-serif text-3xl lg:text-4xl'>{title}</h3>
      <p className='mt-4 sm:max-w-xl text-lg md:text-xl lg:text-2xl md:max-w-none'>
        {description}
      </p>
    </div>
  );
}

//ATTRIBUTION
{/* <div>
  Icons made by
  <a href="https://www.flaticon.com/authors/ongicon" title="Ongicon">
    Ongicon
  </a>
  from
  <a href="https://www.flaticon.com/" title="Flaticon">
    www.flaticon.com'
  </a>
</div>; */}

{/* <div>
  
  Icons made by
  <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
    
    Freepik
  </a>
  from
  <a href="https://www.flaticon.com/" title="Flaticon">
    www.flaticon.com'
  </a>
</div>; */}

{/* <div>
  
  Icons made by
  <a href="https://www.freepik.com" title="Freepik">
    
    Freepik
  </a>
  from
  <a href="https://www.flaticon.com/" title="Flaticon">
    www.flaticon.com'
  </a>
</div>; */}

export default FeatureItem