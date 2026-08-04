import type { AboutLibrarianData } from "../types/aboutLibrarian";

import librarianImage from "../assets/images/library/Mr. Channakeshavappa.D.png";
import assistantLibrarianImage from "../assets/images/library/Mrs.RAMYA\u2028.png";

export const aboutLibrarianData: AboutLibrarianData = {
  title: "ABOUT LIBRARIAN",

  paragraphs: [
    "Dr. Vedamurthy.Y.N began his career as a Librarian at Dr. SyamalaReddy Dental College Hospital and Research Centre, Bangalore, 2005 and at Indian Academy Group of Institution from 2007, M.S.R. Foundation from 2008 to 2022 and is currently working in BGS College of Engineering and Technology. He is also handling the Institutional Repository (IR) and NPTEL-SWAYAM Local Chapter.",

    "He has completed his Ph.D. in Library & Information Science from Chandra Mohan Jha University, M.Phil in Library & Information Science from Chandra Mohan Jha University, Master of Library & Information Science from Alagappa University and Master of Social Work from Annamalai University.",

    "He has cleared his KSET in December, 2018.",

    "He has published 03 research papers and has participated in more than 22 State, National and International level Seminars and Conferences.",

    "He has also participated in more than 41 Webinars (Hybrid mode) at National and International level."
  ],

  membersTitle: "He is a Member of",

  members: [
    {
      id: 1,
      text: "Member of Karnataka State Private College Librarians Association"
    },
    {
      id: 2,
      text: "Member of Library and Information Science Links (Lis Links)"
    },
    {
      id: 3,
      text: "Member of Lis forum-request"
    },
    {
      id: 4,
      text: "Member of Indian Library Association"
    },
    {
      id: 5,
      text: "Member of Online Computer Library Centre (OCLC)"
    },
    {
      id: 6,
      text: "Member of National Digital Library of India (NDLI)"
    },
    {
      id: 7,
      text: "Life Member of Lis Academy"
    },
    {
      id: 8,
      text: "Member of SWAYAM-NPTEL Local Chapter (SPOC)"
    }
  ],

  staff: [
    {
      id: 1,
      image: librarianImage,
      name: "Mr. Channakeshavappa D",
      designation: "Asst. Librarian",
      qualification: "M.L.I.Sc., M.A., PGD, HRM"
    },
    {
      id: 2,
      image: assistantLibrarianImage,
      name: "Mrs. Ramya",
      designation: "Library Assistant",
      qualification: "B.A., M.A."
    }
  ]
};
