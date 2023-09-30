import React from 'react'

function Input({placeholder, className}) {
  return (
    <input
      type="text"
      className={`p-5 text-lg shadow-secondary shadow-sm  bg-transparent border-2 border-darkGold rounded-md ${className} focus:outline-none focus:border-yellow-500 lg:p-6 lg:text-2xl`}
      placeholder={placeholder}
    />
  ); 
}

export default Input