import React, { useState } from "react";
import { Carousel, Container, Row, Col, Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="campus-home">

      <style>{`

        /* =====================================================
           CAMPUSHUB PREMIUM HOME
        ===================================================== */

        * {
          box-sizing: border-box;
        }

        .campus-home {
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(99, 102, 241, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 20%,
              rgba(168, 85, 247, 0.14),
              transparent 30%
            ),
            #050816;

          color: white;
          overflow: hidden;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .hero-section {
          min-height: 100vh;
          position: relative;

          display: flex;
          align-items: center;

          background:
            linear-gradient(
              120deg,
              rgba(5, 8, 22, 0.95),
              rgba(18, 20, 55, 0.75),
              rgba(5, 8, 22, 0.9)
            );

          overflow: hidden;
        }

        .hero-section::before {
          content: "";

          position: absolute;

          width: 550px;
          height: 550px;

          top: -200px;
          left: -200px;

          border-radius: 50%;

          background: rgba(99, 102, 241, 0.15);

          filter: blur(80px);

          animation: floatingGlow 7s infinite alternate ease-in-out;
        }

        .hero-section::after {
          content: "";

          position: absolute;

          width: 450px;
          height: 450px;

          right: -150px;
          bottom: -150px;

          border-radius: 50%;

          background: rgba(168, 85, 247, 0.15);

          filter: blur(80px);

          animation: floatingGlow 8s infinite alternate-reverse ease-in-out;
        }

        @keyframes floatingGlow {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(80px, 50px);
          }
        }


        /* =====================================================
           HERO CONTENT
        ===================================================== */

        .hero-content {
          position: relative;
          z-index: 5;

          max-width: 1250px;

          margin: auto;

          padding: 150px 20px 100px;
        }

        .hero-badge {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding: 8px 16px;

          border-radius: 50px;

          background: rgba(255,255,255,0.06);

          border: 1px solid rgba(255,255,255,0.12);

          color: #c4b5fd;

          font-size: 13px;

          font-weight: 600;

          letter-spacing: 1px;

          backdrop-filter: blur(15px);

          margin-bottom: 25px;
        }

        .badge-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #8b5cf6;

          box-shadow:
            0 0 10px #8b5cf6;
        }

        .hero-title {
          font-size: clamp(48px, 7vw, 90px);

          line-height: 1.02;

          font-weight: 900;

          letter-spacing: -4px;

          margin-bottom: 25px;

          max-width: 850px;
        }

        .hero-title span {
          background:
            linear-gradient(
              90deg,
              #6366f1,
              #a855f7,
              #22d3ee
            );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

          background-clip: text;
        }

        .hero-description {
          max-width: 650px;

          font-size: 18px;

          line-height: 1.8;

          color: rgba(255,255,255,0.62);

          margin-bottom: 35px;
        }


        /* =====================================================
           HERO BUTTONS
        ===================================================== */

        .hero-buttons {
          display: flex;

          gap: 15px;

          flex-wrap: wrap;
        }

        .primary-button {
          padding: 14px 28px !important;

          border: none !important;

          border-radius: 14px !important;

          background:
            linear-gradient(
              135deg,
              #6366f1,
              #8b5cf6,
              #a855f7
            ) !important;

          color: white !important;

          font-weight: 700;

          box-shadow:
            0 12px 35px rgba(99,102,241,0.3);

          transition: all 0.35s ease !important;
        }

        .primary-button:hover {
          transform: translateY(-4px);

          box-shadow:
            0 18px 45px rgba(139,92,246,0.5);
        }

        .secondary-button {
          padding: 13px 27px !important;

          border-radius: 14px !important;

          border: 1px solid rgba(255,255,255,0.15) !important;

          background: rgba(255,255,255,0.05) !important;

          color: white !important;

          font-weight: 600;

          backdrop-filter: blur(15px);

          transition: all 0.35s ease !important;
        }

        .secondary-button:hover {
          background: rgba(255,255,255,0.10) !important;

          transform: translateY(-4px);
        }


        /* =====================================================
           HERO IMAGE CARD
        ===================================================== */

        .hero-image-wrapper {
          position: relative;

          padding: 15px;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              rgba(99,102,241,0.25),
              rgba(168,85,247,0.12),
              rgba(34,211,238,0.15)
            );

          border: 1px solid rgba(255,255,255,0.10);

          box-shadow:
            0 30px 80px rgba(0,0,0,0.45);

          transform: perspective(1200px) rotateY(-5deg);

          transition: all 0.5s ease;
        }

        .hero-image-wrapper:hover {
          transform:
            perspective(1200px)
            rotateY(0deg)
            translateY(-8px);
        }

        .hero-image {
          width: 100%;

          height: 480px;

          object-fit: cover;

          border-radius: 22px;

          display: block;
        }


        /* =====================================================
           FLOATING CARD
        ===================================================== */

        .floating-card {
          position: absolute;

          bottom: 30px;
          left: -30px;

          padding: 18px 22px;

          border-radius: 18px;

          background: rgba(12,15,35,0.85);

          border: 1px solid rgba(255,255,255,0.12);

          backdrop-filter: blur(20px);

          box-shadow:
            0 20px 50px rgba(0,0,0,0.35);

          animation: floatCard 4s infinite ease-in-out;
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        .floating-number {
          font-size: 25px;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #818cf8,
              #c084fc
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .floating-label {
          color: rgba(255,255,255,0.55);

          font-size: 12px;
        }


        /* =====================================================
           STATS
        ===================================================== */

        .stats-section {
          position: relative;

          margin-top: -35px;

          z-index: 10;

          padding: 0 20px;
        }

        .stats-container {
          max-width: 1100px;

          margin: auto;

          padding: 25px;

          border-radius: 24px;

          background: rgba(255,255,255,0.045);

          border: 1px solid rgba(255,255,255,0.09);

          backdrop-filter: blur(20px);

          box-shadow:
            0 25px 60px rgba(0,0,0,0.25);
        }

        .stat {
          text-align: center;

          padding: 10px;
        }

        .stat-number {
          font-size: 30px;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #818cf8,
              #c084fc
            );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;
        }

        .stat-text {
          color: rgba(255,255,255,0.5);

          font-size: 13px;
        }


        /* =====================================================
           SECTION
        ===================================================== */

        .premium-section {
          padding: 120px 20px;
        }

        .section-heading {
          text-align: center;

          max-width: 700px;

          margin: auto;

          margin-bottom: 60px;
        }

        .section-label {
          color: #a78bfa;

          font-size: 12px;

          letter-spacing: 3px;

          text-transform: uppercase;

          font-weight: 700;

          margin-bottom: 15px;
        }

        .section-title {
          font-size: clamp(35px, 5vw, 55px);

          font-weight: 800;

          letter-spacing: -2px;

          margin-bottom: 18px;
        }

        .section-title span {
          color: #a78bfa;
        }

        .section-description {
          color: rgba(255,255,255,0.55);

          line-height: 1.8;
        }


        /* =====================================================
           FEATURE CARDS
        ===================================================== */

        .feature-card {
          height: 100%;

          padding: 35px;

          border-radius: 22px !important;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.065),
              rgba(255,255,255,0.025)
            ) !important;

          border: 1px solid rgba(255,255,255,0.08) !important;

          color: white !important;

          backdrop-filter: blur(15px);

          transition: all 0.4s ease !important;

          overflow: hidden;

          position: relative;
        }

        .feature-card::before {
          content: "";

          position: absolute;

          width: 120px;
          height: 120px;

          top: -60px;
          right: -60px;

          border-radius: 50%;

          background: rgba(139,92,246,0.15);

          filter: blur(20px);
        }

        .feature-card:hover {
          transform: translateY(-10px);

          border-color:
            rgba(139,92,246,0.3) !important;

          box-shadow:
            0 25px 60px rgba(0,0,0,0.25),
            0 0 30px rgba(99,102,241,0.08);
        }

        .feature-icon {
          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 16px;

          font-size: 25px;

          background:
            linear-gradient(
              135deg,
              rgba(99,102,241,0.25),
              rgba(168,85,247,0.18)
            );

          border: 1px solid rgba(139,92,246,0.2);

          margin-bottom: 25px;
        }

        .feature-title {
          font-size: 20px;

          font-weight: 700;

          margin-bottom: 12px;
        }

        .feature-text {
          color: rgba(255,255,255,0.52);

          line-height: 1.7;

          font-size: 14px;

          margin: 0;
        }


        /* =====================================================
           CTA
        ===================================================== */

        .cta-section {
          padding: 100px 20px;
        }

        .cta-box {
          max-width: 1100px;

          margin: auto;

          padding: 80px 40px;

          text-align: center;

          border-radius: 30px;

          position: relative;

          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              rgba(99,102,241,0.22),
              rgba(168,85,247,0.18),
              rgba(34,211,238,0.10)
            );

          border: 1px solid rgba(255,255,255,0.12);

          box-shadow:
            0 30px 80px rgba(0,0,0,0.3);
        }

        .cta-box::before {
          content: "";

          position: absolute;

          width: 300px;
          height: 300px;

          top: -150px;
          left: -100px;

          background: rgba(139,92,246,0.2);

          border-radius: 50%;

          filter: blur(60px);
        }

        .cta-title {
          position: relative;

          font-size: clamp(35px,5vw,55px);

          font-weight: 800;

          letter-spacing: -2px;

          margin-bottom: 20px;
        }

        .cta-text {
          position: relative;

          max-width: 600px;

          margin: 0 auto 30px;

          color: rgba(255,255,255,0.6);

          line-height: 1.8;
        }


        /* =====================================================
           CAROUSEL
        ===================================================== */

        .carousel-item img {
          filter: brightness(0.65);
        }

        .carousel-caption {
          bottom: 18% !important;
        }

        .carousel-caption h3 {
          font-size: 50px;

          font-weight: 800;

          text-shadow:
            0 5px 30px rgba(0,0,0,0.7);
        }

        .carousel-caption p {
          font-size: 18px;

          color: rgba(255,255,255,0.8);
        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 991px) {

          .hero-content {
            padding-top: 130px;
          }

          .hero-image-wrapper {
            margin-top: 60px;

            transform: none;
          }

          .hero-image {
            height: 380px;
          }

          .floating-card {
            left: 15px;
          }

        }


        @media (max-width: 576px) {

          .hero-content {
            padding:
              120px
              20px
              70px;
          }

          .hero-title {
            letter-spacing: -2px;
          }

          .hero-description {
            font-size: 15px;
          }

          .hero-image {
            height: 300px;
          }

          .premium-section {
            padding: 80px 20px;
          }

          .cta-box {
            padding: 60px 25px;
          }

        }

      `}</style>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero-section">

        <Container className="hero-content">

          <Row className="align-items-center">

            {/* LEFT */}

            <Col lg={6}>

              <div className="hero-badge">
                <span className="badge-dot"></span>

                THE FUTURE OF CAMPUS CONNECTION
              </div>


              <h1 className="hero-title">

                Your Campus.
                <br />

                Your <span>Community.</span>

                <br />

                Your Future.

              </h1>


              <p className="hero-description">

                CampusHub brings students, events, services,
                opportunities and campus life together in one
                beautiful digital platform.

              </p>


              <div className="hero-buttons">

                <Button
                  as={NavLink}
                  to="/register"
                  className="primary-button"
                >
                  Get Started →
                </Button>


                <Button
                  as={NavLink}
                  to="/services"
                  className="secondary-button"
                >
                  Explore Campus
                </Button>

              </div>

            </Col>


            {/* RIGHT */}

            <Col lg={6}>

              <div className="hero-image-wrapper">

                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  interval={3500}
                  controls={false}
                  indicators={true}
                  fade
                >

                  <Carousel.Item>

                    <img
                      className="hero-image"
                      src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
                      alt="University Campus"
                    />

                    <Carousel.Caption>

                      <h3>Discover Your Campus</h3>

                      <p>
                        Everything you need, connected in one place.
                      </p>

                    </Carousel.Caption>

                  </Carousel.Item>


                  <Carousel.Item>

                    <img
                      className="hero-image"
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85"
                      alt="Students"
                    />

                    <Carousel.Caption>

                      <h3>Connect With Students</h3>

                      <p>
                        Build connections and create memories.
                      </p>

                    </Carousel.Caption>

                  </Carousel.Item>


                  <Carousel.Item>

                    <img
                      className="hero-image"
                      src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=85"
                      alt="Campus Life"
                    />

                    <Carousel.Caption>

                      <h3>Experience Campus Life</h3>

                      <p>
                        Events, services and opportunities at your fingertips.
                      </p>

                    </Carousel.Caption>

                  </Carousel.Item>

                </Carousel>


                <div className="floating-card">

                  <div className="floating-number">
                    24/7
                  </div>

                  <div className="floating-label">
                    Campus Access
                  </div>

                </div>

              </div>

            </Col>

          </Row>

        </Container>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="stats-section">

        <div className="stats-container">

          <Row>

            <Col xs={6} md={3}>
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-text">Students</div>
              </div>
            </Col>


            <Col xs={6} md={3}>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-text">Events</div>
              </div>
            </Col>


            <Col xs={6} md={3}>
              <div className="stat">
                <div className="stat-number">100+</div>
                <div className="stat-text">Services</div>
              </div>
            </Col>


            <Col xs={6} md={3}>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-text">Connected</div>
              </div>
            </Col>

          </Row>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="premium-section">

        <Container>

          <div className="section-heading">

            <div className="section-label">
              Why CampusHub
            </div>

            <h2 className="section-title">
              Everything your <span>campus</span> needs.
            </h2>

            <p className="section-description">

              A single platform designed to make student life
              easier, smarter and more connected.

            </p>

          </div>


          <Row className="g-4">

            <Col md={6} lg={3}>

              <Card className="feature-card">

                <div className="feature-icon">
                  🎓
                </div>

                <h3 className="feature-title">
                  Student Hub
                </h3>

                <p className="feature-text">
                  Connect with students, discover communities
                  and stay involved in campus life.
                </p>

              </Card>

            </Col>


            <Col md={6} lg={3}>

              <Card className="feature-card">

                <div className="feature-icon">
                  🎉
                </div>

                <h3 className="feature-title">
                  Campus Events
                </h3>

                <p className="feature-text">
                  Discover upcoming events, workshops,
                  celebrations and activities.
                </p>

              </Card>

            </Col>


            <Col md={6} lg={3}>

              <Card className="feature-card">

                <div className="feature-icon">
                  🚀
                </div>

                <h3 className="feature-title">
                  Opportunities
                </h3>

                <p className="feature-text">
                  Find internships, projects, clubs and
                  opportunities to grow your career.
                </p>

              </Card>

            </Col>


            <Col md={6} lg={3}>

              <Card className="feature-card">

                <div className="feature-icon">
                  💡
                </div>

                <h3 className="feature-title">
                  Smart Services
                </h3>

                <p className="feature-text">
                  Access useful campus services through
                  one simple and modern platform.
                </p>

              </Card>

            </Col>

          </Row>

        </Container>

      </section>


      {/* =====================================================
          EXISTING SECTIONS
      ===================================================== */}

      <About />

      <Services />


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cta-section">

        <div className="cta-box">

          <h2 className="cta-title">
            Ready to experience
            <br />
            <span>CampusHub?</span>
          </h2>

          <p className="cta-text">

            Join the next generation of connected campus
            communities and make your student journey
            more meaningful.

          </p>

          <Button
            as={NavLink}
            to="/register"
            className="primary-button"
          >
            Join CampusHub →
          </Button>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <Contact />

    </div>
  );
};

export default Home;