import React from 'react'
import Counter from './components/counter'


const App = () => {
  return (
    <>
      <div className='border-4 m-9 ml-52 mr-80 mt-32 rounded-full p-10 pb-28 bg-lime-400 border-red-500'>
        <h1 className='text-3xl p-8 ml-96'>Counter App </h1>
        <Counter className='mt-8'/>      
      </div>
    </>
  )
}

export default App
