import React, { useRef } from 'react'

const From = () => {
  
  
    const fromRef =useRef({});
    console.log(fromRef)
    
 
    const handleSummit = (e) => {
        e.preventDefault();
        console.log(fromRef.current.ProductName.value);
        console.log(fromRef.current.Price.value);
        console.log(fromRef.current.Category.value);
        console.log(fromRef.current.image.value)
      
    }

  return (
    <div className='w-80 h-screen '>
    <form onSubmit={handleSummit}
    className='flex p-6 rounded bg-white  border-gray-500  flex-col gap-2'> 

        <input
        ref={(e) => fromRef.current.ProductName=e}
        
         className='p-2 border border-gray-500 rounded'
         type="text" placeholder='ProductName' />

        <input 
        ref={(e) => fromRef.current.Price=e}
        className='p-2 border border-gray-500 rounded' 
        type="text" placeholder='Price' />

        <span>Select Category :</span>

        <select 
        ref={(e) => fromRef.current.Category=e}
        className='p-2 border border-gray-500 rounded' >
            <option value="Mens">Mens</option>
            <option value="Women">Women</option>
            <option value="Kids"></option>
        </select>

        <input
        ref={(e) => fromRef.current.image=e}
         className='p-2 border border-gray-500 rounded' type="text" placeholder="image"/>
        <button className='bg-blue-700 rounded w-30'>create</button>
    </form>
    </div>
  )
}

export default From
