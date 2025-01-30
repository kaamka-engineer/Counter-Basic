import React, { useState } from 'react'

const Counter = () => {

const [count, setCount] = useState(0);

  const increament = function(){
    setCount(count=>{return count+1});
  }

  const decreament = function(){
    setCount(count=>count-1);
  }

  const reset = function(){
    setCount(0);
  }

  return (
    <>
      <div className='ml-56 mt-9'>
        <label 
        className='flex items-center text-4xl font-semibold px-9 py-5 text-gray-700'>Counter : <input className='ml-4  px-6 py-3 text-lg placeholder-gray-400 text-gray-800 border-2 border-red-600 rounded-lg focus outline-none focus ring-2 focus ring-red-500 transition duration-300' 
        placeholder='Counter Initial value'
        value={count}
        readOnly /></label>
        <br/>
        <button className='mt-14 ml-20 px-11 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 
        hover:shadow-lg transition duration-300' onClick={increament}>+</button>
        <button className='mt-9 ml-10 px-11 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 
        hover:shadow-lg transition duration-300' onClick={reset}>Reset</button>
        <button className='mt-9 ml-10 px-11 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 
        hover:shadow-lg transition duration-300' onClick={decreament}>-</button>
      </div>      
    </>
  )
}

export default Counter
