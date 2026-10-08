import toppersBanner from "../../assets/images/home/toppers.png";
import type { StaffDetailsPageData } from "./types";

export { toppersBanner };

export const staffDetailsPageData: StaffDetailsPageData = {
  staff: {
    title: "Staff Details",
    table: {
      columns: [
        { key: "name", label: "Name of the Staff" },
        { key: "designation", label: "Designation" },
        { key: "department", label: "Department" },
      ],
      rows: [
        {
          name: "Mrs. Shilpa Rajesh",
          designation: "Head of the Department and Manager – Training & Placement",
          department: "CDCA Centre",
        },
        {
          name: "Mr. Dhanush Babu B N",
          designation: "Co-Ordinator - Training and Placement",
          department: "CDCA Centre",
        },
        {
          name: "Prof. Sumanth C Gowda",
          designation: "Asst. Professor & TPO",
          department: "CSE",
        },
        {
          name: "Prof. Anoop N Prasad",
          designation: "Asst. Professor & TPO",
          department: "ISE",
        },
        {
          name: "Prof. Vandana S Sardar",
          designation: "Asst. Professor & TPO",
          department: "AI & ML",
        },
        {
          name: "Prof. Manjunatha E C",
          designation: "Asst. Professor & TPO",
          department: "AI & DS",
        },
        {
          name: "Prof. Nagaraj B Kalligudd",
          designation: "Asst. Professor & TPO",
          department: "CSD",
        },
      ],
    },
  },
  contactTitle: "CONTACT US FOR PLACEMENT :",
  contactLines: [
    { id: "contact-name", text: "Mrs. Shilpa Rajesh", emphasized: true },
    { id: "contact-designation", text: "Manager – Training & Placement" },
    { id: "contact-centre", text: "Career Development & Corporate Affairs Centre" },
    { id: "contact-college", text: "BGS Collegeof Engineering & Technology" },
    { id: "contact-address-line-1", text: "Mahalakshmipuram, Bengaluru," },
    { id: "contact-address-line-2", text: "Karnataka 560086. INDIA" },
    { id: "contact-mobile", label: "Mobile No", value: "9945773984" },
    {
      id: "contact-email",
      label: "Email id",
      href: "mailto:hrd@bgscet.ac.in",
      linkText: "hrd@bgscet.ac.in",
    },
    {
      id: "contact-website",
      label: "Website",
      href: "https://bgscet.ac.in/",
      linkText: "https://bgscet.ac.in",
      external: true,
    },
  ],
};
