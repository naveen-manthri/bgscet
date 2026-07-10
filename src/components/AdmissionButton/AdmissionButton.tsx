import "./AdmissionButton.css";

import { useEnquiry } from "../../context/EnquiryContext";
import { admissionButtonData } from "../../data/admissionButtonData";

interface AdmissionButtonProps {
  variant?: "primary" | "secondary" | "outline";
}

const AdmissionButton = ({
  variant = "primary",
}: AdmissionButtonProps) => {
  const { openEnquiry } = useEnquiry();

  return (
    <button
      type="button"
      className={`admission-button admission-button--${variant}`}
      onClick={variant !== "outline" ? openEnquiry : undefined}
    >
      {admissionButtonData[variant].text}
    </button>
  );
};

export default AdmissionButton;