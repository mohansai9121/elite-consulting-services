import { Link } from "react-router-dom";
import { Code, User } from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
        {/* Floating elements */}
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
        <div className="floating-element floating-4"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-animation">
          <h1 className="hero-title">
            Master the Future of{" "}
            <span className="hero-gradient-text">Technology</span>
          </h1>

          <p className="hero-subtitle">
            Transform your career with industry-leading courses in Data Science,
            Web Development, Python, and more. Join thousands of successful
            graduates.
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="hero-btn-primary">
              <Code className="w-5 h-5" />
              Explore Courses
            </Link>
            <Link to="/about" className="hero-btn-secondary">
              <User className="w-5 h-5" />
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">10,000+</div>
              <div className="hero-stat-label">Students Trained</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">95%</div>
              <div className="hero-stat-label">Job Placement Rate</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">50+</div>
              <div className="hero-stat-label">Expert Instructors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-border">
          <div className="scroll-indicator-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
