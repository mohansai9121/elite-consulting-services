import './About.css';
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import { User, Calendar, Check, Code } from "lucide-react";
import salman from '../../assets/salman.jpg';
import mohan from '../../assets/mohan.jpg';
import discussing from "../../assets/people-learning.jpg"

const About = () => {
  const stats = [
    { number: "10+", label: "Students Graduated" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "2", label: "Expert Instructors" },
    { number: "7+", label: "Partner Companies" }
  ];

  const team = [
    {
      name: "Salman Khan",
      role: "Data Analyst",
      bio: "Data Analyst with 10+ years experience and startup founder",
      image: salman
    },
    {
      name: "Mohan Sai",
      role: "Full-Stack Developer",
      bio: "Software engineer and Website developer",
      image: mohan
    },
  ];

  const values = [
    {
      title: "Excellence in Education",
      description: "We maintain the highest standards in curriculum design and instruction.",
      icon: <Code className="icon" />
    },
    {
      title: "Industry Relevance",
      description: "Our courses are constantly updated to match current industry needs.",
      icon: <Calendar className="icon" />
    },
    {
      title: "Student Success",
      description: "Your success is our success. We're committed to your career growth.",
      icon: <Check className="icon" />
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge teaching methods and technologies.",
      icon: <User className="icon" />
    }
  ];

  return (
    <div className="about-page">
      <Navigation />

      <section className="section-header">
        <h1>About Elite Consulting Services</h1>
        <p>
          Founded in 2023, Elite Consulting Services has rapidly become a leading institution 
          for technology education, helping students transition into 
          successful tech careers.
        </p>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mission-section">
        <div className="grid-2 mission-content">
          <div>
            <h2 className="section-title">Our Mission</h2>
            <p className="section-paragraph">
              To democratize access to high-quality technology education and empower 
              individuals from all backgrounds to build successful careers in tech.
            </p>
            <p className="section-paragraph">
              We believe that with the right guidance, support, and hands-on experience, 
              anyone can master the skills needed to thrive in the digital economy.
            </p>
          </div>
          <div>
            <img 
              src={discussing}
              alt="Students learning"
              className="mission-image"
            />
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-text">
          <h2 className="section-title">Our Values</h2>
          <p className="section-paragraph">
            These core values guide everything we do and shape the learning 
            experience we provide to our students.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-box">
              {value.icon}
              <div className="value-title">{value.title}</div>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <div className="team-text">
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-paragraph">
            Our instructors are industry veterans who bring real-world experience 
            and passion for teaching to every course.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="member-box">
              <img src={member.image} alt={member.name} className="member-image" />
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
