import "./About.css";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import { User, Calendar, Check, Code } from "lucide-react";
import salman from "../../assets/salman.jpg";
import mohan from "../../assets/Mohan_pic1.jpg";
import discussing from "../../assets/people-learning.jpg";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const About = () => {
  const [teamIndex, setTeamIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const stats = [
    { number: "30+", label: "Students Trained" },
    /*{ number: "95%", label: "Job Placement Rate" },*/
    { number: "5+", label: "Trainings and Internships provided" },
    { number: "2", label: "Expert Instructors" },
    /*{ number: "7+", label: "Partner Companies" }*/
  ];

  const handleOpen = (i) => {
    setOpen(true);
    setTeamIndex(i);
  };

  const team = [
    {
      name: "Salman Khan",
      role: "Data Analyst",
      bio: "Data Analyst and Tax manager with 6+ years experience and startup founder.",
      experience: [
        "Tax associate at PWC from December - 2017 to April - 2020",
        "Tax Consultant in Deloitte from April - 2020 to April - 2022",
        "Senior Tax Consultant in KPMG from May - 2022 to April - 2023",
        "Assistant Manager in EY from April - 2023 to April - 2024",
        "Tax Manager in PWC from April - 2024",
      ],
      education: "MBA in Finance, Krupanidhi School of Management, Banglore",
      image: salman,
      linkedin: "https://www.linkedin.com/in/salman-khan-pathan-703a53124/",
    },
    {
      name: "Mohan Sai",
      role: "Software Engineer",
      bio: "Full-stack developer experienced in React, Node.js, and cloud platforms.",
      experience: [
        "2+ years building scalable web applications",
        "1+ years of experience in teaching and worked as asst.Professor",
      ],
      education:
        "B.Tech in Information Technology, RVR & JC College of Engineering, Guntur",
      image: mohan,
      linkedin: "https://www.linkedin.com/in/mohan-sai-chintala-556b2b358/",
    },
  ];

  const values = [
    {
      title: "Excellence in Education",
      description:
        "We maintain the highest standards in curriculum design and instruction.",
      icon: <Code className="icon" />,
    },
    {
      title: "Industry Relevance",
      description:
        "Our courses are constantly updated to match current industry needs.",
      icon: <Calendar className="icon" />,
    },
    {
      title: "Student Success",
      description:
        "Your success is our success. We're committed to your career growth.",
      icon: <Check className="icon" />,
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge teaching methods and technologies.",
      icon: <User className="icon" />,
    },
  ];

  return (
    <div className="about-page">
      <Navigation />

      <section className="section-header">
        <h1>About Elite Consulting Services</h1>
        <p>
          Founded in 2023, Elite Consulting Services has rapidly become a
          leading institution for technology education, helping students
          transition into successful tech careers.
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
              To democratize access to high-quality technology education and
              empower individuals from all backgrounds to build successful
              careers in tech.
            </p>
            <p className="section-paragraph">
              We believe that with the right guidance, support, and hands-on
              experience, anyone can master the skills needed to thrive in the
              digital economy.
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
            Our instructors are industry veterans who bring real-world
            experience and passion for teaching to every course.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div
              key={index}
              className="member-box"
              onClick={() => handleOpen(index)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      {open && (
        <div className="modal">
          <IoClose onClick={()=>setOpen(false)} className="close-icon" title="close" />
          <h2 style={{textAlign:"center"}}>{team[teamIndex].name}</h2>

          <div>
            <img
              src={team[teamIndex].image}
              alt="Profile"
              className="modal-img"
            />

            <h4>Experience:</h4>
            <ul>
              {team[teamIndex].experience.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h4>Education:</h4>
            <p>{team[teamIndex].education}</p>
          </div>
          <div>
            <a
              href={team[teamIndex].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0072b1", fontWeight: "bold" }}
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default About;
