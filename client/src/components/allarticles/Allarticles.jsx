import React from 'react'
import './allarticles.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Tmp from '../toparticles/Tmp'; 
import articles from '../toparticles/articlesData'; 


const Allarticles = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  // Filter articles with a date property
  const Otherarticles = articles.filter((article) => article.date && article.date !== currentDate);

  return (
    <div className='Allarticles-container' id='all'>
              <hr className="my-5 mx-5" style={{ borderTop: '1px solid black'}} />

      <div className="d-flex justify-content-between d-grid mx-3">
        <div className='d-flex Top-article justify-content-center align-items-center mx-4 mb-4'> <span >ALL ARTICLES</span></div>
      </div>
      {Otherarticles.map((article, index) => (
        <React.Fragment key={index}>
          <Tmp article={article} layout="right" />
          {index < Otherarticles.length - 1 && <div className="article-spacing"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};
export default Allarticles