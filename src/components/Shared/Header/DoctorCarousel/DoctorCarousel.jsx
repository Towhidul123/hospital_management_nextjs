"use client"
import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";
import { useRouter } from 'next/navigation';
function DoctorCarousel(props) {
    const router = useRouter()
    const doctors = [
        {
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

        },
        {
            "name": "Stive Smith",
            "image": "https://i.postimg.cc/nrg67trH/Rectangle-15-1.png",
            "degree": "MBBS",
            "ratiing": "5",
            "specialist": "Psychiatrist",
            "phone": "0134678899900",
            "address": "Mirpur,Dhaka,Bangladesh",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "work_experience": "Glowing Smiles Family Dental Clinic",
            "award": "fathers of humanity",
            "servicee": "Cosmetic Dentisty"

        }, {
            "name": "Alan walkner",
            "image": "https://i.postimg.cc/9Xk3sypv/Rectangle-15.png",
            "degree": "MBBS",
            "ratiing": "5",
            "specialist": "Endocrinologist",
            "phone": "0134678899900",
            "address": "KillKhet,Dhaka,Bangladesh",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "work_experience": "Glowing Smiles Family Dental Clinic",
            "award": "fathers of humanity",
            "servicee": "Teeth Cleaning"

        }, {
            "name": "Hridoy Ahmed",
            "image": "https://i.postimg.cc/hGqVScx9/istockphoto-177373093-612x612.jpg",
            "degree": "MBBS",
            "ratiing": "5",
            "specialist": "Gastroenterologist",
            "phone": "0134678899900",
            "address": "KillKhet,Dhaka,Bangladesh",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "work_experience": "Glowing Smiles Family Dental Clinic",
            "award": "fathers of humanity",
            "servicee": "Teeth Cleaning"

        }, {
            "name": "Stive switch",
            "image": "https://i.postimg.cc/FKg3z8gw/images.jpg",
            "degree": "MBBS",
            "ratiing": "5",
            "specialist": "General Surgery",
            "phone": "0134678899900",
            "address": "KillKhet,Dhaka,Bangladesh",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "work_experience": "Glowing Smiles Family Dental Clinic",
            "award": "fathers of humanity",
            "servicee": "Teeth Cleaning"

        }, {
            "name": "James pathirana",
            "image": "https://i.postimg.cc/3R8pv1tN/desktop-wallpaper-doctor-female-doctor.jpg",
            "degree": "MBBS",
            "ratiing": "5",
            "specialist": "Pulmonologists",
            "phone": "0134678899900",
            "address": "KillKhet,Dhaka,Bangladesh",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "work_experience": "Glowing Smiles Family Dental Clinic",
            "award": "fathers of humanity",
            "servicee": "Teeth Cleaning"

        }
    ]
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-5 gap-x-5 lg:px-20 md:px-16 xl:px-28">
                {
                    doctors?.map(d => <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={d?.image} alt={d?.name} className="rounded-xl h-44 w-full" />
                        </figure>
                        <div className="card-body text-left">
                            <h2 className="card-title"></h2>
                            <div>
                                <h3 className="font-semibold text-xl py-1">{d?.name}</h3>
                                <p className="pb-1">Senior - {d?.servicee}</p>
                                <div className="rating rating-sm pb-2">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <div className=" flex  items-center align-middle">
                                    <p className="text-xl bg-red-50"><MdLocationOn></MdLocationOn></p>
                                    <p className="-ml-24">{d?.address}</p>
                                </div>
                                
                            </div>
                            <div className="card-actions">
                            <button  onClick={()=>router.push(`/doctor/55`)} className='py-2 px-7 rounded-md border my-5 border-red-200 hover:bg-[#F7A582] hover:text-white'>View profile</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default DoctorCarousel;