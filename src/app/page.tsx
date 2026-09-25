import Banner from '@/components/homepage/Banner';
import TheLibrary from '@/components/homepage/TheLibrary';
import Navber from '@/components/shared/Navber';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const HomePage = () => {
  return (
    <div>

      <Banner />
      <TheLibrary />

    </div>
  );
};

export default HomePage;