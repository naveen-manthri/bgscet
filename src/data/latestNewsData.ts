import type { LatestNewsSection } from "../types/latestNews";
import advayaPoster from "../assets/images/latestNews/ADYAVA2.0.jpeg";
import infosysTrainingPoster from "../assets/images/latestNews/infosys-training.jpeg";
import sihHackathonPoster from "../assets/images/latestNews/Hackathon_for_SIH_2025.jpeg";
import progressiveTrainingPoster from "../assets/images/latestNews/progressive.jpeg";
import firstSemesterCalendar from "../assets/images/latestNews/first-Sem-2026.jpeg";
import vtuFifthSemesterCalendar from "../assets/images/latestNews/vtu-5h-sem.jpeg";
import vtuThirdSemesterCalendar from "../assets/images/latestNews/vtu-3rd-sem.jpeg";

export const latestNewsSections: LatestNewsSection[] = [
  { title: "Latest Events", items: [
    { text: "Advaya 2.0", href: advayaPoster, image: true },
    { text: "Advaya 2.0-2k26", href: "https://advaya2.vercel.app/" },
    { text: "BGSCET-AIDS-FDP-JAN 27-31st", href: "https://bgscet.ac.in/wp-content/uploads/2026/01/AIDS-B_AIDS-F_merged.pdf" },
    { text: "Infosys Company Specific Training Program", href: infosysTrainingPoster, image: true },
    { text: "Hackathon for SIH 2025", href: sihHackathonPoster, image: true },
    { text: "Global Education Fair 2025", href: "https://bgscet.ac.in/wp-content/uploads/2025/09/BGSCET-2.pdf" },
    { text: "BGSCET-FDP-SEP 1st TO 5th", href: "https://bgscet.ac.in/wp-content/uploads/2025/08/BGSCET-FDP.pdf" },
    { text: "NASA SPACE APPS CHALLENGE (Oct 5 & 6)", href: "https://bgscet.ac.in/wp-content/uploads/2025/08/NASA-SPACE-APPS-CHALLENGE-2025-.pdf" },
    { text: "Register here", href: "https://www.spaceappschallenge.org/2025/local-events/chikkamagaluru/?tab=details" },
    { text: "FDP Program, Aug 18th to 22nd", href: "https://bgscet.ac.in/wp-content/uploads/2025/08/FDP-program-25.pdf" },
    { text: "BGSCET-ISE-FDP-JAN 29,30,31st.", href: "https://bgscet.ac.in/wp-content/uploads/2026/01/3-Days-FSD-FDP.pdf" },
    { text: "Progressive Training Program for 6th Sem Students from Feb 2nd - 7th 2026.", href: progressiveTrainingPoster, image: true },
    { text: "HR Conclave-May 23, 2025.", href: "https://drive.google.com/drive/folders/1p8C0RWi_5djYxeN6Lro_2oOyAIMTwQbS" },
    { text: "Sushumna 2k25 College Magazine.", href: "https://drive.google.com/file/d/1kAX3UanPWlGSg1b6GjFxDvSYFW5i6gHx/view" },
  ]},
  { title: "Circular’s", items: [
    { text: "Admissions Open for 2026-27", href: "https://docs.google.com/forms/d/e/1FAIpQLSeWHTw4hcsGD3tdyQAkoTIHAtsehLTmb50104fJbKQntKWtrg/closedform" },
    { text: "Contact Us for More Information", href: "/contact", internal: true },
    { text: "First semester 2026 academic calendar", href: firstSemesterCalendar, image: true },
    { text: "VTU- 5th semester academic calendar", href: vtuFifthSemesterCalendar, image: true },
    { text: "VTU- 3rd semester academic calendar", href: vtuThirdSemesterCalendar, image: true },
  ]},
];
