import React, { useEffect, useRef, useState } from "react";
import "./EnquiryForm.css";
import type { EnquiryFormData } from "../../types/enquiry";
import type { EnquiryFormProps } from "../../types/enquiry";

import { initialEnquiryFormData } from "../../data/enquiryData";

const EnquiryForm: React.FC<EnquiryFormProps> = ({
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<EnquiryFormData>(
    initialEnquiryFormData
  );

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEnquirySubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    console.log({
      ...formData,
      acceptedTerms,
    });

    alert("Form Submitted Successfully!");

    setFormData(initialEnquiryFormData);
    setAcceptedTerms(false);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="enquiry-form"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div
        className="enquiry-form__container"
        ref={modalRef}
      >
        {/* Close Button */}

        <button
          type="button"
          className="enquiry-form__close"
          onClick={onClose}
          aria-label="Close enquiry form"
        >
          ×
        </button>

        {/* Heading */}

        <h2 className="enquiry-form__title">
          Enquiry Form
        </h2>

        <div className="enquiry-form__underline"></div>

        {/* Form */}

        <form
          className="enquiry-form__form"
          onSubmit={handleEnquirySubmit}
        >
          <input
            className="enquiry-form__input"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <input
            className="enquiry-form__input"
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />

          <input
            className="enquiry-form__input"
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <input
            className="enquiry-form__input"
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleInputChange}
            required
          />

          <textarea
            className="enquiry-form__textarea"
            name="notes"
            placeholder="Notes"
            rows={5}
            value={formData.notes}
            onChange={handleInputChange}
          />

          {/* Terms */}

          <label className="enquiry-form__terms">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) =>
                setAcceptedTerms(event.target.checked)
              }
              required
            />

            <span>
              By clicking submit you are agreeing to our
              terms and conditions and privacy policy.
            </span>
          </label>

          {/* Bottom Section */}

          <div className="enquiry-form__bottom">
            <div className="enquiry-form__captcha">
              <input type="checkbox" />

              <span>I'm not a robot</span>
            </div>

            <button
              type="submit"
              className="enquiry-form__submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;