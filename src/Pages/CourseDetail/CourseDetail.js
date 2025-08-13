import { useParams, Link } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import { Calendar, User, Code, Check, Book } from "lucide-react";
import dataAnalysis from "../../assets/data-analysis.jpg";
import webDevelopment from "../../assets/web-development.jpg";
import python from "../../assets/python-programming.jpg";
import dataStructures from "../../assets/data-structures.jpg";
import typing from "../../assets/typing.jpg";
import english from "../../assets/speaking.jpg";
import interview from "../../assets/interview.webp";
import machineLearning from "../../assets/machine-learning.webp";
import "./CourseDetail.css"; // Ensure this file contains your converted CSS

const CourseDetail = () => {
  const { courseId } = useParams();

  const courseData = {
    "data-analysis": {
      title: "Data Analysis & Visualization",
      description:
        "Master data analysis with Excel, Python, pandas, NumPy, and advanced visualization techniques using Matplotlib and Seaborn",
      duration: "12 weeks",
      level: "Intermediate",
      instructor: "Salman Khan",
      price: "₹1999",
      image: dataAnalysis,
      technologies: ["Excel", "Python", "Pandas", "Matplotlib", "Seaborn"],
      prerequisites: ["Basic Python knowledge", "High school mathematics"],
      learning_objectives: [
        "Master Python for data manipulation and analysis",
        "Create professional data visualizations",
        "Perform statistical analysis and hypothesis testing",
        "Clean and preprocess messy datasets",
        "Build interactive dashboards",
        "Present data insights effectively",
      ],
      curriculum: [
        { week: 1, topic: "Excel & Python Fundamentals" },
        { week: 2, topic: "Data Manipulation with Pandas" },
        { week: 3, topic: "Data Cleaning & Preprocessing" },
        { week: 4, topic: "Exploratory Data Analysis" },
        { week: 5, topic: "Statistical Analysis Basics" },
        { week: 6, topic: "Visualization with Matplotlib" },
        { week: 7, topic: "Visualization with Seaborn" },
        { week: 8, topic: "Interactive Charts & Dashboards" },
        { week: 9, topic: "Time Series Analysis" },
        { week: 10, topic: "Hypothesis Testing" },
        { week: 11, topic: "Dashboard Creation" },
        { week: 12, topic: "Final Project & Presentation" },
      ],
    },
    "web-development": {
      title: "Full-Stack Web Development",
      description:
        "Build modern web applications with React, Node.js, Express, and deploy to cloud platforms",
      duration: "12 weeks",
      level: "Intermediate",
      instructor: "Mohan Sai",
      price: "₹1999",
      image: webDevelopment,
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      prerequisites: ["Basic computer literacy", "No prior programming experience"],
      learning_objectives: [
        "Build responsive UIs using HTML, CSS, JS",
        "Master React and its ecosystem",
        "Create REST APIs with Node.js & Express",
        "Manage data with MongoDB",
        "Implement user authentication",
        "Deploy apps to AWS cloud",
      ],
      curriculum: [
        { week: 1, topic: "HTML5 & Semantic Markup" },
        { week: 2, topic: "CSS3 & Responsive Design" },
        { week: 3, topic: "JavaScript Fundamentals" },
        { week: 4, topic: "DOM Manipulation & Events" },
        { week: 5, topic: "Introduction to React" },
        { week: 6, topic: "Components & Props" },
        { week: 7, topic: "State Management & Hooks" },
        { week: 8, topic: "React Router" },
        { week: 9, topic: "Node.js & NPM" },
        { week: 10, topic: "Express & RESTful APIs" },
        { week: 11, topic: "MongoDB Basics" },
        { week: 12, topic: "User Authentication" },
      ],
    },
    "python-programming": {
      title: "Python Programming Mastery",
      description:
        "From basics to advanced Python programming with real-world projects and frameworks",
      duration: "12 weeks",
      level: "Beginner",
      instructor: "Mohan Sai",
      price: "₹1499",
      image: python,
      technologies: ["Python", "Django", "Flask", "APIs", "Data Structures"],
      prerequisites: ["No prior programming experience"],
      learning_objectives: [
        "Understand Python syntax and structures",
        "Build web apps with Django/Flask",
        "Implement RESTful APIs",
        "Master data structures in Python",
        "Work on real-world projects",
      ],
      curriculum: [
        { week: 1, topic: "Python Basics & Syntax" },
        { week: 2, topic: "Data Structures in Python" },
        { week: 3, topic: "Functions & Modules" },
        { week: 4, topic: "Error Handling & File I/O" },
        { week: 5, topic: "Working with APIs" },
        { week: 6, topic: "Intro to Django" },
        { week: 7, topic: "Django Models & Views" },
        { week: 8, topic: "Intro to Flask" },
        { week: 9, topic: "Flask Routing & Templates" },
        { week: 10, topic: "Project with Django/Flask" },
        { week: 11, topic: "Testing & Debugging" },
        { week: 12, topic: "Final Capstone Project" },
      ],
    },
    "data-structures": {
      title: "Data Structures & Algorithms",
      description:
        "Master fundamental computer science concepts essential for technical interviews",
      duration: "8 weeks",
      level: "Intermediate",
      instructor: "Mohan Sai",
      price: "₹1499",
      image: dataStructures,
      technologies: ["Python", "C", "Algorithms"],
      prerequisites: ["Basic programming experience"],
      learning_objectives: [
        "Understand core data structures",
        "Implement algorithms in code",
        "Solve algorithmic problems",
        "Prepare for coding interviews",
      ],
      curriculum: [
        { week: 1, topic: "Arrays & Linked Lists" },
        { week: 2, topic: "Stacks & Queues" },
        { week: 3, topic: "Trees" },
        { week: 4, topic: "Graphs" },
        { week: 5, topic: "Sorting Algorithms" },
        { week: 6, topic: "Searching Algorithms" },
        { week: 7, topic: "Dynamic Programming" },
        { week: 8, topic: "Mock Interviews" },
      ],
    },
    "typing-course": {
      title: "Professional Typing & Productivity",
      description:
        "Increase your typing speed and accuracy while learning productivity tools and shortcuts",
      duration: "8 weeks",
      level: "Beginner",
      instructor: "Salman Khan",
      price: "₹1999",
      image: typing,
      technologies: ["Typing", "Shortcuts", "Productivity"],
      prerequisites: ["Basic computer skills"],
      learning_objectives: [
        "Improve typing speed & accuracy",
        "Learn keyboard shortcuts",
        "Master productivity tools",
      ],
      curriculum: [
        { week: 1, topic: "Typing Basics" },
        { week: 2, topic: "Accuracy & Speed Drills" },
        { week: 3, topic: "Shortcuts & Efficiency" },
        { week: 4, topic: "Productivity Tools" },
        { week: 5, topic: "Advanced Typing Drills" },
        { week: 6, topic: "Ergonomics & Workflow" },
        { week: 7, topic: "Typing Speed Challenges" },
        { week: 8, topic: "Final Productivity Assessment" },
      ],
    },
    "english-communication": {
      title: "Business English & Communication",
      description:
        "Improve your professional English communication skills for the global tech industry",
      duration: "4 weeks",
      level: "Beginner",
      instructor: "Salman Khan",
      price: "₹999",
      image: english,
      technologies: ["English", "Communication", "Presentation"],
      prerequisites: ["Intermediate English"],
      learning_objectives: [
        "Enhance verbal/written English skills",
        "Deliver effective presentations",
        "Handle business conversations",
      ],
      curriculum: [
        { week: 1, topic: "Business Vocabulary" },
        { week: 2, topic: "Professional Writing" },
        { week: 3, topic: "Presentation Skills" },
        { week: 4, topic: "Mock Business Meetings" },
      ],
    },
    "interview-prep": {
      title: "Technical Interview Preparation",
      description:
        "Ace your tech interviews with coding challenges, system design, and behavioral questions",
      duration: "4 weeks",
      level: "Intermediate",
      instructor: "Mohan Sai",
      price: "₹999",
      image: interview,
      technologies: ["Algorithms", "System Design", "Coding"],
      prerequisites: ["Comfortable with coding basics"],
      learning_objectives: [
        "Practice coding challenges",
        "Learn system design basics",
        "Master behavioral responses",
      ],
      curriculum: [
        { week: 1, topic: "Coding Problem Drills" },
        { week: 2, topic: "System Design Fundamentals" },
        { week: 3, topic: "Behavioral Interview Prep" },
        { week: 4, topic: "Mock Interview Simulations" },
      ],
    },
    "machine-learning": {
      title: "Machine Learning Fundamentals",
      description:
        "Learn ML algorithms, neural networks, and build intelligent applications from scratch",
      duration: "12 weeks",
      level: "Advanced",
      instructor: "Mohan Sai",
      price: "₹1499",
      image: machineLearning,
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks"],
      prerequisites: ["Python programming", "Linear algebra basics"],
      learning_objectives: [
        "Understand ML models & algorithms",
        "Train neural networks from scratch",
        "Evaluate model performance",
        "Build end-to-end ML pipelines",
      ],
      curriculum: [
        { week: 1, topic: "Introduction to ML Concepts" },
        { week: 2, topic: "Regression & Classification" },
        { week: 3, topic: "Decision Trees & Ensembles" },
        { week: 4, topic: "Clustering Techniques" },
        { week: 5, topic: "Neural Network Basics" },
        { week: 6, topic: "Deep Learning with TensorFlow" },
        { week: 7, topic: "Scikit-learn Workflows" },
        { week: 8, topic: "Model Evaluation" },
        { week: 9, topic: "Overfitting & Regularization" },
        { week: 10, topic: "Hyperparameter Tuning" },
        { week: 11, topic: "ML Project Development" },
        { week: 12, topic: "Deployment of ML Models" },
      ],
    },
  };

  const course = courseData[courseId];

  if (!course) {
    return (
      <div className="course-detail-container">
        <Navigation />
        <div className="pt-24 text-center">
          <h1 className="hero-title">Course Not Found</h1>
          <Link to="/courses">
            <button className="cta-button">Back to Courses</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="course-detail-container">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="hero-title">{course.title}</h1>
              <p className="hero-description">{course.description}</p>
              <div className="hero-meta">
                <div><Calendar /> {course.duration}</div>
                <div><User /> {course.instructor}</div>
                <div><Book /> {course.level}</div>
              </div>
              {/*<div className="hero-price">{course.price}</div>*/}
              <div className="hero-buttons">
                <button className="cta-button">Enroll Now</button>
                <button className="cta-button cta-outline">
                  Download Syllabus
                </button>
              </div>
            </div>

            <div>
              <img
                src={course.image}
                alt={course.title}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="tech-section">
        <h2 className="tech-title">Technologies You’ll Learn</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {course.technologies.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="learning-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="learning-title">What You’ll Learn</h2>
              <ul className="objectives-list">
                {course.learning_objectives.map((obj, i) => (
                  <li key={i}><Check /> {obj}</li>
                ))}
              </ul>
            </div>
            <div className="prerequisites">
              <h3>Prerequisites</h3>
              <ul>
                {course.prerequisites.map((pre, i) => (
                  <li key={i}><Code /> {pre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="curriculum-section">
        <h2 className="curriculum-title">Course Curriculum</h2>
        <div className="curriculum-grid">
          {course.curriculum.map((item, i) => (
            <div key={i} className="curriculum-item">
              <div>Week {item.week}</div>
              <div>{item.topic}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Start Learning?</h2>
        <p className="cta-text">
          Join thousands of students who have successfully completed this
          course and advanced their careers in technology.
        </p>
        <div className="cta-buttons">
          <button className="cta-button">Enroll Now</button>
          <button className="cta-button cta-outline">
            <Link to="/contact">Have Questions?</Link>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
