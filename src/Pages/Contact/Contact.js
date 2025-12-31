import React, { useState } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import { Calendar, User, Code } from "lucide-react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  //const accessKey = "42233dcc-0841-48d9-9ff0-987c46bdc1d7";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData1 = new FormData(e.target);
    formData1.append("access_key", "42233dcc-0841-48d9-9ff0-987c46bdc1d7");
    const object = Object.fromEntries(formData1);
    const json = JSON.stringify(object);

    console.log("Form Payload:", json);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    console.log(res);

    if (res.success) {
      console.log("message sent", res);
      toast.success("Message sent");
    } else {
      alert("Message not sent");
    }
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
      detail: "elite91221@gmail.com",
      icon: <User className="icon" />,
    },
    {
      title: "Call Us",
      description: "Speak with our advisors",
      detail: "+91 91086 81021",
      icon: <Calendar className="icon" />,
    },
    {
      title: "Visit Us",
      description: "Come to our campus",
      detail: "MIG-59, APHB Colony, Guntur, 522005",
      icon: <Code className="icon" />,
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
    <div className="contact-page">
      <Navigation />

      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>
          Have questions about our courses or need guidance on your learning
          path? We're here to help you succeed in your tech career journey.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-cards">
        {contactInfo.map((info, index) => (
          <div key={index} className="info-card">
            <div className="icon-wrapper">{info.icon}</div>
            <h3>{info.title}</h3>
            <p>{info.description}</p>
            <strong>{info.detail}</strong>
          </div>
        ))}
      </section>

      {/* Form and FAQ Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          {/* Form */}
          <div className="form-box">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9108681021"
                  />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Course inquiry, enrollment, etc."
                  />
                </div>
              </div>
              <div className="form-group full">
                <label>Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals and how we can help you..."
                />
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          {/* FAQs */}
          <div className="faq-box">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Career?</h2>
        <p>
          Don’t wait — start your journey to becoming a tech professional today.
          Our expert advisors are ready to guide you.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Schedule Free Consultation</button>
          <Link to="/courses">
            <button className="secondary-btn">Browse Courses</button>
          </Link>
        </div>
      </section>

      {/* Footer Contact Info Section */}
      <div className="footer-contact-section">
        <h3 className="footer-section-title">Contact Info</h3>
        <ul className="footer-contact-info">
          <li>Email: elite91221@gmail.com</li>
          <li>Phone: +91 91086 81021</li>
          <li>Address: MIG-59, APHB Colony, Guntur, 522005</li>
          <li>
            <a
              href="https://www.google.com/maps/place/16%C2%B017'56.7%22N+80%C2%B024'24.0%22E/@16.2977647,80.4032222,16.42z/data=!4m4!3m3!8m2!3d16.2990742!4d80.406662?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="location-style"
              style={{color:'black'}}
            >
              <FaLocationDot />
              Location
            </a>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
