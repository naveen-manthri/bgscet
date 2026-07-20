import type {
  AcademicSection,
  ManagementFeeSection,
  AdmissionInformationSection,
} from "../types/academic";

export const academicData: AcademicSection = {
  title: {
    black: "Academic Eligibility For Admissions To Four Years Under Graduate",
    red: "Programs Through KEA/COMED-K/Management:",
  },

  eligibility: {
    generalMerit: {
      heading: "",
      description:
        "1. FOR GENERAL MERIT CANDIDATES: A candidate who has passed in 2nd PUC / 12th Std / Equivalent Examination with English as one of the Languages and obtained a minimum of 45% marks in aggregate in Physics and Mathematics as compulsory subjects along with Chemistry / Biotechnology / Biology / Computer Science / Electronics as optional subjects in the qualifying examination is eligible for admission to the undergraduate engineering programmes.",
    },

    reservedCategory: {
      heading:
        "",
      description:
        "2. FOR SC/ST & OBC (Cat-1, 2A, 2B, 3A) CATEGORY CANDIDATES: A candidate who has passed in 2nd PUC / 12th Std / Equivalent Examination with English as one of the Languages and obtained a minimum of 40% aggregate marks in Physics and Mathematics together with Chemistry / Biotechnology / Biology / Computer Science / Electronics is eligible as per Government norms.",
    },

    note:
      "The marks obtained by the candidate in Biotechnology/Biology/Computer Science / Electronics in the qualifying examination will be considered in the place of Chemistry in case the marks obtained in Chemistry is less for the required aggregate percentage for the pursue of determination of eligibility.",
  },

  entranceExaminations: [
    "Entrance Examination: K-CET / COMED-K /JEE",
    "For Management Quota Admissions: Students have to take any one of the Entrance Examination.",
  ],

  examinations: {
    kcet: {
      title: "K-CET",
      content: [
        {
          type: "text",
          value:
            "An establishment of Govt of Karnataka, the Common Entrance Test (CET) cell conducts an entrance test to determine the eligibility/merit, for admission to the first year of full-time professional courses for Government share of seats for BE i.e., all Engineering courses. For more details, please visit ",
        },
        {
          type: "link",
          label: "https://cetonline.karnataka.gov.in/kea/",
          href: "https://cetonline.karnataka.gov.in/kea/",
        },
      ],
    },
    comedk: {
      title: "COMED-K",
      content: [
        {
          type: "text",
          value:
            "A consortium of Medical, Engineering, and Dental Colleges of Karnataka (COMED-K) organize a common entrance test for Engineering, Medical, and Dental courses. For more details, please visit ",
        },
        {
          type: "link",
          label: "https://www.comedk.org/index",
          href: "https://www.comedk.org/index",
        },
        {
          type: "text",
          value:
            " An establishment of Govt. of India conducts tests for Admission to Undergraduate Engineering Programs (B.E/B.Tech.) at NITs, IIITs, other Centrally Funded Technical Institutions (CFTIs), and Institutions/Universities funded/recognized by participating State Governments. JEE (Main) is also an eligibility test for JEE (Advanced), which is conducted for admission to IIT. For more details, please visit ",
        },
        {
          type: "link",
          label: "https://jeemain.nta.nic.in/",
          href: "https://jeemain.nta.nic.in/",
        },
      ],
    },
  },

  documents: [
  "Marks cards of 10th and 2nd PUC / 10+2 / 12th Std.",
  "Aadhar Card of Student and Parents.",
  "Entrance Exam rank/score card (CET, COMEDK, JEE) as applicable.",
  "Passport Size photos – 5 Nos.",
  "TC, Migration certificate, Caste certificate as applicable.",
  "Study Certificate for the past 7 years.",
  {
    label: "Other Fee Details for the academic year 2025-26",
    href: "/admissions",
  },
],
};



export const managementFeeData: ManagementFeeSection = {
  title: {
    black: "APPROVED MANAGEMENT",
    red: "FEE STRUCTURE FOR 2026–27",
  },

  table: {
    columns: [
      "Sl. No.",
      "Branch / Discipline",
      "Fee (Rs. In Lakh per Annum)",
      "Intake",
    ],

    rows: [
      [
        "1.",
        "Computer Science and Engineering",
        "5.00",
        "120",
      ],
      [
        "2.",
        "Information Science and Engineering",
        "4.00",
        "60",
      ],
      [
        "3.",
        "Computer Science and Design",
        "3.50",
        "60",
      ],
      [
        "4.",
        "Artificial Intelligence and Machine Learning",
        "4.50",
        "60",
      ],
      [
        "5.",
        "Artificial Intelligence and Data Science",
        "4.50",
        "60",
      ],
    ],
  },

  notes: [
    "ELIGIBILITY CRITERIA – AVERAGE 60% AND ABOVE IN PUC OR 12th STANDARD IN PHYSICS, MATHEMATICS, CHEMISTRY / COMPUTER SCIENCE / ELECTRONICS.",
    "HOSTEL FEE IS EXTRA (NOT INCLUDED IN THE ABOVE-MENTIONED FEE STRUCTURE).",
    "BGSKH EDUCATION TRUST DOES NOT ENCOURAGE ADMISSIONS THROUGH AGENTS OR SUPPORT AGENTS FOR THE ADMISSIONS IN THE COLLEGE.",
  ],
};


export const admissionInformationData: AdmissionInformationSection = {
  title: {
    black: "For Admission Related Information:",
    red: "",
  },

  contacts: [
    {
      name: "1. Dr. Ravi Kumar G.K",
      designation: "Principal, BGSCET",
      email: "E-Mail ID: principal@bgscet.ac.in",
      phone: "Phone: 9964897207",
    },
    {
      name: "2. Dr. G T Raju",
      designation:
        "Director, BGSCET {Formerly, worked @ BMSCE (1998–2008) and RNSIT (2008–2020). Presently, The Principal @ SJCIT}",
      email: "",
      phone: "Phone: 9731292555",
    },
    {
      name: "3. Mr. Hanumesh G. K",
      designation: "Office Superintendent, BGSCET",
      email: "",
      phone: "Mobile Number- +91 9844846820",
    },
  ],
};
