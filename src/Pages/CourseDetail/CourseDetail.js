import { useParams, Link } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
//import { Button } from "@/components/ui/button";
//import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Code, Check, Book } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();

  // In a real app, this would come from an API or database
  const courseData = {
    "data-analysis": {
      title: "Data Analysis & Visualization",
      description:
        "Master the art of data analysis with this comprehensive course covering Python, pandas, NumPy, and advanced visualization techniques. Learn to extract insights from complex datasets and create compelling visual stories.",
      duration: "12 weeks",
      level: "Intermediate",
      instructor: "Dr. Sarah Chen",
      price: "$899",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "NumPy",
        "Jupyter",
      ],
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
        { week: 1, topic: "Python Fundamentals for Data Science" },
        { week: 2, topic: "Data Manipulation with Pandas" },
        { week: 3, topic: "Data Cleaning and Preprocessing" },
        { week: 4, topic: "Exploratory Data Analysis" },
        { week: 5, topic: "Statistical Analysis Basics" },
        { week: 6, topic: "Data Visualization with Matplotlib" },
        { week: 7, topic: "Advanced Visualization with Seaborn" },
        { week: 8, topic: "Interactive Visualizations" },
        { week: 9, topic: "Time Series Analysis" },
        { week: 10, topic: "Hypothesis Testing" },
        { week: 11, topic: "Dashboard Creation" },
        { week: 12, topic: "Final Project and Presentation" },
      ],
    },
    "web-development": {
      title: "Full-Stack Web Development",
      description:
        "Build modern, responsive web applications from scratch using the latest technologies. This comprehensive course covers both frontend and backend development with React, Node.js, and cloud deployment.",
      duration: "16 weeks",
      level: "Beginner",
      instructor: "Alex Rodriguez",
      price: "$1299",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "HTML5",
        "CSS3",
        "JavaScript",
        "AWS",
      ],
      prerequisites: [
        "Basic computer literacy",
        "No prior programming experience required",
      ],
      learning_objectives: [
        "Build responsive websites with HTML, CSS, and JavaScript",
        "Master React for modern frontend development",
        "Create RESTful APIs with Node.js and Express",
        "Work with databases using MongoDB",
        "Implement user authentication and security",
        "Deploy applications to cloud platforms",
      ],
      curriculum: [
        { week: 1, topic: "HTML5 and Semantic Markup" },
        { week: 2, topic: "CSS3 and Responsive Design" },
        { week: 3, topic: "JavaScript Fundamentals" },
        { week: 4, topic: "DOM Manipulation and Events" },
        { week: 5, topic: "Introduction to React" },
        { week: 6, topic: "React Components and Props" },
        { week: 7, topic: "State Management and Hooks" },
        { week: 8, topic: "React Router and Navigation" },
        { week: 9, topic: "Node.js and NPM" },
        { week: 10, topic: "Express.js and RESTful APIs" },
        { week: 11, topic: "MongoDB and Database Design" },
        { week: 12, topic: "Authentication and Security" },
        { week: 13, topic: "Testing and Debugging" },
        { week: 14, topic: "Deployment with AWS" },
        { week: 15, topic: "Performance Optimization" },
        { week: 16, topic: "Final Project Development" },
      ],
    },
    // Add more course details as needed
  };

  const course = courseData[courseId];

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Course Not Found
          </h1>
          <Link to="/courses">
            <button>Back to Courses</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-poppins">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{course.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Book className="w-5 h-5" />
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-primary mb-8">
                {course.price}
              </div>

              <div className="flex gap-4">
                <button size="lg" className="hover-scale hover-glow">
                  Enroll Now
                </button>
                <button size="lg" variant="outline" className="hover-scale">
                  Download Syllabus
                </button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-lg shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-poppins">
            Technologies You'll Learn
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {course.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover-scale"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">
                What You'll Learn
              </h2>
              <ul className="space-y-4">
                {course.learning_objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-slide-in-right">
              <div>
                <div>
                  <div>Prerequisites</div>
                </div>
                <div>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        <span>{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-poppins">
            Course Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.curriculum.map((item, index) => (
              <div
                key={index}
                className="hover-scale hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="text-lg">Week {item.week}</div>
                </div>
                <div>
                  <p className="text-gray-600">{item.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who have successfully completed this
              course and advanced their careers in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 hover-scale hover-glow"
              >
                Enroll Now for {course.price}
              </button>
              <button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 hover-scale border-white/30 text-white hover:bg-white/10"
              >
                <Link to="/contact">Have Questions?</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
