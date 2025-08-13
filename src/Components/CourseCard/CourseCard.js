import { Link } from "react-router-dom";
import { Calendar, User, Code } from "lucide-react";
import "./CourseCard.css";

/*interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  instructor: string;
  price: string;
  image: string;
  technologies: string[];
}*/

const CourseCard = ({ 
  id, 
  title, 
  description, 
  duration, 
  level, 
  instructor, 
  price, 
  image, 
  technologies 
}/*: CourseCardProps*/) => {
  return (
    <div className="course-card">
      <div className="course-card-image-container">
        <img 
          src={image} 
          alt={title}
          className="course-card-image"
        />
        {/*<div className="course-card-level">
          {level}
        </div>*/}
      </div>
      <div className="course-card-header">
        <h3 className="course-card-title">
          {title}
          </h3>
        <p className="course-card-description">{description}</p>
      </div>

      <div className="course-card-content">
        <div className="course-card-technologies">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="course-card-tech-tag"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="course-card-meta">
          <div className="course-card-meta-item">
            <Calendar className="course-card-meta-icon" />
            {duration}
          </div>
          <div className="course-card-meta-item">
            <User className="course-card-meta-icon" />
            {instructor}
          </div>
        </div>
         {/*<div className="course-card-price">{price}</div>*/}
      </div>

      <div className="course-card-footer">
        <Link to={`/courses/${id}`} className="course-card-btn course-card-btn-primary">
          <Code className="course-card-btn-icon" />
          View Details
        </Link>
        <button className="course-card-btn course-card-btn-secondary">
          Enroll Now
           </button>
      </div>
    </div>
  );
};

export default CourseCard;