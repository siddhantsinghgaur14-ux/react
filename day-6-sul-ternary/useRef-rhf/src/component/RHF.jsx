import React from 'react'
import { useForm } from "react-hook-form"

const RHF = () => {
   let {
    register,
    handleSubmit,
    React,
    formState: { errors },
   }= useForm()
  
  return (
    <div className='w-80 h-screen '>
        REACT HOOK FORM
    <form onSubmit={handleSubmit((data) =>
     {console.log(data)
     })}
    className='flex p-6 rounded bg-white  border-gray-500  flex-col gap-2'> 

        <input
        
        {...register("ProductName" )}
         className='p-2 border border-gray-500 rounded'
         type="text" placeholder='ProductName' />

        <input 
        {...register("Price" )}
        className='p-2 border border-gray-500 rounded' 
        type="text" placeholder='Price' />

        <span>Select Category :</span>

        <select 
        {...register("Category" )}
        
        className='p-2 border border-gray-500 rounded' >
            <option value="Mens">Mens</option>
            <option value="Women">Women</option>
            <option value="Kids"></option>
        </select>

        <input
       {...register("image" )}
         className='p-2 border border-gray-500 rounded' type="text" placeholder="image"/>
        <button className='bg-blue-700 rounded w-30'>create</button>
    </form>
    </div>
  )
}

export default RHF
