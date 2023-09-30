import React from 'react'

function Input({placeholder, className}) {
  return (
    <input
      type="text"
      className={`p-5 text-xl shadow-secondary shadow-sm  bg-transparent border-2 border-darkGold rounded-md ${className} focus:outline-none focus:border-yellow-500 md:text-2xl lg:p-6 lg:text-3xl`}
      placeholder={placeholder}
    />
  ); 
}

export default Input