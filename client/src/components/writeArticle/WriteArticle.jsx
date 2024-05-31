
import React,{ useState, useEffect, useRef } from 'react';
// import {useDropzone} from 'react-dropzone';
import contract from "../../contracts/newscontract.json";
// Importing from the main entry point
import { ethers } from "ethers";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import axios from 'axios';
import FormData from 'form-data';
import { CID } from 'multiformats/cid';
import * as raw from 'multiformats/codecs/raw';
import { sha256 } from 'multiformats/hashes/sha2';
import './writearticle.scss'; // Import your CSS file for styling
// import {useStorageUpload, MediaRenderer} from "@thirdweb-dev/react";
// import { useContractWrite, useContractRead, useContractEvent } from "@thirdweb-dev/react";
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


 

 

  const WriteArticle = () => {
    const [currentAccount, setCurrentAccount] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [ipfshash, setIpfshash] = useState('');
    const [content, setContent] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [articles, setArticles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
  
    const filePickerRef = useRef(null);
  
    const pinFileToIPFS = async (file) => {
      try {
        const unit8array = new Uint8Array(await file.arrayBuffer());
        const bytes = raw.encode(unit8array);
        const hash = await sha256.digest(bytes);
        const cid = CID.create(1, raw.code, hash);
        const cidString = cid.toString();
        console.log("CID:", cidString);
  
        // Set the CID as the value of ipfshash state
        setIpfshash(`https://gateway.pinata.cloud/ipfs/${cidString}`);
  
        // Upload the file to Pinata Cloud
        const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
        const pinataJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkYmZkZDYwYy0yMTI2LTQ3YWEtYjFiMy1kZmU4YjM2NTA2YzkiLCJlbWFpbCI6Im1pbWlub3VyMTgxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJlNzA5ZjA4YmM0OGZhMGM2YzNhNCIsInNjb3BlZEtleVNlY3JldCI6ImU0M2E5M2NlNDEwMDNlOGY4ZmVhM2MwNWFmYjVlOTUxNmI3MDNhZTgwY2FmMjYzMzFhNWJmZTJmYmZlYzZhZDAiLCJpYXQiOjE3MTcxMDkyNzN9.vr55XsuXiNa8W4S6EgLa68xcduR8AHA7ksvLLYFmP3o';
        
        let data = new FormData();
        data.append('file', file);
  
        const response = await axios.post(url, data, {
          maxBodyLength: 'Infinity',
          headers: {
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            'Authorization': `Bearer ${pinataJWT}`
          }
        });
  
        console.log("IpfsHash:", response.data.IpfsHash);
        return response.data.IpfsHash;
      } catch (error) {
        console.error("Error uploading file: ", error);
        throw error;
      }
    };
  
    const addImageToPost = async (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
      try {
        const ipfsUrl = await pinFileToIPFS(file);
        setIpfshash(ipfsUrl);
      } catch (error) {
        console.error("Error uploading file: ", error);
      }
    };
  
    const checkWalletIsConnected = async () => {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Get MetaMask!");
        return;
      } else {
        console.log("Wallet exists! We're ready to go");
      }
  
      try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account: ", account);
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found");
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    const connectWalletHandler = async () => {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
  
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Found an account! Address: ", accounts[0]);
        setCurrentAccount(accounts[0]);
      } catch (err) {
        console.log(err);
      }
    };
  
    const PublishArticle = async () => {
      // Check if all required fields are filled
      if (!title || !description || !type || !content ) {
        alert("Please fill in all fields before publishing.");
        return;
      }
    
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);     
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        const transaction = await contract.addArticle(
          title,
          description,
          type,
          content,
          ipfshash
        );
        console.log("Article published:", transaction);
    
        contract.once("ArticlePublished", async () => {
          console.log("ArticlePublished event detected");
          await fetchArticles();
        });
      } catch (err) {
        console.log(err);
      }
    };
    
  
    const fetchArticles = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const articleCount = await contract.articleCount();
        const articlesArray = [];
  
        for (let i = 0; i < articleCount; i++) {
          const article = await contract.articles(i);
          articlesArray.push({
            id: article.id,
            title: article.title,
            description: article.description,
            type: article.articleType,
            content: article.content,
            ipfsHash: article.ipfsHash
          });
        }
  
        setArticles(articlesArray);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      checkWalletIsConnected();
      fetchArticles();
    }, []);
  
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleTypeChange = (e) => setType(e.target.value);
    const handleContentChange = (value) => setContent(value);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
  
    return (
      <div className="write-article-container" id="writearticlepage">
        <div className="page-header">
          <h1 className="page-title">Write Your Article</h1>
          <p className="page-subtitle">Share your Realities with the World...</p>
        </div>
        <div className="write-article-header">
          <input
            type="text"
            placeholder="Title of article"
            className="article-title-input"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="Description of article"
            className="article-title-input"
            value={description}
            onChange={handleDescriptionChange}
          />
          <input
            type="text"
            placeholder="Type of article"
            className="article-title-input"
            value={type}
            onChange={handleTypeChange}
          />
          <div className="upload-icon" onClick={() => filePickerRef.current.click()}>
            <input
              type="file"
              hidden
              onChange={addImageToPost}
              ref={filePickerRef}
            />
            Upload Picture
          </div>
          {ipfshash && <img src={ipfshash} alt="Selected" className="selected-image" />}
        </div>
        <div className={`write-article-content ${isFocused || content.trim() ? 'focused' : ''}`}>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContentChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Write your article..."
            style={{ height: '400px' }} // Adjust the height as needed
          />
        </div>
        <div className="publish-button-container">
          <button type="button" className="btn btn-outline-danger" onClick={PublishArticle}>Publish</button>
        </div>
      </div>
    );
  };
  
  export default WriteArticle;