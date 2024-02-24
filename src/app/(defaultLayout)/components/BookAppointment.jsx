'use client'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../../@/components/ui/dialog"
import { Button } from '../../../../@/components/ui/button'
import { Calendar } from "../../../../@/components/ui/calendar"
import { CalendarDays, Clock } from 'lucide-react'

import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner'


function BookAppointment() {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState();
    const [selectedTimeSlot, setSelectedTimeSlot] = useState();

    const { user } = useUser();

    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }

        setTimeSlot(timeList)
    }


    useEffect(() => {
        if (user) {
            // Logic that depends on the user being loaded
            console.log("User is loaded:", user);
        }
        getTime();
    }, [user]); // Depend on user

    if (!user) {
        return <div>You are not logged in</div>;
    }



    const isPastDay = (day) => {
        return day <= new Date();
    }

    const saveBooking = () => {
        const data = {
            data: {
                UserName: user.firstName + " " + user.lastName,
                Email: user.emailAddresses[0].emailAddress,
                Time: selectedTimeSlot,
                Date: date,
                //   doctor: doctor.id,
            }
        }
        console.log(data)
        // GlobalApi.bookAppointment(data).then(resp=>{
        //   console.log(resp);
        //   if(resp)
        //   {
        //     GlobalApi.sendEmail(data).then(resp=>{
        //       console.log(resp)
        //     })
        toast("Booking Confirmation sent on Email")
        //   }
        // })
    }



    return (
        <Dialog>
            <DialogTrigger>
                <Button className="mt-3 rounded-full">Book Appointment</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Book Appointment</DialogTitle>
                    <DialogDescription>
                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                                {/* Calender  */}
                                <div className='flex flex-col   gap-3 items-baseline'>
                                    <h2 className='flex gap-2 items-center'>
                                        <CalendarDays className='text-primary h-5 w-5' />
                                        Select Date
                                    </h2>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        disabled={isPastDay}
                                        className="rounded-md border "

                                    />
                                </div>

                                {/* Time Slot  */}
                                <div className=' mt-3 md:mt-0'>
                                    <h2 className='flex gap-2 items-center mb-3'>
                                        <Clock className='text-primary h-5 w-5' />
                                        Select Time Slot
                                    </h2>
                                    <div className='grid grid-cols-3 gap-2 border rounded-lg p-5'>
                                        {timeSlot?.map((item, index) => (
                                            <h2 key={item.time} onClick={() => setSelectedTimeSlot(item.time)}
                                                className={`p-2 border cursor-pointer
                                                    text-center hover:bg-primary hover:text-white
                                                    rounded-full
                                                    ${item.time == selectedTimeSlot && 'bg-primary text-white'}`}>{item.time}</h2>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-end">
                    {/* Close Button */}
                    <DialogClose asChild>
                        <Button type="button" className="text-red-500 border-red-500 mr-2" variant="outline">
                            Close
                        </Button>
                    </DialogClose>

                    {/* Submit Button */}

                    <Button type="button" className="bg-primary text-white" disabled={!(date && selectedTimeSlot)}
                        onClick={() => {
                            saveBooking();
                        }}
                    >
                        Submit
                    </Button>
                </DialogFooter>


            </DialogContent>
        </Dialog>

    )
}

export default BookAppointment