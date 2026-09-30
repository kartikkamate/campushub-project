import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HouseFill,
  PersonFill,
  BookFill,
  ClipboardCheck,
  FileEarmarkTextFill,
  BoxSeamFill,
  BellFill,
  GearFill,
  BoxArrowRight,
} from "react-bootstrap-icons";

import logo from "../../Assets/Logo.png";

const UserNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setExpanded(false);

  const handleLogout = () => {
    closeMenu();
    navigate("/login");
  };

  const navItems = [
    {
      name: "Home",
      path: "/user/home",
      icon: <HouseFill />,
    },
    {
      name: "Student",
      path: "/user/profile",
      icon: <PersonFill />,
    },
    {
      name: "Academic",
      path: "/user/notes",
      icon: <BookFill />,
    },
    {
      name: "Exam",
      path: "/user/exam",
      icon: <ClipboardCheck />,
    },
    {
      name: "Applications",
      path: "/user/application",
      icon: <FileEarmarkTextFill />,
    },
    {
      name: "View Items",
      path: "/user/viewitem",
      icon: <BoxSeamFill />,
    },
  ];

  return (
    <>
      <style>{`
        /* ===============================
           CAMPUSHUB PREMIUM NAVBAR
        =============================== */

        .campus-navbar {
          position: sticky;
          top: 0;
          z-index: 1050;
          padding: 12px 0;
          background: rgba(8, 15, 30, 0.88) !important;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 8px 30px rgba(0,0,0,0.20);
          transition: all 0.3s ease;
        }

        .campus-navbar::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #00d4ff,
            #7c3aed,
            #ff4ecd,
            transparent
          );
          opacity: 0.7;
        }

        /* LOGO */

        .campus-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none !important;
          margin-right: 30px;
        }

        .logo-wrapper {
          position: relative;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: linear-gradient(
            135deg,
            #00d4ff,
            #6366f1,
            #a855f7
          );
          padding: 2px;
          box-shadow:
            0 0 20px rgba(0,212,255,0.25);
          transition: all 0.35s ease;
        }

        .logo-wrapper::before {
          content: "";
          position: absolute;
          inset: -5px;
          border-radius: 18px;
          border: 1px solid rgba(0,212,255,0.25);
          opacity: 0;
          transition: 0.3s;
        }

        .logo-wrapper:hover {
          transform: translateY(-2px) rotate(-2deg);
          box-shadow:
            0 0 30px rgba(0,212,255,0.45);
        }

        .logo-wrapper:hover::before {
          opacity: 1;
        }

        .campus-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 13px;
          background: #fff;
        }

        /* BRAND TEXT */

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .brand-title {
          font-size: 23px;
          font-weight: 800;
          letter-spacing: -0.5px;
          background: linear-gradient(
            90deg,
            #ffffff,
            #6ee7ff,
            #a78bfa
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-subtitle {
          font-size: 9px;
          margin-top: 5px;
          color: #8da2c5;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
        }

        /* NAVIGATION */

        .campus-nav {
          gap: 4px;
          align-items: center;
        }

        .campus-nav-link {
          position: relative;
          display: flex !important;
          align-items: center;
          gap: 7px;
          padding: 10px 13px !important;
          margin: 0 2px;
          border-radius: 12px;
          color: #aebbd1 !important;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition:
            color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }

        .campus-nav-link svg {
          font-size: 14px;
          transition: transform 0.25s ease;
        }

        .campus-nav-link:hover {
          color: #ffffff !important;
          background: rgba(255,255,255,0.07);
          transform: translateY(-1px);
        }

        .campus-nav-link:hover svg {
          transform: scale(1.15);
        }

        .campus-nav-link.active {
          color: #ffffff !important;
          background: linear-gradient(
            135deg,
            rgba(0,212,255,0.16),
            rgba(124,58,237,0.18)
          );
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.07);
        }

        .campus-nav-link.active::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 3px;
          width: 22px;
          height: 3px;
          transform: translateX(-50%);
          border-radius: 10px;
          background: linear-gradient(
            90deg,
            #00d4ff,
            #8b5cf6
          );
          box-shadow: 0 0 10px rgba(0,212,255,0.7);
        }

        /* RIGHT ACTIONS */

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: 15px;
        }

        .icon-button {
          position: relative;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          color: #b9c7dc;
          background: rgba(255,255,255,0.04);
          transition: all 0.3s ease;
        }

        .icon-button:hover {
          color: #fff;
          background: rgba(255,255,255,0.10);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .notification-dot {
          position: absolute;
          top: 7px;
          right: 7px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff4d67;
          box-shadow: 0 0 8px #ff4d67;
        }

        /* PROFILE */

        .profile-dropdown {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
        }

        .profile-button {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 5px 10px 5px 5px;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 30px;
          background: rgba(255,255,255,0.05);
          color: white;
          transition: 0.3s ease;
        }

        .profile-button:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.18);
        }

        .profile-avatar {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #00d4ff,
            #6366f1,
            #a855f7
          );
          color: white;
          font-weight: 800;
          font-size: 14px;
          box-shadow: 0 0 15px rgba(99,102,241,0.35);
        }

        .profile-name {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
        }

        .profile-role {
          display: block;
          font-size: 9px;
          color: #8193b2;
          text-align: left;
          margin-top: 1px;
        }

        /* DROPDOWN */

        .premium-dropdown {
          margin-top: 12px !important;
          padding: 8px !important;
          min-width: 210px;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-radius: 15px !important;
          background: rgba(12,21,39,0.97) !important;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
        }

        .premium-dropdown .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          color: #b9c7dc;
          font-size: 13px;
          transition: 0.2s ease;
        }

        .premium-dropdown .dropdown-item:hover {
          color: #fff;
          background: rgba(255,255,255,0.07);
        }

        .premium-dropdown .logout-item:hover {
          color: #ff6b81;
          background: rgba(255,75,103,0.08);
        }

        /* MOBILE */

        .navbar-toggler {
          border: 1px solid rgba(255,255,255,0.15) !important;
          border-radius: 10px !important;
          padding: 7px 9px !important;
        }

        .navbar-toggler:focus {
          box-shadow: 0 0 0 2px rgba(0,212,255,0.2) !important;
        }

        @media (max-width: 1200px) {
          .campus-nav-link {
            padding: 9px 9px !important;
            font-size: 13px;
          }

          .brand-title {
            font-size: 20px;
          }
        }

        @media (max-width: 991px) {
          .campus-navbar {
            padding: 10px 0;
          }

          .campus-nav {
            padding-top: 15px;
            gap: 4px;
          }

          .campus-nav-link {
            width: 100%;
            padding: 12px 15px !important;
          }

          .campus-nav-link.active::after {
            left: 5px;
            bottom: 50%;
            width: 3px;
            height: 20px;
            transform: translateY(50%);
          }

          .navbar-actions {
            margin: 12px 0 0;
            padding-top: 12px;
            border-top: 1px solid rgba(255,255,255,0.08);
          }

          .profile-name,
          .profile-role {
            display: block;
          }
        }

        @media (max-width: 576px) {
          .brand-title {
            font-size: 18px;
          }

          .brand-subtitle {
            font-size: 7px;
          }

          .logo-wrapper {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>

      <Navbar
        expanded={expanded}
        onToggle={setExpanded}
        expand="lg"
        variant="dark"
        className="campus-navbar"
      >
        <Container fluid="xl">

          {/* BRAND */}
          <Navbar.Brand
            as={NavLink}
            to="/user/home"
            className="campus-brand"
            onClick={closeMenu}
          >
            <div className="logo-wrapper">
              <img
                src={logo}
                alt="CampusHub"
                className="campus-logo"
              />
            </div>

            <div className="brand-text">
              <span className="brand-title">
                CampusHub
              </span>

              <span className="brand-subtitle">
                Student Portal
              </span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="campushub-navbar"
            aria-label="Toggle navigation"
          />

          <Navbar.Collapse id="campushub-navbar">

            {/* NAV LINKS */}
            <Nav className="campus-nav me-auto">

              {navItems.map((item) => (
                <Nav.Link
                  key={item.path}
                  as={NavLink}
                  to={item.path}
                  className="campus-nav-link"
                  onClick={closeMenu}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Nav.Link>
              ))}

            </Nav>

            {/* RIGHT SIDE */}
            <div className="navbar-actions">

              {/* Notifications */}
              <button
                className="icon-button"
                type="button"
                title="Notifications"
              >
                <BellFill />
                <span className="notification-dot"></span>
              </button>

              {/* Profile */}
              <Dropdown align="end">
                <Dropdown.Toggle
                  className="profile-dropdown"
                  id="profile-dropdown"
                >
                  <div className="profile-button">
                    <div className="profile-avatar">
                      U
                    </div>

                    <div className="d-none d-md-block">
                      <div className="profile-name">
                        Student
                      </div>

                      <span className="profile-role">
                        CampusHub User
                      </span>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu className="premium-dropdown">

                  <Dropdown.Item
                    as={NavLink}
                    to="/user/profile"
                    onClick={closeMenu}
                  >
                    <PersonFill />
                    My Profile
                  </Dropdown.Item>

                  <Dropdown.Item
                    as={NavLink}
                    to="/user/help"
                    onClick={closeMenu}
                  >
                    <GearFill />
                    Settings
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item
                    className="logout-item"
                    onClick={handleLogout}
                  >
                    <BoxArrowRight />
                    Logout
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>

            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default UserNavbar;