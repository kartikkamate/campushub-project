import React from "react";

const Services = () => {
  return (
    <>
      <style>
        {`
        /* Services Section Styles */
        .services-section {
          padding: 80px 0;
          background: radial-gradient(circle at 10% 20%, rgb(222, 248, 248) 0%, rgb(249, 232, 232) 90%);
          color: #333;
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .services-section .container {
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
          animation: fadeIn 1s forwards;
        }

        .section-title h2:hover {
          transform: scale(1.1);
          color: #ff8c00;
        }

        .section-title p {
          font-size: 18px;
          color: #9e9e9e;
          text-align: center;
          margin-bottom: 40px;
          transition: color 0.2s ease;
          animation: fadeIn 1s forwards 0.5s;
        }

        .section-title p:hover {
          color: #ff8c00;
        }

        /* Services Cards */
        .service-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          transform: translateY(50px);
          animation: fadeIn 1s forwards 1s, slideUp 1s forwards 1s;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .service-icon {
          font-size: 50px;
          color: #4a90e2;
          margin-bottom: 20px;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.2) rotate(10deg);
          color: #ff8c00;
        }

        .service-card h3 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #4a3563;
          transition: color 0.3s ease;
        }

        .service-card:hover h3 {
          color: #ff8c00;
        }

        .service-card p {
          font-size: 16px;
          line-height: 1.6;
          color: #634d4d;
          transition: color 0.3s ease;
        }

        .service-card:hover p {
          color: #ff8c00;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .service-card {
            padding: 20px;
          }
          .service-icon {
            font-size: 40px;
          }
          .service-card h3 {
            font-size: 20px;
          }
          .service-card p {
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          .service-card {
            padding: 15px;
          }
          .service-icon {
            font-size: 35px;
          }
          .service-card h3 {
            font-size: 18px;
          }
          .service-card p {
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
            transform: translateY(50px);
          }
          100% {
            transform: translateY(0);
          }
        }
        `}
      </style>

      <section className="services-section spad">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2>Our Services</h2>
                <p>
                  We offer a wide range of services to make your event a success.
                  From planning to execution, we've got you covered.
                </p>
              </div>
            </div>
          </div>

          {/* Services Cards */}
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">📚</div>
                <h3>Academic Services</h3>
                <p>
                  Course & subject information
Notes and study materials
Assignments and submissions
Exam timetable
Results and grades
Attendance tracking
AI study assistant / quiz generation
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">👨‍🎓</div>
                <h3>Student Services</h3>
                <p>
                  Student profile
ID card
Certificates & documents
Leave applications
Scholarship information
Student support/help desk
Feedback and complaints
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">📢</div>
                <h3>Campus Communication</h3>
                <p>
                  College announcements
Notifications
Emergency alerts
Department announcements
Student–faculty communication
Discussion/community groups
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">📅 </div>
                <h3>Events & Activities</h3>
                <p>
                  College festivals
Workshops
Seminars
Sports events
Cultural programs
Club activities
Event registration and reminders
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">💼</div>
                <h3>Career & Placement</h3>
                <p>
                  Job opportunities
Internship listings
Placement announcements
Resume builder
Company profiles
Placement application tracking
Interview schedules
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">🏠</div>
                <h3>Campus Facilities</h3>
                <p>
                  Hostel information
Room allocation
Library services
Transport/bus information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;