import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Components.css";
import svg from './images/svg.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="Mainnav">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <div className="logo-container">
                <i className="fa-brands fa-pied-piper fa-3x" style={{color:'#AD88C6'}}></i>
                <h1 className="logo-text">Travel Tribe</h1>
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={toggleMenu}
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" style={{ fontSize: '1rem' }}>
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link mt-lg-3" activeClassName="active" onClick={toggleMenu}>
                      <i className="fa-solid fa-house-circle-check"></i> Home
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      to="/"
                      className="nav-link dropdown-toggle mt-lg-3"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      activeClassName="active"
                      onClick={toggleMenu}
                    >
                      <i className="fa-brands fa-servicestack"></i> Our Packages
                    </NavLink>
                    <ul className="dropdown-menu dropdown-menu-end w-200 mt-2" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink to="/populardestinations" className="dropdown-item" activeClassName="active" onClick={toggleMenu}>
                          <i className="fa-solid fa-map-location-dot"></i> Popular Destinations
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/bookdestinations" className="dropdown-item" activeClassName="active" onClick={toggleMenu}>
                          <i className="fa-brands fa-elementor"></i>  Event Destinations
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/custompackages" className="dropdown-item" activeClassName="active" onClick={toggleMenu}>
                          <i className="fa-solid fa-sliders"></i>  Custom Packages
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/student" className="nav-link mt-lg-3" activeClassName="active" onClick={toggleMenu}>
                      <i className="fa-solid fa-user-tag"></i> Student Offers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/otherservices" className="nav-link mt-lg-3" activeClassName="active" onClick={toggleMenu}>
                      <i className="fa-solid fa-bars-progress"></i> Other Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/aboutus" className="nav-link mt-lg-3" activeClassName="active" onClick={toggleMenu}>
                      <i className="fa-brands fa-square-pied-piper"></i>  About us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link mt-lg-3" activeClassName="active" onClick={toggleMenu}>
                      <i className="fa-regular fa-user"></i>
                    </NavLink>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit" >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
