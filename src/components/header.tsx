// components/Navbar.tsx
"use client"
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const marginLeft = {
    lg: "25vw",
    xs: "0"
  };
  const marginRight = {
    lg: "25vw",
    xs: "0"
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
      display: "flex",
      justifyContent: "space-around",
      marginLeft: marginLeft.lg,
      marginRight: marginRight.lg,
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    }}>
      <style>{`
        @media (max-width: 768px) {
          nav {
            margin-left: ${marginLeft.xs} !important;
            margin-right: ${marginRight.xs} !important;
          }
        }
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #0d6efd;
          transition: width 0.3s ease;
        }
        .nav-link:hover:after {
          width: 100%;
        }
        .navbar-brand {
          transition: transform 0.3s ease;
        }
        .navbar-brand:hover {
          transform: scale(1.05);
        }
        .btn-primary {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.2);
        }
      `}</style>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <span className="fw-bold">Reuben</span>Golden
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav" style={{
                  width: "100%",
        }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/faqs" className="nav-link">Faqs</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
                          <Link href="/register" className="btn btn-primary" style={{
                  marginLeft:"5vw"
              }}>Get Started</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;