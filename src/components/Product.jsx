import React from 'react'

const Product = () => {
  return (
    <div className=' text-white py-3'>
      <h1 className='text-4xl'>Products</h1>

      <ul className='list-disc list-inside space-y-3 mb-4'>
        
        <li> <span className="font"> Product 1</span> <button className='border-white bg-white text-gray-700 active:bg-gray-300 hover:bg-gray-200 scale-95 ml-10 rounded-[8px] px-2 py-1 mb-2 mt-3'>See Details</button></li>

        <li> <span className="font"> Product 2</span> <button className='border-white bg-white text-gray-700 active:bg-gray-300 hover:bg-gray-200 scale-95 ml-10 rounded-[8px] px-2 py-1 mb-2'>See Details</button></li>

        <li> <span className="font"> Product 3</span> <button className='border-white bg-white text-gray-700 active:bg-gray-300 hover:bg-gray-200 scale-95 ml-10 rounded-[8px] px-2 py-1 mb-2'>See Details</button></li>
      </ul>

    </div>
  )
}

export default Product