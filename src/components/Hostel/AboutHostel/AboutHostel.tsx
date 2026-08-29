import { useCallback, useState } from "react";
import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { AboutHostelSection } from "../../../types/hostel";
import "./AboutHostel.css";

interface AboutHostelProps {
  data: AboutHostelSection;
}

const AboutHostel = ({ data }: AboutHostelProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  

  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="about-hostel hostel-page">
      <DepartmentSectionHeading title={data.title} className="department-section-heading--default" />

      <div className="about-hostel__content">
        <div className="about-hostel__carousel">
          <img  src={data.images[activeIndex].src}  alt={data.images[activeIndex].alt}  className="about-hostel__image"  />

          

          <div className="about-hostel__dots">
            {data.images.map((image, index) => (
              <button
                key={image.id}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                className={`about-hostel__dot ${
                  activeIndex === index
                    ? "about-hostel__dot--active"
                    : ""
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>

        <div className="about-hostel__description">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHostel;