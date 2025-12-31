import { Link } from "react-router-dom";
import { Book } from "lucide-react";
//import { User } from "lucide-react";
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-company">
            <div className="footer-logo">
              <Book className="footer-logo-icon" />
              <span className="footer-logo-text">
                Elite Consulting Services
              </span>
            </div>
            <p className="footer-description">
              Empowering the next generation of tech professionals with
              cutting-edge skills and industry-relevant training. Number of
              students have transformed their careers with us.
            </p>
            {/*<div className="footer-social">
              <User className="footer-social-icon" />
            </div>*/}
          </div>

          <div>
            <h3 className="footer-section-title1">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="footer-link">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title1">Contact Info</h3>
            <ul className="footer-contact-info1">
              <li>Email: elite91221@gmail.com</li>
              <li>Phone: +91 91086 81021</li>
              <li>Address: MIG-59, APHB Colony, Guntur, 522005</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/16%C2%B017'56.7%22N+80%C2%B024'24.0%22E/@16.2977647,80.4032222,16.42z/data=!4m4!3m3!8m2!3d16.2990742!4d80.406662?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="location-style"
                >
                  <FaLocationDot />
                  Location
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Elite Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
