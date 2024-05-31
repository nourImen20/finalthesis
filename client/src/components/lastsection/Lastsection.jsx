import React from 'react';
import './lastsection.scss';
import src from '../../assets/news.mp4'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const Lastsection = () => {
  return (
    <section className="py-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 align-items-center">
          <div className="embed-responsive embed-responsive-16by9">
            <video controls className="embed-responsive-item centered-video object-fit-cover w-100 mx-auto" >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-5 w-75 text-center mx-auto">
            <i class="bi bi-quote" style={{"font-size":"2.5rem"}}></i>
            <h3 className='para-title'>using blockchain technology help to increase the accuracy of news reporting and combat the spread of fake news.</h3>
            <p className='mb-3'>journalists can ensure the authenticity and accuracy of their work, while also giving readers more control over the news they consume. <br/></p>
            <p>Her three-year-old daughter Shankaron sits on her lap, eyes blank and scared. It is a look that is far too common in these parts.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Lastsection;
