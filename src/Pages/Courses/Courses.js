import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { useState } from "react";
/*import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";*/
//import { Search } from "lucide-react";
import "./Courses.css";
import dataAnalysis from "../../assets/data-analysis.jpg";
import webDevelopment from "../../assets/web-development.jpg";
import python from "../../assets/python-programming.jpg";
//import dataStructures from "../../assets/data-structures.jpg";
import typing from "../../assets/typing.jpg";
import english from "../../assets/speaking.jpg";
//import interview from "../../assets/interview.webp";
//import machineLearning from "../../assets/machine-learning.webp";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const courses = [
    {
      id: "data-analysis",
      title: "Data Analysis & Visualization",
      description:
        "Master data analysis with Excel, Python, pandas, NumPy, and advanced visualization techniques using Matplotlib and Seaborn",
      duration: "12 weeks",
      level: "Intermediate",
      instructor: "Salman Khan",
      price: "₹1999",
      image: dataAnalysis,
      technologies: ["Excel", "Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "Data Science",
    },
    {
      id: "web-development",
      title: "Full-Stack Web Development",
      description:
        "Build modern web applications with React, Node.js, Express, and deploy to cloud platforms",
      duration: "12 weeks",
      level: "Intermediate",
      instructor: "Mohan Sai",
      price: "₹1999",
      image: webDevelopment,
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      category: "Web Development",
    },
    {
      id: "python-programming",
      title: "Python Programming Mastery",
      description:
        "From basics to advanced Python programming with real-world projects and frameworks",
      duration: "12 weeks",
      level: "Beginner",
      instructor: "Mohan Sai",
      price: "₹1499",
      image: python,
      technologies: ["Python", "Data Structures", "Algorithms"],
      category: "Programming",
    },
    /*{
      id: "data-structures",
      title: "Data Structures & Algorithms",
      description:
        "Master fundamental computer science concepts essential for technical interviews",
      duration: "8 weeks",
      level: "Intermediate",
      instructor: "Mohan Sai",
      price: "₹1499",
      image: dataStructures,
      technologies: ["Python", "C", "Algorithms"],
      category: "Computer Science",
    },*/
    {
      id: "typing-course",
      title: "Professional Typing & Productivity",
      description:
        "Increase your typing speed and accuracy while learning productivity tools and shortcuts",
      duration: "8 weeks",
      level: "Beginner",
      instructor: "Salman Khan",
      price: "₹1999",
      image: typing,
      technologies: ["Typing", "Shortcuts", "Productivity"],
      category: "Skills",
    },
    {
      id: "english-communication",
      title: "Business English & Communication",
      description:
        "Improve your professional English communication skills for the global tech industry",
      duration: "4 weeks",
      level: "Beginner",
      instructor: "Salman Khan",
      price: "₹999",
      image: english,
      technologies: ["English", "Communication", "Presentation"],
      category: "Language",
    },
    /*{
      id: "interview-prep",
      title: "Technical Interview Preparation",
      description:
        "Ace your tech interviews with coding challenges, system design, and behavioral questions",
      duration: "4 weeks",
      level: "Intermediate",
      instructor: "Mohan Sai",
      price: "₹999",
      image: interview,
      technologies: ["Algorithms", "System Design", "Coding"],
      category: "Career",
    },*/
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel =
      levelFilter === "all" || course.level.toLowerCase() === levelFilter;
    const matchesCategory =
      categoryFilter === "all" || course.category === categoryFilter;

    return matchesSearch && matchesLevel && matchesCategory;
  });

  /*const categories = [...new Set(courses.map((course) => course.category))];*/

  return (
    <div className="courses-container">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Our Courses</h1>
        <p>Discover comprehensive courses designed by industry experts...</p>
      </section>

      {/* Filters */}
      <section className="filters-section">
        {/*<div className="filters-wrapper">
          <div className="relative">
            <Search className="icon-search" />
            <input
              className="input-search"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="select-filter"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <select
            className="select-filter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>*/}
      </section>

      {/* Courses Grid */}
      <section className="grid-courses">
        <div className="max-w-7xl mx-auto px-4">
          {filteredCourses.length === 0 ? (
            <div className="no-results">
              <p>No courses found matching your criteria.</p>
              <button
                className="clear-button"
                onClick={() => {
                  setSearchTerm("");
                  setLevelFilter("all");
                  setCategoryFilter("all");
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid-wrapper">
              {filteredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
