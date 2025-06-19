import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Book } from "lucide-react";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <Book className="logo-icon" />
            <span className="logo-text">
              Elite Consulting Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path
                  ? "active": scrolled ? "scrolled"
                    : "light"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="get-started-btn">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`mobile-menu-icon ${scrolled ? "scrolled" : "light"}`}
            >{isOpen ? <X className="mobile-menu-icon" /> : <Menu className="mobile-menu-icon" />}</button>
            </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (<div className="mobile-menu">
            <div className="mobile-menu-content">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`mobile-nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))} <div className="mobile-btn-container">
                <button className="mobile-btn">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;