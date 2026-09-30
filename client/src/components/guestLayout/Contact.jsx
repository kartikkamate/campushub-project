import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <style>
        {`
        /* Contact Section Styles */
        .contact-section {
          padding: 80px 0;
          background: radial-gradient(circle at 10% 20%, rgb(255, 243, 243) 0%, rgb(242, 247, 255) 90%);
          color: #333;
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .contact-section .container {
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

        /* Contact Form */
        .contact-form {
          background: white;
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          animation: fadeIn 1s forwards 1s;
        }

        .contact-form:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4a3563;
        }

        .form-control {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-control:focus {
          border-color: #4a90e2;
          box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
          outline: none;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          display: inline-block;
          padding: 15px 30px;
          background-color: #ff8c00;
          color: white;
          text-transform: uppercase;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #d47700;
          transform: scale(1.05);
        }

        /* Contact Info */
        .contact-info {
          margin-top: 40px;
          opacity: 0;
          animation: fadeIn 1s forwards 1.5s;
        }

        .contact-info h3 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #4a3563;
        }

        .contact-details {
          list-style: none;
          padding: 0;
        }

        .contact-details li {
          font-size: 16px;
          margin-bottom: 15px;
          color: #634d4d;
          display: flex;
          align-items: center;
        }

        .contact-details li .icon {
          margin-right: 10px;
          color: #4a90e2;
          font-size: 20px;
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .contact-form {
            padding: 30px;
          }
          .form-control {
            font-size: 14px;
          }
          .submit-btn {
            padding: 12px 25px;
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: 20px;
          }
          .form-control {
            font-size: 14px;
          }
          .submit-btn {
            padding: 10px 20px;
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
        `}
      </style>

      <section className="contact-section spad">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2>Contact Us</h2>
                <p>
                  Have questions or want to discuss your event? Get in touch with
                  our team today!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>

              {/* Contact Info */}
              <div className="contact-info text-center">
                <h3>Other Ways to Reach Us</h3>
                <ul className="contact-details">
                  <li>
                    <span className="icon">📧</span> kamatekartik828@gmail.com
                  </li>
                  <li>
                    <span className="icon">📞</span> 91+ 6363608768,8884077230
                  </li>
                  <li>
                    <span className="icon">📍</span> 123 Event Street, City, State 12345
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7220.369990121429!2d74.59604802483719!3d16.533275448940813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0dd502756fc77%3A0x67d5f4573f9df373!2sExamba%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1788672932186!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
  </>
 );
};

export default Contact;