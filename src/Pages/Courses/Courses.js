
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { useState } from "react";
/*import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";*/
import { Search } from "lucide-react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const courses = [
    {
      id: "data-analysis",
      title: "Data Analysis & Visualization",
      description: "Master data analysis with Python, pandas, NumPy, and advanced visualization techniques using Matplotlib and Seaborn",
      duration: "12 weeks",
      level: "Intermediate",
      instructor: "Dr. Sarah Chen",
      price: "$899",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "Data Science"
    },
    {
      id: "web-development",
      title: "Full-Stack Web Development",
      description: "Build modern web applications with React, Node.js, Express, and deploy to cloud platforms",
      duration: "16 weeks",
      level: "Beginner",
      instructor: "Alex Rodriguez",
      price: "$1299",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      category: "Web Development"
    },
    {
      id: "python-programming",
      title: "Python Programming Mastery",
      description: "From basics to advanced Python programming with real-world projects and frameworks",
      duration: "10 weeks",
      level: "Beginner",
      instructor: "Michael Johnson",
      price: "$699",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      technologies: ["Python", "Django", "Flask", "APIs"],
      category: "Programming"
    },
    {
      id: "data-structures",
      title: "Data Structures & Algorithms",
      description: "Master fundamental computer science concepts essential for technical interviews",
      duration: "8 weeks",
      level: "Intermediate",
      instructor: "Dr. Emily Watson",
      price: "$799",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      technologies: ["Python", "Java", "C++", "Algorithms"],
      category: "Computer Science"
    },
    {
      id: "typing-course",
      title: "Professional Typing & Productivity",
      description: "Increase your typing speed and accuracy while learning productivity tools and shortcuts",
      duration: "4 weeks",
      level: "Beginner",
      instructor: "Lisa Park",
      price: "$299",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      technologies: ["Typing", "Shortcuts", "Productivity"],
      category: "Skills"
    },
    {
      id: "english-communication",
      title: "Business English & Communication",
      description: "Improve your professional English communication skills for the global tech industry",
      duration: "6 weeks",
      level: "Beginner",
      instructor: "James Wilson",
      price: "$399",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      technologies: ["English", "Communication", "Presentation"],
      category: "Language"
    },
    {
      id: "interview-prep",
      title: "Technical Interview Preparation",
      description: "Ace your tech interviews with coding challenges, system design, and behavioral questions",
      duration: "6 weeks",
      level: "Intermediate",
      instructor: "David Kim",
      price: "$599",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      technologies: ["Algorithms", "System Design", "Coding"],
      category: "Career"
    },
    {
      id: "machine-learning",
      title: "Machine Learning Fundamentals",
      description: "Learn ML algorithms, neural networks, and build intelligent applications from scratch",
      duration: "14 weeks",
      level: "Advanced",
      instructor: "Dr. Sarah Chen",
      price: "$1199",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks"],
      category: "Data Science"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === "all" || course.level.toLowerCase() === levelFilter;
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const categories = [...new Set(courses.map(course => course.category))];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Our Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover comprehensive courses designed by industry experts to accelerate 
              your career in technology. From beginner to advanced levels.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <select value={levelFilter} onValueChange={setLevelFilter}>
              {/*<SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by level" />
              </SelectTrigger>
              <SelectContent>*/}
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              {/*</SelectContent>*/}
            </select>

            <select value={categoryFilter} onValueChange={setCategoryFilter}>
              {/*<SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>*/}
            </select>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No courses found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setLevelFilter("all");
                  setCategoryFilter("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
