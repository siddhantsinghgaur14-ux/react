import React from 'react'

const Usercard = ({ user }) => {
  return (
    <div className='p-4 flex flex-col gap-2 bg-amber-50 '>
      <div className='w-50 h-50 rounded overflow-hidden'>
        <img  className="w-full h-full" src={user.image} alt={user.name} />
      </div>
      <div>
        <h1>
            {user.name}
        </h1>
        <p>
            {user.email}
        </p>

      </div>
      <button>Delete</button>
    </div>
  )
}

export default Usercard
