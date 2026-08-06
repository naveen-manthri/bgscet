import DepartmentSectionHeading from "../../DepartmentSectionHeading/DepartmentSectionHeading";
import type { ProfileSection } from "../../../types/careerDevelopment";
import "./ProfileCard.css";

interface ProfileCardProps {
  data: ProfileSection;
}

const ProfileCard = ({ data }: ProfileCardProps) => {
  return (
    <section className="profile-card">
      <DepartmentSectionHeading title={data.title} />

      <div className="profile-card__container">
        <div className="profile-card__image-wrapper">
          <img src={data.image} alt={data.alt} className="profile-card__image" />
        </div>

        <div className="profile-card__content">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Designation:</strong> {data.designation}</p>
          <p><strong>College:</strong> {data.college}</p>
          <p><strong>Mobile:</strong> <a href={`tel:${data.mobile}`}>{data.mobile}</a></p>

            <p><strong>Email:</strong> <a href={`mailto:${data.email}`}>{data.email}</a></p>

            <p><strong>Qualification:</strong> <span className="profile-card__qualification">{data.qualification}</span></p>

            <p><strong>LinkedIn:</strong> <a href={data.linkedin} target="_blank" rel="noopener noreferrer">{data.linkedin}</a></p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;