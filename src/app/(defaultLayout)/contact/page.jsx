import React from 'react'

export default function page() {
    return (
        <>
        <div className='bg-[#102F23] px-5 text-white'>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 py-16'>
             <div></div>
             <div className='bg-base-200 text-black p-5 rounded-md'>
                <h1 className='text-center font-semibold text-3xl '>Contact Us</h1>
                <form className='py-10'>
                    <div className='flex justify-center items-center align-middle gap-2 mb-7'>
                        <input type='text' placeholder='First Name' className='w-full  text-black pl-2 outline-none  py-2 rounded-md'></input>
                        <input type='text' placeholder='Last Name' className='w-full   text-black pl-2 outline-none py-2 rounded-md'></input>
                    </div>
                    <input type='email' placeholder='Enter Your Email' className='w-full mb-7  text-black pl-2 outline-none  py-2 rounded-md'></input>
                    <textarea type='text' placeholder='Enter Your Email' className='w-full mb-7  text-black pl-2 outline-none  py-2 rounded-md'></textarea>
                    <div className='flex justify-center items-center align-middle'>
                        <button className='text-xl py-1 px-10 bg-[#102F23] text-white rounded-md'>Send</button>
                    </div>
                </form>
             </div>
           </div>
        </div>
        </>
    )
}
