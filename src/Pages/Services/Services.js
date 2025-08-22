import "./Services.css";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import { FaRegFileAlt, FaBuilding, FaFileSignature } from "react-icons/fa";
import service from "../../assets/services.jpg"
import taxReturn from "../../assets/tax-return.jpg";
import gstRegistration from "../../assets/gst-registration.webp";
import businessRegistration from "../../assets/company-registration.png";

const Services = () => {
  const services = [
    {
      title: "Income Tax Return Filing",
      description:
        "We provide end-to-end tax filing solutions for salaried individuals, freelancers, professionals, and NRIs. Our experts ensure maximum deductions and error-free compliance.",
      icon: <FaRegFileAlt className="service-icon" />,
      image: taxReturn,
    },
    {
      title: "GST Registration & Return Filing",
      description:
        "We assist businesses in getting GST registered quickly and file regular returns, ensuring they remain compliant and avoid penalties.",
      icon: <FaFileSignature className="service-icon" />,
      image: gstRegistration,
    },
    {
      title: "Business & Firm Registrations",
      description:
        "From sole proprietorships to LLPs and private limited companies, we guide you through hassle-free registration with end-to-end legal support.",
      icon: <FaBuilding className="service-icon" />,
      image: businessRegistration,
    },
  ];

  return (
    <div className="services-page">
      <Navigation />

      {/* Header Section */}
      <section className="section-header">
        <h1>Our Professional Services</h1>
        <p>
          At Elite Consulting Services, we offer a wide range of financial and
          compliance solutions designed to support individuals, startups, and
          growing businesses.
        </p>
      </section>

      {/* Visual Highlight Section */}
      <section className="visual-section">
        <div className="visual-grid">
          <div className="visual-text">
            <h2>Your Compliance, Our Expertise</h2>
            <p>
              We simplify the complex world of taxation and business
              registration. Let our experienced professionals handle the details
              while you focus on growth and success.
            </p>
          </div>
          <div className="visual-image-container">
            <img
              src={service}
              alt="Tax Return Filing"
              className="visual-image"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <div className="service-content">
                {service.icon}
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
