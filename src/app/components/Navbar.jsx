"use client";
import React, { useState } from 'react';
import Link from "next/link";
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "project",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 '>
      <div className='flex flex-wrap items-center justify-between ms-auto py-4 px-4'>
        <Link href={"/"} className='text-3xl text-white font-semibold'>
        

<div className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-1">
  <Image
    src="/images/logo3.png"
    alt="Logo"
    width={30} 
    height={30} 
    className="rounded-full" // You can apply styles here
  />
</div>

        </Link>
        <div className='md:hidden mobile-menu block'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
        <ul className='flex p-4 md:flex-row md:p-0 md:space-x-8'>
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
   
          />
        </li>
      ))}
    </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  );
};

export default Navbar;
