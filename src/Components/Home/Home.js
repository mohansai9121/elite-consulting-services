import { Link } from "react-router-dom";
import { Code, User } from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-background">
        <div className="home-overlay"></div>

        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
        <div className="floating-element floating-4"></div>
        <div className="floating-element floating-5"></div>
      </div>

      <div className="home-content">
        <div className="home-animation">
          <br />
          <br />
          <h1 className="home-title">
            Train for greatness{" "}
            <span className="home-gradient-text"> and Skill up</span>
          </h1>

          <p className="home-subtitle">
            Transform your career with industry-leading courses in Data
            analytics, Web Development, Python, and more.
            <br /> Engage... Learn... Grow...
          </p>
          <div className="home-buttons">
            <Link to="/courses" className="home-btn-primary">
              <Code className="w-5 h-5" />
              Explore Courses
            </Link>
            <Link to="/about" className="home-btn-secondary">
              <User className="w-5 h-5" />
              Learn More
            </Link>
          </div>

          <div className="home-stats">
            <div className="home-stat">
              <div className="home-stat-number">10+</div>
              <div className="home-stat-label">Students Trained</div>
            </div>
            <div className="home-stat">
              <div className="home-stat-number">95%</div>
              <div className="home-stat-label">Job Placement Rate</div>
            </div>
            <div className="home-stat">
              <div className="home-stat-number">2</div>
              <div className="home-stat-label">Expert Instructors</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-indicator-border">
          <div className="scroll-indicator-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
