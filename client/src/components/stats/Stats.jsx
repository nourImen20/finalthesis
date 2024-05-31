import React from 'react'
import './stats.scss';
import StatisticBlock from './StatisticBlock';

const Stats = () => {

  return (
    <section className="py-3 px-5">
        <div className="row justify-content-center text-align-center">
          <StatisticBlock
            title="+150"
            description="Journalists"
          />
          <StatisticBlock
            title="+23M"
            description="Articles"
          />
          <StatisticBlock
            title="+20M"
            description="News"
          />
        </div>
    </section>
  );
};

export default Stats