import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { BiUser } from 'react-icons/bi';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();  // Use the useNavigate hook

  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedAddress) {
      setWalletAddress(savedAddress);
    }
  }, []);

  async function requestAccount() {
    console.log('Requesting account....');

    if (window.ethereum) {
      console.log('MetaMask detected.');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          localStorage.setItem("walletAddress", accounts[0]);
        }
        console.log('Wallet connected:', accounts);
      } catch (error) {
        console.error('Error connecting wallet:', error.message);
      }
    } else {
      console.log('MetaMask not detected.');
    }
  }

  const handleDisconnect = () => {
    setWalletAddress("");
    localStorage.removeItem("walletAddress");
    navigate('/');  // Navigate to the home page on disconnect
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <span className="navbar-brand">News 3.0</span>
        <div className={`navbar-menu collapse navbar-collapse${toggleMenu ? ' show' : ''}`} id="navbarNav">
          <div className="navbar-nav">
            <Link to="/#top" className="nav-link">Latest Articles</Link>
            <Link to="/#all" className="nav-link">All Articles</Link>
          </div>
        </div>
        <div className="navbar-right">
          {walletAddress ? (
            <div className='align-items-center d-flex'>
              <Link to="/write" className="btn btn-light me-3">Write</Link>
              <div className="dropdown">
                <i className="bi bi-person-circle text-white" style={{ fontSize: '24px', cursor: 'pointer' }} onClick={() => setToggleMenu(!toggleMenu)}></i>
                {toggleMenu && (
                  <div className="dropdown-menu show" >
                    <div className="dropdown-item text-nowrap">
                      Address: {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
                    </div>
                    <div className="dropdown-item" onClick={handleDisconnect}>Disconnect</div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button type="button" className="btn btn-outline-danger" onClick={requestAccount}style={{ fontSize: '1rem', padding: '0.4rem 0.7rem', }}>Connect</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
