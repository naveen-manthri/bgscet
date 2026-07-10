export interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface EnquiryFormData {
  name: string;
  mobile: string;
  email: string;
  course: string;
  notes: string;
}