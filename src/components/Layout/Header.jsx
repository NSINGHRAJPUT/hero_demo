import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/icons/logo.svg'

const dropdownStyles = {
  position: 'absolute',
  top: '100%',
  left: 0,
  zIndex: 1000,
  display: 'none',
  float: 'left',
  minWidth: '160px',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  padding: '12px 16px',
  backgroundColor: '#f9f9f9',
  color: '#333',
  textDecoration: 'none',
};

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleHover = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="container-fluid bg-transparent text-dark py-2 h-10 w-100">
      <div className="row align-items-center justify-content-around w-60">
        <div className="col-auto w-20 ms-3">
          <img
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </div>
        <div className="col-auto w-65">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a href="#heading1" className="nav-link ms-3 me-3" onMouseEnter={handleHover}>
              Company
            </a>
            <div
              className={`bg-light mask flex-center rgba-red-strong ${isDropdownVisible ? 'visible' : 'hidden'}`}
              style={dropdownStyles}
              onMouseLeave={handleHover}
            >
              <a className="dropdown-item" href="#sublink1">
                Company
              </a>
              <a className="dropdown-item" href="#sublink2">
                Services
              </a>
              <a className="dropdown-item" href="#sublink3">
                Solutions
              </a>
              <a className="dropdown-item" href="#sublink4">
                Industries
              </a>
              <a className="dropdown-item" href="#sublink5">
                Insights
              </a>
            </div>
            <a href="#heading2" className="nav-link ms-3 me-3">
              Services
            </a>
            <a href="#heading3" className="nav-link ms-3 me-3">
              Solutions
            </a>
            <a href="#heading4" className="nav-link ms-3 me-3">
              Industries
            </a>
            <a href="#heading5" className="nav-link ms-3 me-3">
              Insights
            </a>
            <a href="#heading6" className="nav-link ms-3 me-3">
              News And Media
            </a>
          </nav>
        </div>
        <div className="col-auto w-15 me-5">
          <button className="btn btn-outline-dark me-3">Request Quote</button>
          <button className="demo_btn p-1 ms-3">Join Now</button>
        </div>
      </div>
    </header>
  );
};


export default Header;
