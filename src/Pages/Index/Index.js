import Navigation from "../../Components/Navigation/Navigation";
import Home from "../../Components/Home/Home";
import Footer from "../../Components/Footer/Footer";
import CourseCard from "../../Components/CourseCard/CourseCard";
// import { Button } from "@/components/ui/button"; // Replace with local import if needed
import { Link } from "react-router-dom";
import { Check, Code } from "lucide-react";
import "./Index.css";

// If you're not using a Button component from a design system, use a simple button
// or define/import it locally:
/*const Button = ({ children, className, ...props }) => (
  <button className={`bg-white text-blue-600 font-semibold rounded px-4 py-2 ${className}`} {...props}>
    {children}
  </button>
);
*/

const Index = () => {
  const featuredCourses = [
    {
      id: "data-analysis",
      title: "Data Analysis & Visualization",
      description:
        "Master data analysis with Excel, Python and advanced visualization techniques",
      duration: "12 weeks",
      level: "Intermediate",
      instructor: "Salman Khan",
      price: "₹1999",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["Excel", "Python", "Pandas", "Matplotlib", "Seaborn"],
    },
    {
      id: "web-development",
      title: "Full-Stack Web Development",
      description:
        "Build modern web applications with React, Node.js, and deployment",
      duration: "12 weeks",
      level: "Beginner",
      instructor: "Mohan Sai",
      price: "₹1999",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "FirebaseDB"],
    },
    {
      id: "python-programming",
      title: "Python Programming Mastery",
      description:
        "From basics to advanced Python programming with real-world projects",
      duration: "8 weeks",
      level: "Beginner",
      instructor: "Mohan Sai",
      price: "₹1499",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      technologies: ["Python", "Django", "Flask", "APIs", "Data Structures"],
    },
  ];

  const features = [
    "Industry-expert instructors",
    "Hands-on project experience",
    "Career placement assistance",
    "24/7 learning support",
    "Flexible scheduling options",
    "Certificate of completion",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Home />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <br />
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Why Choose Elite Consulting Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the high quality education through
              practical learning and support to help you achieve your career
              goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-6 bg-white rounded-lg shadow-sm hover-scale hover-glow animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <br />
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our popular courses designed to accelerate your career.
            </p>
            <br />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <div
                key={course.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          <div className="view-courses-div">
            <Link to="/courses" className="view-courses-btn">
              <Code className="course-card-btn-icon" />
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <br />
            <h2 className="text-4xl font-bold mb-4 font-poppins">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their
              careers with our expert-led courses and personalized support.
            </p>
            <div className="advisory-btns-div">
              <Link to="/courses" className="advisory-btn-secondary">
                Start Learning Today
              </Link>
              <Link to="/contact" className="advisory-btn-primary">
                Talk to an Advisor
              </Link>
              <br/>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
