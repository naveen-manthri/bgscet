// Central FormSubmit.co settings. Override the owner email with VITE_FORMSUBMIT_RECIPIENT
// (.env.local locally, Project Settings > Environment Variables on Vercel).
// Docs: https://formsubmit.co/documentation
export const FORM_OWNER_EMAIL: string = import.meta.env.VITE_FORMSUBMIT_RECIPIENT || "6da36f910c8f3625e43d5b48c15e51b5";

export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/${FORM_OWNER_EMAIL}`;

export const FORM_EMAIL_SUBJECT = "New Website Form Submission";

export const THANK_YOU_PATH = "/thank-you";
