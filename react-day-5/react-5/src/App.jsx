import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Usercard from './components/Usercard';

const App = () => {
  const [toggle , setToggle] = React.useState(false);
   const [users , setUsers] = React.useState([]);
  return (
    <div className='bg-gray-400 h-screen '>  
      <Register setUsers={setUsers} setToggle={setToggle} />
      <div className='flex'>{(users.map ((elem) => <Usercard user={elem} /> ))}
      </div>
       

    </div>
  )
}

export default App
 