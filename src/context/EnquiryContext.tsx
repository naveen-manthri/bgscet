import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import EnquiryForm from "../components/EnquiryForm/EnquiryForm";

interface EnquiryContextType {
  openEnquiry: () => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

interface EnquiryProviderProps {
  children: ReactNode;
}

export const EnquiryProvider = ({
  children,
}: EnquiryProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openEnquiry = () => {
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  const value = useMemo(
    () => ({
      openEnquiry,
      closeEnquiry,
    }),
    []
  );

  return (
    <EnquiryContext.Provider value={value}>
      {children}

      <EnquiryForm
        isOpen={isOpen}
        onClose={closeEnquiry}
      />
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);

  if (!context) {
    throw new Error(
      "useEnquiry must be used within EnquiryProvider."
    );
  }

  return context;
};