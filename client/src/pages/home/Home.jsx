import React from 'react';
import './home.scss';
import { Navbar, Slider, Toparticles, Footer, Stats, Lastsection } from '../../components';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
      <>
        <Navbar />
        <Slider />
        <div className='container '>
          <div className='flex justify-content-center mx-auto' style={{ width: '1000px' }}>
            <Toparticles />
            <hr className="my-5 mx-5" style={{ borderTop: '1px solid black' }} />
            <Stats />
            <hr className="my-3 mx-5" style={{ borderTop: '1px solid black' }} />
            <Lastsection />
          </div>
        </div>
        <Footer />
      </>
  );
};

export default Home;
