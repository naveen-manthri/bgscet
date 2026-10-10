import collegeLogo from '../assets/images/bgscet-logos/bgscet_footer_logo.png';
import Student1 from '../assets/images/students-img/student-01.png';
import Student2 from '../assets/images/students-img/student-02.png';
import Student3 from '../assets/images/students-img/student-03.png';
import Student4 from '../assets/images/students-img/student-04.png';

import tataLogo from '../assets/images/companies/tata.png';
import tcsLogo from '../assets/images/companies/tcs.png';
import wiproLogo from '../assets/images/companies/wipro.png';
import infosysLogo from '../assets/images/companies/infosys.png';

export type CompanyLogo = {
  id: number;
  image: string;
};

export type Testimonial = {
  id: number;
  name: string;
  department: string;
  image: string;
  quote: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  id: number;
  title: string;
  links: FooterLink[];
};

export const companyLogos: CompanyLogo[] = [
  {
    id: 1,
    image: tataLogo,
  },
  {
    id: 2,
    image: tcsLogo,
  },
  {
    id: 3,
    image: wiproLogo,
  },
  {
    id: 4,
    image: infosysLogo,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sam',
    department: 'Mechanical Student',
    image: Student1,
    quote:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    id: 2,
    name: 'Sam',
    department: 'Mechanical Student',
    image: Student2,
    quote:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    id: 3,
    name: 'Sam',
    department: 'Mechanical Student',
    image: Student3,
    quote:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    id: 4,
    name: 'Sam',
    department: 'Mechanical Student',
    image: Student4,
    quote:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    id: 1,
    title: 'Schools',
    links: [
      { label: 'BGS National Public School', href: 'https://bgscet.ac.in/' },
      { label: 'BGS Residential School', href: 'https://bgscet.ac.in/publications/' },
      { label: 'International Public School', href: 'https://bgscet.ac.in/faculty/' },
      { label: 'BGS English School', href: 'https://bgscet.ac.in/' },
      { label: 'BGS School', href: 'https://bgscet.ac.in/labs/' },
      { label: 'Gnana Vikasa Polytechnic', href: 'https://bgscet.ac.in/labs/' },
      { label: 'BGSWS', href: 'https://bgscet.ac.in/' },
    ],
  },
  {
    id: 2,
    title: 'Colleges',
    links: [
      { label: 'Adichunchanagiri University', href: 'https://bgscet.ac.in/about/' },
      { label: 'SAC Institutions', href: 'https://bgscet.ac.in/publications/' },
      // { label: 'PU Colleges', href: 'https://bgscet.ac.in/' },
      { label: 'SJCIT', href: 'https://bgscet.ac.in/faculty/' },
      { label: 'SJBIT', href: 'https://bgscet.ac.in/' },
      { label: 'BGSIT', href: 'https://bgscet.ac.in/labs/' },
      { label: 'Medical Science', href: 'https://bgscet.ac.in/labs/' },
      { label: 'Nursing Science', href: 'https://bgscet.ac.in/labs/' },
      { label: 'Allied Health Science', href: 'https://bgscet.ac.in/labs/' },
    ],
  },
  {
    id: 3,
    title: 'PU Colleges',
    links: [
      { label: 'BGS Mahalakshmipuram', href: 'https://ise.sjcit.ac.in/' },
      { label: 'BGS Nagaruru', href: 'https://ce.sjcit.ac.in/' },
      { label: 'SAC Institutions', href: 'https://ae.sjcit.ac.in/' },
    ],
  },
];

export const footerInfo = {
  logo: collegeLogo,
  description:
    'New Engineering College with market-demanding employable emerging CSE, ISE, AIML, AIDS, CSD UG courses in Engineering and Technology. Established by BGS Education Trust, a unit of Sri Adichunchanagiri Shikshana Trust(SAST) under the ambit of Sri Adichunchanagiri Mahasamsthana Mutt, a well-known philanthropic organization in Karnataka.',
};