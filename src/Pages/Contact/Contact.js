import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
/*import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";*/
import { Calendar, User, Code } from "lucide-react";
import { useState } from "react";
//import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
//  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    /*toast({
      title: "Message Sent!",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });*/
    alert("message sent")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      title: "Email Us",
      description: "Get in touch via email",
      detail: "info@techelevate.com",
      icon: <User className="w-8 h-8 text-primary" />,
    },
    {
      title: "Call Us",
      description: "Speak with our advisors",
      detail: "+1 (555) 123-4567",
      icon: <Calendar className="w-8 h-8 text-primary" />,
    },
    {
      title: "Visit Us",
      description: "Come to our campus",
      detail: "123 Tech Street, Innovation City, IC 12345",
      icon: <Code className="w-8 h-8 text-primary" />,
    },
  ];

  const faqs = [
    {
      question: "How long are the courses?",
      answer:
        "Our courses range from 4 weeks to 16 weeks, depending on the complexity and depth of the subject matter.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Most of our beginner courses require no prior experience. We clearly mark prerequisites for intermediate and advanced courses.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 learning support, career placement assistance, and one-on-one mentoring throughout your learning journey.",
    },
    {
      question: "Are certificates provided?",
      answer:
        "Yes, all students receive a certificate of completion that is recognized by industry partners and employers.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our courses or need guidance on your learning
              path? We're here to help you succeed in your tech career journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center hover-scale hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div>
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <div className="text-xl">{info.title}</div>
                  <p className="text-gray-600">{info.description}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{info.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div>
                <div>
                  <div className="text-2xl font-poppins">Send us a Message</div>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Subject *
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Course inquiry, enrollment, etc."
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your goals and how we can help you..."
                        rows={6}
                      />
                    </div>

                    <button
                      type="submit"
                      size="lg"
                      className="w-full hover-scale hover-glow"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="animate-slide-in-right">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 font-poppins">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="hover-glow animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div>
                      <div className="text-lg">{faq.question}</div>
                    </div>
                    <div>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait – start your journey to becoming a tech professional
              today. Our expert advisors are standing by to help you choose the
              perfect course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 hover-scale hover-glow"
              >
                Schedule Free Consultation
              </button>
              <button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 hover-scale border-white/30 text-white hover:bg-white/10"
              >
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
