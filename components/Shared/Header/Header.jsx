'use client';

import { UserButton, auth, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { user, isLoaded } = useUser();
  //  const { userId } = auth();
  return (
    <div>
      <div className="navbar bg-base-100   shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link className='text-lg' href="/">Home</Link></li>
              <li><Link className='text-lg' href="/service">Services</Link></li>
              <li><Link className='text-lg' href="/contact">Contact us</Link></li>


            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link className='text-lg  px-5 font-[500] ' href="/">Home</Link>
            <Link className='text-lg px-5 font-[500]' href="/service">Services</Link>
            <Link className='text-lg px-5 font-[500]' href="/contact">Contact us</Link>

          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 flex gap-4 items-center justify-center">
            {
              user && isLoaded ?
                (
                  <>

                    <Link href='/dashboard'>Dashboard</Link>
                    <UserButton afterSignOutUrl='/'></UserButton>
                  </>

                ) : (
                  <div>
                    <Link className='text-lg' href='/sign-up'>Sign up</Link>
                  </div>
                )
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;