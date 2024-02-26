import { Resend } from 'resend';

import { NextResponse } from 'next/server';
import YelpRecentLoginEmail from '../../../../emails';

//const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const response = await req.json()
    const result = response;
    console.log(result)
    try {
        const data = await resend.emails.send({
            from: 'Doctor-Appointment-Booking@iub.edu.bd',
            to: [response.patientEmail],
            subject: 'Appointment Booking',
            react: YelpRecentLoginEmail({ result }),
        });
        return NextResponse.json({ data })

    }
    catch (error) {
        return NextResponse.json({ error })

    }
}


