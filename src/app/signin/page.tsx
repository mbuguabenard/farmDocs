'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        await signIn('credentials', { email,password,callbackUrl:'/dashboard'});

    };
    return (
        <form onSubmit={handleSubmit} className='flex flex-col max-w-sm mx-auto mt-20'>
            <input  className='border p-2 mb-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
           <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border p-2 rounded pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
            <button type='submit' className='bg-blue-600 text-white p-2'>Sign In </button>


        </form>
    )
}