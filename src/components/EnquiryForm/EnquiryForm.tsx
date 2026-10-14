import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./EnquiryForm.css";
import type { EnquiryFormData, EnquiryFormProps } from "../../types/enquiry";
import { initialEnquiryFormData } from "../../data/enquiryData";

const EnquiryForm: React.FC<EnquiryFormProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<EnquiryFormData>(initialEnquiryFormData);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousRootOverflow = documentElement.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    firstInputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousRootOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleEnquirySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ ...formData, acceptedTerms });
    alert("Form Submitted Successfully!");
    setFormData(initialEnquiryFormData);
    setAcceptedTerms(false);
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="enquiry-form" role="presentation" onMouseDown={handleOverlayClick}>
      <div
        className="enquiry-form__container flex flex-column"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-form-title"
        tabIndex={-1}
      >
        <button
          type="button"
          className="enquiry-form__close"
          onClick={onClose}
          aria-label="Close enquiry form"
        >
          ×
        </button>

        <h2 className="enquiry-form__title" id="enquiry-form-title">
          Enquiry Form
        </h2>
        <div className="enquiry-form__underline" />

        <form className="enquiry-form__form flex flex-column" onSubmit={handleEnquirySubmit}>
          <input ref={firstInputRef} className="enquiry-form__input" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
          <input className="enquiry-form__input" type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleInputChange} required />
          <input className="enquiry-form__input" type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleInputChange} required />
          <input className="enquiry-form__input" type="text" name="course" placeholder="Course" value={formData.course} onChange={handleInputChange} required />
          <textarea className="enquiry-form__textarea" name="notes" placeholder="Notes" rows={5} value={formData.notes} onChange={handleInputChange} />

          <label className="enquiry-form__terms flex flex-align-start">
            <input type="checkbox" checked={acceptedTerms} onChange={(event) => setAcceptedTerms(event.target.checked)} required />
            <span>By clicking submit you are agreeing to our terms and conditions and privacy policy.</span>
          </label>

          <div className="enquiry-form__bottom flex flex-align-center flex-justify-between">
            <div className="enquiry-form__captcha flex flex-align-center flex-one">
              <input type="checkbox" />
              <span>I'm not a robot</span>
            </div>
            <button type="submit" className="enquiry-form__submit">Submit</button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default EnquiryForm;
