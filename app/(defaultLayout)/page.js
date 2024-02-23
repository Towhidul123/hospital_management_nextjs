import Banner from '../../components/Pages/Home/Banner/Banner';
import DoctorContainer from '../../components/Pages/Home/DoctorContainer/DoctorContainer';
import MiniContact from '../../components/Pages/Home/MiniContact/MiniContact';
import React from 'react';

function page(props) {
  return (
    
    <div>
      <Banner></Banner>
      <DoctorContainer></DoctorContainer>
      <MiniContact></MiniContact>
    </div>
  );
}

export default page;