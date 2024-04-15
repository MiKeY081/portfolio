import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await axios.post("/user/login", {
        email,
        password,
      });
      if (data.success) {
        toast.success(data.message);
        navigate("/admin/notifications");
      } else {
        toast.error("Backoff man!!!");
      }
    } catch (error) {
      console.log("Something went wrong!");
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-black text-white'>
      <h1 className='text-3xl font-bold mb-8'>Login</h1>
      <div className='w-80'>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full bg-transparent border-b-2 border-green-500 outline-none text-white py-2 mb-6'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full bg-transparent border-b-2 border-green-500 outline-none text-white py-2 mb-6'
        />
        <button
          onClick={handleLogin}
          className='w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
