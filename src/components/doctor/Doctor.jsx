"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { MdLocationOn } from "react-icons/md";
import BookAppointment from '../../app/(defaultLayout)/components/BookAppointment';


function Doctor(props) {
    const [doctor, setDoctor] = useState(null);

    const { id } = useParams();
    console.log(id, 'idd')


    useEffect(() => {
        fetch(`https://nextjs-team1.vercel.app/api/users?_id=${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.success && data.users.length > 0) {

                    setDoctor(data.users[0]);
                } else {
                    console.error('No doctor found or unexpected response structure:', data);
                }
            })
            .catch(error => console.error("Failed to fetch doctor data:", error));
    }, [id]);


    if (!doctor) {
        return <div>Loading...</div>;
    }
    console.log(doctor)

    return (
        <div >
            <div className="bg-[#102F23] px-5 py-24 lg:px-20 md:px-16 xl:px-28 text-white">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li className="text-2xl"><a>Home</a></li>

                        <li className="text-2xl">Doctor</li>
                        <li className="text-2xl">Details</li>
                        <li className="text-2xl">{doctor.name}</li>
                    </ul>
                </div>
            </div>
            <div className="bg-base-200 p-10  lg:px-20 md:px-16 xl:px-28">
                <div className="  p-10 bg-[#ffffff]  block  justify-start lg:flex-1 md:flex  gap-x-5">
                    <div>
                        <img src={doctor?.image} className="w-96 h-96"></img>
                    </div>
                    <div className="py-2 lg:py-14 md:py-10">
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
                            <p>( {doctor?.ratiing} )</p> <br></br>


                        </div>
                        <div className=" flex  items-center align-middle gap-x-5 py-3">
                            <p className="text-xl bg-red-50"><MdLocationOn></MdLocationOn></p>
                            <p className="">{doctor?.address}</p>
                        </div>
                        <h4 className="font-semibold">Service : {doctor?.servicee}</h4>

                        <BookAppointment doctor={doctor}></BookAppointment>
                    </div>
                </div>
            </div>

            <div className="px-5 py-24 lg:px-20 md:px-16 xl:px-28">
                <h1 className="font-semibold pb-5">About Doctor</h1>
                <p>{doctor?.about}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-10">
                    <div>
                        <h1 className="py-1 font-semibold">Award</h1>
                        <p className="py-1">{doctor?.award}</p>
                    </div>
                    <div>
                        <h1 className="py-1 font-semibold">Experience</h1>
                        <p className="py-1">{doctor?.work_experience}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Doctor;