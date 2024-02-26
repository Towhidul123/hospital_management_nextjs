import React from 'react';
import doctor from "../../../../imgages/Doctor.png"
import teeth from "../../../../imgages/teethImage.png"
import Image from 'next/image';
const DoctorContainer = () => {
    return (
        <div className='px-5 my-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20 md:grid-cols-2 lg:px-20 md:px-16 xl:px-28'>
                <div>
                    <Image src={doctor} className='w-full h-[800px]' width={100} height={600}></Image>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold'>Our Services</h1>
                    <p className='py-5 font-[10px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <div className='flex justify-between items-center align-middle my-5'>
                        <button className='py-3 lg:px-5 md:px-1 px-2 bg-[#F7A582] text-white rounded-md text-[10px] xl:text-sm'>Cavity Protection</button>
                        <button className='py-3 lg:px-5 md:px-1 px-2 bg-[#F7A582] text-white rounded-md text-[10px] xl:text-sm'>Cavity Protection</button>
                        <button className='py-3 lg:px-5 md:px-1 px-2 bg-[#F7A582] text-white rounded-md text-[10px] xl:text-sm'>Cavity Protection</button>
                    </div>
                    <Image src={teeth} className='w-full h-[300px] my-5' width={200} height={500}></Image>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                    <p className='pt-3'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button className='py-3 px-7 rounded-md border my-5 border-red-200 hover:bg-[#F7A582] hover:text-white'>More Details</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorContainer;