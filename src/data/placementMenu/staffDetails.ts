import type { TableData } from "../../types/hostel";

export const staffDetailsData: TableData = {
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
        designation: "Asso. Professor & TPO",
        department: "CS&E",
      },
      {
        name: "Prof. Anoop N Prasad",
        designation: "Asst. Professor & TPO",
        department: "IS & E",
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
};