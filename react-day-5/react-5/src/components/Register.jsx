import React,{useState} from 'react'

const Register = ({setToggle , setUsers}) => {
    const [formData ,setFormData] = useState({
        name: "",
        email: "",
        password: "",
        image: ""
    });
   
      // console.log([...users]);
    const handleChange = (e) =>{
        let {name , value} = e.target
        setFormData({...formData , [name] : value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUsers((prev) =>[...prev , formData]);
        setFormData({
             name : "",
             email : "", 
             password : "" ,
             image: ""
            });
      
    };
  return (
   <div className='bg-amber-50 w-90  p-6 rounded-xl'>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-4' action="">
        <h1>Register</h1>
        <input  value={formData.name} name='name' onChange={handleChange} className='p-2 border border-gray-400 rounded' type="text" placeholder="Name" />
        <input  value={formData.email} name='email' onChange={handleChange} className='p-2 border border-gray-400 rounded' type="text" placeholder="Email" />
        <input  value={formData.password} name='password' onChange={handleChange} className='p-2  border border-gray-400 rounded' type="password" placeholder="Password" />
        <input  value={formData.image} name='image' onChange={handleChange} className='p-2 border border-gray-400 rounded' type="text" placeholder="Image URL" />

        <button className='p-2 bg-blue-600 rounded' type="submit">Register</button>
      </form>
            <p>Did't have an account? {" "} <span onClick={() => setToggle(true)} className='text-blue-600 cursor-pointer'>LogIn Here</span></p>
      
    </div>
  )
}

export default Register
