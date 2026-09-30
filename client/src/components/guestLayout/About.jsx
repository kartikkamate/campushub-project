import React from "react";

const About = () => {
  return (
    <>
      <style>
        {`
        /* About Section Styles */
        .about-section {
          padding: 80px 0;
          background: radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%);  /* Gradient background */
          color: white;
          opacity: 0;
          animation: fadeIn 1s forwards; /* Fade-in effect for section */
        }

        .about-section .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Section Title */
        .section-title h2 {
          font-size: 38px;
          font-weight: 700;
          margin-bottom: 20px;
          text-transform: uppercase;
          color: #4a90e2;
          transition: transform 0.3s ease, color 0.3s ease;
          animation: fadeIn 1s forwards; /* Fade-in effect for section title */
        }

        .section-title h2:hover {
          transform: scale(1.1); /* Slightly scale up on hover */
          color: #ff8c00; /* Change color to orange on hover */
        }

        .section-title p {
          font-size: 18px;
          color: #9e9e9e;
          text-align: center;
          margin-bottom: 40px;
          transition: color 0.2s ease;
          animation: fadeIn 1s forwards 0.5s; /* Fade-in effect for paragraph */
        }

        .section-title p:hover {
          color: #ff8c00; /* Change paragraph color to orange when hovered */
        }

        .f-para {
          font-style: italic;
          font-weight: 300;
          color: #845454;
          transition: transform 0.2s ease;
          animation: fadeIn 1s forwards 1s; /* Fade-in effect for f-para */
        }

        .f-para:hover {
          transform: scale(1.05); /* Slight scale up on hover */
        }

        /* About Video */
        .about-video {
          margin-bottom: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          transition: box-shadow 0.2s ease, transform 0.3s ease;
          opacity: 0;
          transform: translateY(50px); /* Start position (50px below) */
          animation: fadeIn 1s forwards 1.5s, slideUp 1s forwards 1.5s; /* Fade-in and slide-up effect */
        }

        .about-video:hover {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
          transform: scale(1.05) rotate(3deg); /* Scale up and slightly rotate */
        }

        .about-video iframe {
          width: 100%;
          height: 315px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
          opacity: 0;
          animation: fadeIn 1s forwards 2s;
        }

        .about-video:hover iframe {
          transform: scale(1.05); /* Apply scale effect on hover */
        }

        /* About Text */
        .about-text {
          padding-left: 30px;
          margin-top: 30px;
          opacity: 0;
          animation: fadeIn 1s forwards 2.0s; /* Fade-in effect for the text */
        }

        .about-text h3 {
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #4a3563;
          transition: transform 0.2s ease, color 0.3s ease;
        }

        .about-text h3:hover {
          transform: translateX(10px); /* Slide text on hover */
          color: #ff8c00; /* Change color to orange on hover */
        }

        .about-text p {
          font-size: 18px;
          line-height: 1.8;
          color: #634d4d;
          transition: transform 0.2s ease, color 0.3s ease;
        }

        .about-text p:hover {
          transform: scale(1.05); /* Slight scale on hover */
          color: #ff8c00; /* Change color on hover */
        }

        .features-list {
          list-style: none;
          padding: 0;
        }

        .features-list li {
          font-size: 16px;
          color: #f1f1f1;
          margin-bottom: 12px;
          transition: transform 0.2s ease;
        }

        .features-list li:hover {
          transform: translateX(5px); /* Slight slide on hover */
        }

        .features-list li .icon_check {
          color: #00bfae;
          margin-right: 10px;
          transition: color 0.2s ease;
        }

        .features-list li:hover .icon_check {
          color: #ff8c00; /* Change color of check icon on hover */
        }

        /* CTA Button */
        .cta-button {
          display: inline-block;
          padding: 15px 25px;
          background-color: #ff8c00;
          color: white;
          text-transform: uppercase;
          font-weight: 600;
          border-radius: 50px;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.3s ease;
          animation: fadeIn 1s forwards 3s; /* Fade-in effect for CTA button */
        }

        .cta-button:hover {
          background-color: #d47700;
          transform: scale(1.1); /* Scale up on hover */
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .about-video iframe {
            height: 250px;
          }
          .section-title h2 {
            font-size: 30px;
          }
          .about-text h3 {
            font-size: 22px;
          }
          .about-text p {
            font-size: 14px;
          }
          .features-list li {
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          .about-video iframe {
            height: 220px;
          }
          .about-text {
            padding-left: 0;
          }
          .about-text h3 {
            font-size: 20px;
          }
          .about-text p {
            font-size: 14px;
          }
          .features-list li {
            font-size: 14px;
          }
        }

        /* Fade-In Animation */
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* Slide-Up Animation */
        @keyframes slideUp {
          0% {
            transform: translateY(50px); /* Start 50px below */
          }
          100% {
            transform: translateY(0); /* End at normal position */
          }
        }
        `}
      </style>

      <section className="about-section spad">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2>About Us: Revolutionizing the Event Industry</h2>
                <p className="f-para">
                  We believe in making your events extraordinary. From interactive
                  experiences to world-class speakers, we create events that leave
                  lasting impressions. Join us as we take your event to the next
                  level!
                </p>
              </div>
            </div>
          </div>

          {/* About Video and Text */}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-video">
                {/* Embed YouTube Video */}
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/90JReNIDMlU?si=sUa0ZcVy1X1NvkVB" 
                  title="Event Overview Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-text">
                <h3>The 2025 Conference: Where Ideas Meet Reality</h3>
                <p>
                 🎓 Academics — courses, subjects, notes, assignments, results
 Study Resources — notes, previous question papers, PDFs, tutorials
 Events & Notices — college events, workshops, fests, announcements
 Campus Community — discussions, questions, student posts
 Internships & Jobs — opportunities and placement information
 Mentorship — connect juniors with seniors, alumni, and experts
 Campus Marketplace — books, electronics, calculators, etc.
 Achievements — certificates, projects, competitions, awards
 Campus AI — ask questions about uploaded study material and get grounded answers
 Student Tools — GPA/CGPA, attendance, timetable and study planner
 What would make YOUR CampusHub special?
                </p>
                <ul className="features-list">
                  <li>
                    <span className="icon_check"></span> Tailored Event Planning
                  </li>
                  <li>
                    <span className="icon_check"></span> Interactive Experiences
                  </li>
                  <li>
                    <span className="icon_check"></span> Networking Opportunities
                  </li>
                  <li>
                    <span className="icon_check"></span> World-Class Speakers
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="row text-center mt-5">
            <div className="col-lg-12">
              <a href="/contact" className="cta-button">
                Get in Touch & Start Planning Your Event!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;