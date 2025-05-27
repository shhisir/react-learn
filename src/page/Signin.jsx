import React, { useState } from 'react'

function Signin() {
const [login,setLogin] = useState({
    email: '',
    password: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
        ...login,
        [name]: value
    }); }
const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the login logic, like sending the data to an API
    console.log("Login Data:", login);
}
  return (
    <div>
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <form>
                <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your email
                "name='email'
                 onChange={(e)=>handleChange(e)} /> 
                
                </div>
                <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded"
                name="password" 
                placeholder="Enter your password"
                onChange={(e)=>handleChange(e)} />
                </div>
                <button  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                onClick={(e)=>handleSubmit(e)}
                
                >Sign In</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Signin
