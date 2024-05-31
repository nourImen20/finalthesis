import React, { useState, useEffect } from 'react';
import './toparticles.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ethers } from "ethers";

import Tmp from './Tmp';
import articlesArray from './articlesData';

const contractAddress = "0x35bE16B6805BE2577903872b6641143B8B709EF6";
const abi = [
  {
    "type": "event",
    "name": "AllArticlesFetched",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "articles",
        "components": [
          {
            "type": "uint256",
            "name": "id",
            "internalType": "uint256"
          },
          {
            "type": "string",
            "name": "title",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "description",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "articleType",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "ipfsHash",
            "internalType": "string"
          },
          {
            "type": "address",
            "name": "journalist",
            "internalType": "address"
          }
        ],
        "indexed": false,
        "internalType": "struct Newscontract.ArticleSummary[]"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ArticlePublished",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "title",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "description",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "articleType",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "ipfsHash",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "journalist",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "addArticle",
    "inputs": [
      {
        "type": "string",
        "name": "_title",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_description",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_articleType",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_content",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_ipfsHash",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "articleCount",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "articles",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "id",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "title",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "description",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "articleType",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "content",
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "journalist",
        "internalType": "address"
      },
      {
        "type": "string",
        "name": "ipfsHash",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getAllArticles",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getArticle",
    "inputs": [
      {
        "type": "uint256",
        "name": "_id",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  }
];


const ArticlesList = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const [articles, setArticles] = useState([]);
  const [topArticles, setTopArticles] = useState([]);

  // Set the current date for articles with no date property
  const updatedArticlesArray = articlesArray.map((article) => ({
    ...article,
    date: article.date || currentDate,
  }));

  // Fetch only the last two articles from the contract
  const fetchLastTwoArticlesFromContract = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, abi, provider);

      // Fetching the last two articles from the contract
      const articleCount = await contract.articleCount();
      let startIdx = articleCount > 1 ? articleCount - 0 : 0;
      startIdx = Math.max(1, startIdx); // Ensure start index is at least 1
      const lastTwoArticles = [];

    


      for (let i = startIdx; i <= articleCount; i++) {
        const article = await contract.articles(i);
        lastTwoArticles.push({
          id: article.id.toString(),
          title: article.title,
          description: article.description,
          type: article.articleType,
          content: article.content,
          ipfsHash: article.ipfsHash,
          journalist: article.journalist,
          date: currentDate, // Set today's date for fetched articles
        });
      }

      // Add two more articles from the local array to the top articles
      const additionalTopArticles = updatedArticlesArray.filter((article) => article.date === currentDate).slice(0, 2);
      const allTopArticles = [...lastTwoArticles, ...additionalTopArticles];

      // Set the top articles state
      setTopArticles(allTopArticles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLastTwoArticlesFromContract();
  }, []);

  useEffect(() => {
    // Combine articles from contract and local array
    const combinedArticles = [...updatedArticlesArray, ...topArticles];
    setArticles(combinedArticles);
  }, [topArticles, updatedArticlesArray]);

  // State to store the filtered articles for "All articles" section
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    // Filter out articles that are already in topArticles
    const filtered = updatedArticlesArray.filter(article => !topArticles.find(topArticle => topArticle.id === article.id));
    setFilteredArticles(filtered);
  }, [topArticles, updatedArticlesArray]);

  // Function to filter articles by category
  const filterItems = (catItem) => {
    const updateItems = updatedArticlesArray.filter((curtItem) => curtItem.type === catItem && !topArticles.find(topArticle => topArticle.id === curtItem.id));
    setFilteredArticles(updateItems);
  };

  return (
    <div>
      <div id='top' className='Toparticles-container'>
        <div className="d-flex justify-content-between d-grid">
          <div className='Top-article align-items-center ms-5 my-4'>
            <span>Latest news</span>
          </div>
        </div>

        {/* Render top articles */}
        {topArticles.map((article, index) => (
          <React.Fragment key={article.id}>
            
<Tmp article={article} layout="right" />

            {index < topArticles.length - 1 && <div className="article-spacing"></div>}
          </React.Fragment>
        ))}
        <hr className="my-4 mx-auto custom-hr" style={{ borderTop: '1px solid black' }} />
      </div>

      <div className='Allarticles-container' id='all'>
        <div className="d-flex justify-content-between d-grid">
          <div className='d-flex Top-article justify-content-center align-items-center ms-5 mb-4'>
            <span>All articles</span>
          </div>
          <div className="dropdown-filter d-md-flex justify-content-md-end align-items-center me-5 mb-4">
            <button type="button" className="btn btn-dark dropdown-toggle px-4" data-bs-toggle="dropdown" aria-expanded="false">
              Filter
            </button>
            <ul className="dropdown dropdown-menu">
              <li><button className="dropdown-item" onClick={() => setFilteredArticles(filteredArticles)}>All</button></li>
              <li><button className="dropdown-item" onClick={() => filterItems("tech")}>Technology</button></li>
              <li><button className="dropdown-item" onClick={() => filterItems("education")}>Education</button></li>
            </ul>
          </div>
        </div>

        {/* Render filtered articles */}
        {filteredArticles.map((article, index) => (
          <React.Fragment key={article.id}>
            <Tmp article={article} layout="left" />
            {index < filteredArticles.length - 1 && <div className="article-spacing"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;