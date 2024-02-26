'use client'
import { useEffect, useState } from 'react';
import { auth, useUser } from '@clerk/nextjs';

export default function Page() {
    const { isSignedIn, user } = useUser();
    const [doctor, setDoctor] = useState(null);
    const [queryId, setQueryId] = useState(null);

    useEffect(() => {

        if (user && user.emailAddresses.length > 0) {
            fetch(`https://nextjs-team1.vercel.app/api/appointments?patientEmail=${user.emailAddresses[0].emailAddress}`)
                .then(response => response.json())

                .then(data => {
                    console.log('API response:', data);
                    if (data.success && data.appointments.length > 0) {
                        setDoctor(data.appointments);
                    } else {
                        console.error('No doctor found or unexpected response structure:', data);
                        setDoctor(null);
                    }
                })
                .catch(error => {
                    console.error("Failed to fetch doctor data:", error);
                    setDoctor(null);
                });
        }
    }, [user]);

    console.log(doctor)
    if (!isSignedIn) {
        return <div>You are not logged in</div>;
    }

    // if (!doctor) {
    //     return <div>Loading...</div>;
    // }
    const excludedEmails = ['karyen@gmail.com', 'stive@gmail.com', 'alan@gmail.com', 'hridoy@gmail.com', 'james@gmail.com'];

    return (
        <>



            <div className='mt-10 text-start max-w-xl mx-auto bg-neutral-200 p-5 rounded'>
                <h1 className='text-4xl font-bold'>Welcome</h1>
                <ul className='list-none mt-10'>
                    <li className='mb-2'>
                        <span className='font-semibold'>First Name:</span> {user.firstName}
                    </li>
                    <li className='mb-2'>
                        <span className='font-semibold'>Last Name:</span> {user.lastName}
                    </li>
                    <li className='mb-2'>
                        <span className='font-semibold'>Email:</span> {user.emailAddresses[0].emailAddress}
                    </li>
                </ul>



            </div>

            {doctor ? (
                <ul className='grid grid-cols-3 gap-4'>
                    {doctor.map((appointment, index) => (
                        <li key={index} className='list-none mt-10 text-start max-w-xl mx-auto bg-neutral-200 p-5 rounded'>
                            <div><span className='font-semibold'>Appointment ID:</span> {appointment._id}</div>

                            {!excludedEmails.includes(user.emailAddresses[0].emailAddress) && (
                                <div><span className='font-semibold'>Doctor Name:</span> {appointment.doctorName}</div>
                            )}
                            <div><span className='font-semibold'>Date:</span> {appointment.date}</div>
                            <div><span className='font-semibold'>Time:</span> {appointment.time}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Loading appointments...</div>
            )}


        </>
    );
}

