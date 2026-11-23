import { FORM_EMAIL_SUBJECT, THANK_YOU_PATH } from "../../config/formSubmit";

interface FormSubmitFieldsProps {
  formName: string;
}

// Hidden FormSubmit.co control fields shared by every form that posts to FormSubmit.
// FormSubmit's reCAPTCHA stays enabled (no _captcha=false).
function FormSubmitFields({ formName }: FormSubmitFieldsProps) {
  return (
    <>
      <input type="hidden" name="_subject" value={FORM_EMAIL_SUBJECT} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={`${window.location.origin}${THANK_YOU_PATH}`} />
      <input type="hidden" name="Form Name" value={formName} />
      <input type="hidden" name="Submitted From Page" value={window.location.href} />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
        defaultValue=""
      />
    </>
  );
}

export default FormSubmitFields;
