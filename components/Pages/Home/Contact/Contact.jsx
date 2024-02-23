import React from 'react';
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
const Contact = () => {
    return (
        <div className='px-5'>
           <div className='lg:px-20 md:px-16 xl:px-28 gap-x-10 gap-y-10  bg-[#102F23] text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-10 p-14'>
                <div>
                    <h1 className='text-3xl font-semibold '>Contact With Us</h1>
                    <p className='text-sm py-7'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                    <div className='flex justify-start items-center align-middle'>
                        <h1 className='text-xl '><FaPhoneVolume></FaPhoneVolume></h1>
                        <p className='pl-4'>+8801314791920</p>
                    </div>
                    <div className='flex justify-start items-center align-middle py-3'>
                        <h1 className='text-xl '><IoLocation></IoLocation></h1>
                        <p className='pl-4'>Dhanmondi, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div>
                    <form>
                        <div className='xl:flex lg:flex md:flex   justify-center items-center align-middle gap-x-4 gap-y-10'>
                            <input className='py-3 shadow-2xl my-3 w-full px-5 bg-[#102F23] outline-none rounded-md border' type='text' placeholder='Name'></input>
                            <input className='py-3 shadow-2xl my-3 w-full px-5 bg-[#102F23] outline-none rounded-md border' type='email' placeholder='Email'></input>
                        </div>
                        <div className='xl:flex lg:flex md:flex   justify-center items-center align-middle gap-x-4 gap-y-10'>
                            <input className='py-3 shadow-2xl my-3 w-full px-5 bg-[#102F23] outline-none rounded-md border' type='number' placeholder='Phone'></input>
                            <input className='py-3 shadow-2xl my-3 w-full px-5 bg-[#102F23] outline-none rounded-md border' type='text' placeholder='Doctor Name'></input>
                        </div>
                        <div className='xl:flex lg:flex md:flex   justify-center items-center align-middle gap-x-4 gap-y-10'>
                            <input className='py-3 shadow-2xl my-3 w-full px-5 bg-[#102F23] outline-none rounded-md border' type='date' placeholder='date'></input>
                            
                        </div>
                          <button className='py-3 rounded-md w-full mt-2 bg-[#F7A582] text-white'>Book now</button>
                    </form>
                </div>
            </div>
           </div> 
        </div>
    );
};

export default Contact;