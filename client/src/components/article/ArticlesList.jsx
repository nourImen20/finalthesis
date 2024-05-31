import React from 'react';
import Article from './Article';
import articles from '../toparticles/articlesData'; // Assuming this is where your articles data is imported from

const ArticlesList = () => {
  return (
    <div>
     <Article article={articles[0]} />

    </div>
  );
};

export default ArticlesList;
