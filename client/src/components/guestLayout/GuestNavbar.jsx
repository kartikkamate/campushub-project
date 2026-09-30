import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Logo.png";

const GuestNavbar = () => {
  return (
    <>
      <style>{`
        /* =========================================
           CAMPUSHUB PREMIUM NAVBAR
        ========================================= */

        .premium-navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          padding: 18px 25px;
          pointer-events: none;
        }

        .premium-navbar {
          pointer-events: auto;
          max-width: 1400px;
          margin: auto;

          background: rgba(8, 12, 28, 0.72) !important;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);

          border: 1px solid rgba(255, 255, 255, 0.10);
          border-radius: 22px;

          padding: 10px 16px;

          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.30),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);

          transition: all 0.4s ease;
        }

        .premium-navbar:hover {
          border-color: rgba(139, 92, 246, 0.30);

          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.40),
            0 0 35px rgba(99, 102, 241, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.10);
        }


        /* =========================================
           BRAND
        ========================================= */

        .premium-brand {
          display: flex;
          align-items: center;
          gap: 12px;

          text-decoration: none !important;

          padding: 4px 10px 4px 4px !important;
        }

        .logo-container {
          position: relative;
          width: 48px;
          height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 15px;

          background:
            linear-gradient(
              135deg,
              rgba(99, 102, 241, 0.25),
              rgba(168, 85, 247, 0.18)
            );

          border: 1px solid rgba(255,255,255,0.12);

          box-shadow:
            0 0 25px rgba(99, 102, 241, 0.20);

          transition: all 0.4s ease;
        }

        .logo-container::before {
          content: "";

          position: absolute;
          inset: -2px;

          border-radius: 17px;

          background: linear-gradient(
            135deg,
            #6366f1,
            transparent 40%,
            #c084fc
          );

          opacity: 0.35;
          z-index: -1;

          filter: blur(5px);
        }

        .campus-logo {
          width: 38px;
          height: 38px;

          object-fit: cover;
          border-radius: 11px;

          transition: all 0.4s ease;
        }

        .premium-brand:hover .logo-container {
          transform: rotate(-4deg) scale(1.08);

          box-shadow:
            0 0 35px rgba(139, 92, 246, 0.45);
        }

        .premium-brand:hover .campus-logo {
          transform: scale(1.08);
        }


        /* =========================================
           BRAND TEXT
        ========================================= */

        .brand-content {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .brand-name {
          font-size: 23px;
          font-weight: 800;

          letter-spacing: -0.7px;

          background: linear-gradient(
            100deg,
            #ffffff 10%,
            #c4b5fd 55%,
            #a78bfa 90%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-name span {
          color: #8b5cf6;
          -webkit-text-fill-color: #8b5cf6;
        }

        .brand-tagline {
          margin-top: 4px;

          font-size: 8px;
          letter-spacing: 2px;
          font-weight: 600;

          color: rgba(255,255,255,0.45);

          text-transform: uppercase;
        }


        /* =========================================
           NAVIGATION
        ========================================= */

        .premium-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .premium-link {
          position: relative;

          color: rgba(255,255,255,0.68) !important;

          font-size: 14px;
          font-weight: 600;

          padding: 11px 15px !important;

          border-radius: 12px;

          transition:
            color 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }

        .premium-link:hover {
          color: #ffffff !important;

          background: rgba(255,255,255,0.06);

          transform: translateY(-1px);
        }


        /* =========================================
           ACTIVE LINK
        ========================================= */

        .premium-link.active {
          color: #ffffff !important;

          background:
            linear-gradient(
              135deg,
              rgba(99,102,241,0.18),
              rgba(168,85,247,0.12)
            );

          box-shadow:
            inset 0 0 0 1px rgba(139,92,246,0.12);
        }

        .premium-link.active::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: 5px;

          width: 18px;
          height: 2px;

          transform: translateX(-50%);

          border-radius: 20px;

          background: linear-gradient(
            90deg,
            #6366f1,
            #c084fc
          );

          box-shadow:
            0 0 10px rgba(139,92,246,0.8);
        }


        /* =========================================
           REGISTER
        ========================================= */

        .register-button {
          margin-left: 8px;

          border: 1px solid rgba(167,139,250,0.35) !important;

          background: rgba(139,92,246,0.07);

          color: #ddd6fe !important;
        }

        .register-button:hover {
          background: rgba(139,92,246,0.16);

          border-color: rgba(167,139,250,0.65) !important;

          box-shadow:
            0 0 20px rgba(139,92,246,0.12);
        }


        /* =========================================
           LOGIN BUTTON
        ========================================= */

        .login-button {
          margin-left: 5px;

          padding: 11px 20px !important;

          color: #ffffff !important;

          border-radius: 12px !important;

          background:
            linear-gradient(
              135deg,
              #6366f1,
              #8b5cf6 55%,
              #a855f7
            ) !important;

          border: none !important;

          box-shadow:
            0 8px 25px rgba(99,102,241,0.28);

          transition: all 0.35s ease !important;
        }

        .login-button:hover {
          transform: translateY(-2px);

          box-shadow:
            0 12px 35px rgba(139,92,246,0.45);

          background:
            linear-gradient(
              135deg,
              #7c3aed,
              #8b5cf6,
              #c084fc
            ) !important;
        }


        /* =========================================
           MOBILE TOGGLE
        ========================================= */

        .premium-toggle {
          border: 1px solid rgba(255,255,255,0.15) !important;

          border-radius: 12px !important;

          padding: 8px 10px !important;

          background: rgba(255,255,255,0.04);
        }

        .premium-toggle:focus {
          box-shadow:
            0 0 0 3px rgba(139,92,246,0.15) !important;
        }


        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 991px) {

          .premium-navbar-wrapper {
            padding: 12px;
          }

          .premium-navbar {
            border-radius: 18px;
          }

          .premium-nav {
            margin-top: 12px;

            padding: 12px;

            display: flex;

            background: rgba(255,255,255,0.035);

            border: 1px solid rgba(255,255,255,0.06);

            border-radius: 16px;
          }

          .premium-link {
            width: 100%;

            text-align: center;

            margin: 2px 0;
          }

          .premium-link.active::after {
            display: none;
          }

          .register-button,
          .login-button {
            margin: 5px 0 !important;
          }
        }


        @media (max-width: 576px) {

          .premium-navbar-wrapper {
            padding: 8px;
          }

          .premium-navbar {
            padding: 8px;
          }

          .logo-container {
            width: 43px;
            height: 43px;
          }

          .campus-logo {
            width: 34px;
            height: 34px;
          }

          .brand-name {
            font-size: 20px;
          }

          .brand-tagline {
            font-size: 7px;
          }
        }
      `}</style>


      {/* =========================================
          NAVBAR
      ========================================= */}

      <div className="premium-navbar-wrapper">

        <Navbar
          expand="lg"
          variant="dark"
          className="premium-navbar"
          collapseOnSelect
        >

          <Container fluid>

            {/* BRAND */}

            <Navbar.Brand
              as={NavLink}
              to="/home"
              className="premium-brand"
            >

              <div className="logo-container">

                <img
                  src={logo}
                  alt="CampusHub"
                  className="campus-logo"
                />

              </div>


              <div className="brand-content">

                <div className="brand-name">
                  Campus<span>Hub</span>
                </div>

                <div className="brand-tagline">
                  Connect • Learn • Grow
                </div>

              </div>

            </Navbar.Brand>


            {/* MOBILE MENU */}

            <Navbar.Toggle
              aria-controls="campushub-navbar"
              className="premium-toggle"
            />


            <Navbar.Collapse id="campushub-navbar">

              <Nav className="ms-auto premium-nav">


                <Nav.Link
                  as={NavLink}
                  to="/home"
                  className="premium-link"
                >
                  Home
                </Nav.Link>


                <Nav.Link
                  as={NavLink}
                  to="/about"
                  className="premium-link"
                >
                  About
                </Nav.Link>


                <Nav.Link
                  as={NavLink}
                  to="/services"
                  className="premium-link"
                >
                  Services
                </Nav.Link>


                <Nav.Link
                  as={NavLink}
                  to="/contact"
                  className="premium-link"
                >
                  Contact
                </Nav.Link>


                <Nav.Link
                  as={NavLink}
                  to="/register"
                  className="premium-link register-button"
                >
                  Register
                </Nav.Link>


                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className="premium-link login-button"
                >
                  Login →
                </Nav.Link>

              </Nav>

            </Navbar.Collapse>

          </Container>

        </Navbar>

      </div>
    </>
  );
};

export default GuestNavbar;