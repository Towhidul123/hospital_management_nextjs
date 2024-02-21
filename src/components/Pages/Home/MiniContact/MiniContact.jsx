import React from 'react';
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

const MiniContact = () => {
    return (
        <div className='px-5 py-20'>
             <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 lg:px-20 md:px-16 xl:px-28 gap-x-10 gap-y-10'>
                <div className='flex justify-start gap-x-4  align-middle bg-[#102F23] text-white xl:p-10 lg:p-5 p-10 rounded-md'>
                    <div className=''>
                        <h1 className='text-3xl'><MdOutlineWatchLater></MdOutlineWatchLater></h1>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Opening Hours</h1>
                        <p className='text-sm pt-3'>Open 9.00 am to 5.00pm  Everyday</p>
                    </div>
                </div>
                <div className='flex justify-start gap-x-4  align-middle bg-[#F7A582] text-white xl:p-10 lg:p-5 p-10 rounded-md'>
                    <div className=''>
                        <h1 className='text-3xl'><IoLocation></IoLocation></h1>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Our Locations</h1>
                        <p className='text-sm pt-3'>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                    </div>
                </div>
                <div className='flex justify-start gap-x-4  align-middle bg-[#102F23] text-white xl:p-10 lg:p-5 p-10 rounded-md'>
                    <div className=''>
                        <h1 className='text-3xl'><FaPhoneVolume></FaPhoneVolume></h1>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Contact Us</h1>
                        <p className='text-sm pt-3'>+88 01750 00 00 00 <br />
+88 01750 00 00 00</p>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default MiniContact;