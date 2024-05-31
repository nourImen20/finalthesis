import React from 'react';
import './stats.scss';

const StatisticBlock = ({ title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4 statistic-block">
      <h2 className='stat-title'>{title}</h2>
      <p className='stat-desc'>{description}</p>
    </div>
  );
};

export default StatisticBlock;
