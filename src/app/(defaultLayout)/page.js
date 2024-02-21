import Banner from '@/components/Pages/Home/Banner/Banner';
import Contact from '@/components/Pages/Home/Contact/Contact';
import DoctorContainer from '@/components/Pages/Home/DoctorContainer/DoctorContainer';
import MiniContact from '@/components/Pages/Home/MiniContact/MiniContact';
import Header from '@/components/Shared/Header/Header';
import React from 'react';

const page = () => {
  return (
    <div>
     
      <Banner></Banner>
      <DoctorContainer></DoctorContainer>
      <MiniContact></MiniContact>
      <Contact></Contact>
    </div>
  );
};

export default page;