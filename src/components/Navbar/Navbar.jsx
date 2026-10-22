import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate import kiya
import './Navbar.css';
import Logo from '../../assets/Kaamdaar_Primary_Logo_400x137.png'; 

const Navbar = () => {
  const navigate = useNavigate();
  
  // Check karein ki user login hai ya nahi
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Login status hatao
    localStorage.removeItem('userPhone');  // Number hatao
   // alert("Logged out successfully!");
    navigate('/'); // Home page par wapas bhejo
    window.location.reload(); // Page refresh karo taaki Navbar update ho jaye
  };

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">
            <img src={Logo} alt="Kaamdaar-Logo" style={{ height: '60px', objectFit: 'contain' }} />
          </span>
        </Link>

        {/* Links */}
        <ul className="navbar__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Services</Link></li>
          <li><Link to="/my-bookings">My Bookings</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>

        {/* Right Side: Auth Buttons */}
        <div className="navbar__auth">
          {isLoggedIn ? (
            // Agar login hai, toh Logout button dikhao
            <button onClick={handleLogout} className="navbar__logout-btn">
              Logout
            </button>
          ) : (
            // Agar login nahi hai, toh Login/Signup dikhao
            <>
              <Link to="/login" className="navbar__login">Login</Link>
              <Link to="/login" className="navbar__signup">Sign Up</Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;