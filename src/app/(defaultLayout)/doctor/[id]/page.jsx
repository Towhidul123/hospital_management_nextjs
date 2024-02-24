"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

function page(props) {
    const doctor = {
        "name": "Karyen Anderson",
        "image": "https://i.postimg.cc/ZnQhcd7z/Rectangle-15-2.png",
        "degree": "MBBS",
        "ratiing": "5",
        "specialist": "Cardiologist",
        "phone": "0134678899900",
        "address": "Dhanmondi,Dhaka,Bangladesh",
        "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "work_experience": "Glowing Smiles Family Dental Clinic",
        "award": "Humanitarian Award",
        "servicee": "Teeth Orthodontics"

    }
    const { id } = useParams();
    console.log(id, 'idd')
    return (
        <div >
            <div className="bg-[#102F23] px-5 py-24 lg:px-20 md:px-16 xl:px-28 text-white">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li className="text-2xl"><a>Home</a></li>

                        <li className="text-2xl">Doctor</li>
                        <li className="text-2xl">Details</li>
                        <li className="text-2xl">{id}</li>
                    </ul>
                </div>
            </div>
            <div className="bg-base-200 p-10  lg:px-20 md:px-16 xl:px-28">
            <div className="  p-10 bg-[#ffffff]  block  justify-start lg:flex-1 md:flex  gap-x-5">
                <div>
                    <img src={doctor?.image} className="w-96 h-96"></img>
                </div>
                <div>
                    <h1 className="text-lg lg:text-2xl font-semibold py-2">{doctor?.name}</h1>
                    <p className="py-2">{doctor?.degree}, MD - General Medicine</p>
                    <div className="flex justify-start items-center align-middle">
                        <div className="rating rating-sm py-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>( {doctor?.ratiing} )</p>
                    </div>
                </div>
            </div>
            </div>
            

        </div>
    );
}

export default page;