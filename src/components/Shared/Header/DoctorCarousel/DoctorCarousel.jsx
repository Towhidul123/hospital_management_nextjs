"use client"
import React, { useEffect, useState } from 'react';
import { MdLocationOn } from "react-icons/md";
import { useRouter } from 'next/navigation';

function DoctorCarousel(props) {
    const router = useRouter();
    const [doctors, setDoctors] = useState([]);


    useEffect(() => {
        fetch('https://nextjs-team1.vercel.app/api/users?role=doctor')
            .then(response => response.json())
            .then(data => {

                if (data.success && Array.isArray(data.users)) {
                    setDoctors(data.users);
                } else {

                    console.error('Unexpected response structure:', data);
                }
            })
            .catch(error => console.error('Error fetching doctors:', error));
    }, []);

    return (

        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-5 gap-x-5 lg:px-20 md:px-16 xl:px-28">
                {

                    doctors?.map(d => (
                        <div className="card bg-base-100 shadow-xl" key={d.name}>
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
                                    <button
                                        onClick={() => router.push(`/doctor/${d._id}`)}
                                        className='py-2 px-7 rounded-md border my-5 border-red-200 hover:bg-[#F7A582] hover:text-white'>
                                        View profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
}

export default DoctorCarousel;