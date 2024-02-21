"use client"
import React from 'react';
import loginlogo from "../../../imgages/Frame.png"
import Image from 'next/image';
import { useForm } from "react-hook-form"
import Link from 'next/link';

const page = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => {

    }
    return (
        <div className=' '>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>
                <div className='bg-[#07332F]'>
                    <Image src={loginlogo} className='h-[700px]'></Image>
                </div>
                <div className='bg-base-100'>
                    <div className='  bg-gray-100 shadow-xl w-96 mx-auto border border-gray-300 rounded-2xl '>
                        <h1 className='text-xl py-5 text-center font-semibold'>Sign Up to DentalCare</h1>
                        <div className=' px-5'>
                            <form onSubmit={handleSubmit(onSubmit)} >

                               
                                <input type='email' placeholder='your name' className='w-full py-3 my-4 px-5  rounded-md outline-none shadow-xl' {...register("email")} />
                                <input type='password' placeholder='your name' className='w-full py-3 my-4 px-5  rounded-md outline-none shadow-xl' {...register("password")} />
                                

                                <div className='flex justify-center  items-center align-middle'>
                                    <Link href='/register' className=' underline'>Please Register</Link>
                                </div>
                                <div className=' flex justify-center items-center align-middle'>
                                       <button type='submit' className='py-2 px-10 rounded-md border my-5 border-red-200 hover:bg-[#F7A582] hover:text-white'>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;