'use client';

import { UserButton, auth, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
    const { user, isLoaded } = useUser();
    //  const { userId } = auth();

    return (
        <div>
            <header>
                <nav className='flex items-center justify-between p-6 lg:px-8 h-20 ' aria-label='Global'>
                    <div className='flex container mx-auto items-center justify-between py-4'>
                        <a href="/" className=''>
                            Home
                        </a>
                    </div>
                    <div className='flex gap-4 items-center justify-center'>
                        {
                            user && isLoaded ?
                                (
                                    <>

                                        <Link href='/dashboard'>Dashboard</Link>
                                        <UserButton afterSignOutUrl='/'></UserButton>
                                    </>

                                ) : (
                                    <div>
                                        <Link href='/sign-up'>Sign up</Link>
                                    </div>
                                )
                        }
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Nav;