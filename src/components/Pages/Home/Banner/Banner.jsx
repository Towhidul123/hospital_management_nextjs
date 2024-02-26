import React from 'react';
import banner from "../../../../imgages/bannerGroup.png"
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='bg-[#102F23] px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 lg:px-20 md:px-16 xl:px-28'>
                <div className='py-12'>
                    <h1 className=' xl:text-[64px] lg:text-[44px] md:text-[30px] text-[30px] text-white font-semibold'>Your Best Medical Help Center</h1>
                    <p className='py-4 text-gray-200 font-[10px]'>Lorem Ipsum is simply dummy text they are printing typesetting <br /> has been the industry’s stardard.</p>
                    <button className='py-3 px-10 bg-[#F7A582]  rounded-md text-white mt-5'>All Service</button>
                </div>
                <div>
                    <Image src={banner} width="400px" height="600px"></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;