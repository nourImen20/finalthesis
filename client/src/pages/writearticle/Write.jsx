import React from 'react'
import { Navbar, Footer, WriteArticle } from '../../components';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter


const Write = () => {
  return (
      <>
        <Navbar />
       
        
            <WriteArticle/>
          
        <Footer />
      </>
  );
};

export default Write;