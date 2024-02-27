import React from 'react'

export default function page() {
    const services = [
        {
            img : "https://i.postimg.cc/wvP235Ss/006-broken-tooth.png",
            name : "Teeth Orthodontics"
        },
        {
            img : "https://i.postimg.cc/xCqg0pF2/Flat.png",
            name : "Cosmetic Dentisty"
        },
        {
            img : "https://i.postimg.cc/jjMZYYcc/Group.png",
            name : "Teeth Cleaning"
        },
        {
            img : "https://i.postimg.cc/mrL8ngYh/Group-1.png",
            name : "Cavity Protection"
        },
        {
            img : "https://i.postimg.cc/2SfH4w3Q/Group-34963.png",
            name : "Pediatric Dental"
        },
        {
            img : "https://i.postimg.cc/4xbWw9hr/Group-34967.png",
            name : "Oral Surgery"
        },
    ]
    return (
        <div>
           <div className='px-5 lg:px-28 md:px-20'>
            <h1 className='text-center font-semibold py-10 text-3xl'>We provides</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-10'>
                {
                    services?.map(s =><div className='p-5 gap-x-3 rounded-md shadow-md flex justify-center items-center align-middle'>
                        <img src={s?.img}></img>
                        <p>{s?.name}</p>
                    </div>)
                }
            </div>
           </div>
        </div>
    )
}
