"use client"

import Image from 'next/image';
import React from 'react';
import logo from "../../../imgages/Group 36.png"
const Footer = () => {
  return (
    <div className='py-10'>
      <footer className="footer p-10  text-base-content">
        <aside className='lg:w-[400px] md:w-[300px]'>
          <Image src={logo} height={100} width={250}></Image>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
          <button className='py-3 px-14 rounded-md border my-5  shadow-inner border-red-200 hover:bg-[#F7A582] hover:text-white'>Appointment</button>
        </aside>
        <nav>

          <header className="text-xl font-semibold text-black py-4">Quick Links</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Appointment</a>
          <a className="link link-hover">Online-payment</a>
          <a className="link link-hover">My-account</a>
        </nav>
        <nav>

          <header className="text-xl font-semibold text-black py-4">Doc House Services</header>
          <a className="link link-hover">Pediatric Clinic</a>
          <a className="link link-hover">Diagnosis Clinic</a>
          <a className="link link-hover">Cardiac Clinic</a>
          <a className="link link-hover">Laboratory Analysis</a>
          <a className="link link-hover">Gynecological Clinic</a>
          <a className="link link-hover">Personal Counseling</a>
        </nav>
        <nav>
          <header className="text-xl font-semibold text-black py-4">Working Hours</header>
          <a className="link link-hover">Monday - 10 am to 7 pm</a>
          <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
          <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
          <a className="link link-hover">Thursday - 10 am to 7 pm</a>
          <a className="link link-hover">Friday - 10 am to 7 pm</a>
          <a className="link link-hover">Sunday - 10 am to 7 pm</a>
        </nav>

      </footer>
      <div className='pt-15'>
        <hr></hr>
        <div className='flex justify-center items-center align-middle px-5'>
          <p className='py-5'>Copyright © 2022 - All right reserved by Doc House Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;