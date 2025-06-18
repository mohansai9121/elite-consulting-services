import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Calendar, Check, Code } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Students Graduated" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "50+", label: "Expert Instructors" },
    { number: "200+", label: "Partner Companies" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Data Scientist",
      bio: "Former Google ML engineer with 10+ years experience",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop"
    },
    {
      name: "Alex Rodriguez",
      role: "Lead Full-Stack Developer",
      bio: "Ex-Facebook engineer and startup founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
    },
    {
      name: "Michael Johnson",
      role: "Python Expert",
      bio: "Python core contributor and tech book author",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      name: "Emily Davis",
      role: "Career Services Director",
      bio: "Former tech recruiter at Amazon and Microsoft",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
    }
  ];

  const values = [
    {
      title: "Excellence in Education",
      description: "We maintain the highest standards in curriculum design and instruction.",
      icon: <Code className="w-8 h-8 text-primary" />
    },
    {
      title: "Industry Relevance",
      description: "Our courses are constantly updated to match current industry needs.",
      icon: <Calendar className="w-8 h-8 text-primary" />
    },
    {
      title: "Student Success",
      description: "Your success is our success. We're committed to your career growth.",
      icon: <Check className="w-8 h-8 text-primary" />
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge teaching methods and technologies.",
      icon: <User className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-poppins">
              About TechElevate Academy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2020, TechElevate Academy has rapidly become a leading institution 
              for technology education, helping thousands of students transition into 
              successful tech careers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to high-quality technology education and empower 
                individuals from all backgrounds to build successful careers in tech.
              </p>
              <p className="text-lg text-gray-600">
                We believe that with the right guidance, support, and hands-on experience, 
                anyone can master the skills needed to thrive in the digital economy.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Students learning"
                className="rounded-lg shadow-lg hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the learning 
              experience we provide to our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center hover-scale hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <div className="text-xl">{value.title}</div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our instructors are industry veterans who bring real-world experience 
              and passion for teaching to every course.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center hover-scale hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-xl">{member.name}</div>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
