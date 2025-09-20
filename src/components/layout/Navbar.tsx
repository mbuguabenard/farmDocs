'use client'

import { useState } from 'react';
import Link from 'next/link';
import {Home, BookOpen, Info, Phone, Menu, X, User} from 'lucide-react';


export default function Navbar () {
const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='sticky top-0 z-50  bg-green-700 text-white shadow-md'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
            {/* Logo */} 
            <div className='text-2xl font-bold'>
                FarmDocs
            </div>

            {/* Navigation Links */}
            <div className='hidden md:flex gap-6 items-center'>
                <Link href='/' className='flex items-center gap-1 hover:text-yellow-300'>
                <Home size={18} /> Home
                
                </Link>
                <Link href='/about' className='flex items-center gap-1 hover:text-yellow-300'>
                <Info size={18}>About</Info>
                </Link>

                <Link href='/features' className='flex items-center gap-1 hover:text-yellow-300'>
                <BookOpen size={18}>Features</BookOpen>
                </Link>

                <Link href='/contact' className='flex items-center gap hover:text-yellow-300'>
                <Phone size={18}>Contact us</Phone>
                </Link>

                <Link href='/login' className='ml-4 hover:text-yellow-300'>
                <User size={20}></User>
                </Link>
            </div>

            <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden flex items-center'>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>

            {isOpen && (
                <div className='md:hidden bg-green-800 px-6 pb-4 flex flex-col gap-4'>
                    <Link href='/' className='flex items-center gap-2 hover:text-yellow-300'>
                    <Home size={18}></Home>
                    </Link>
                    <Link href='about' className='flex items-center gap-2 hover:text-yellow-300'>
                    <Info size={18}></Info>About
                    </Link>
                    <Link href='/features' className='flex items-center gap-2 hover:text-yellow-300'>
                    <BookOpen size={18}></BookOpen>Features 
                    </Link>
                    <Link href='/contact' className='flex items-center gap-2 hover:text-yellow-300'>
                    <Phone size={18}></Phone>Contact 
                    </Link>
                    <Link href='/login' className='flex items-center gap-2 hover:text-yellow-300'>
                    <User size={18}></User>Login
                    </Link>
                </div>
            )}
        </nav>
    )
};