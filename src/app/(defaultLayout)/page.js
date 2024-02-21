import Banner from '@/components/Pages/Home/Banner/Banner';
import DoctorContainer from '@/components/Pages/Home/DoctorContainer/DoctorContainer';
import React from 'react';

function page(props) {
  return (
    <div>
      <Banner></Banner>
      <DoctorContainer></DoctorContainer>
    </div>
  );
}

export default page;