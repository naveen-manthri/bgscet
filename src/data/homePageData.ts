import aboutMuttImage from '../assets/images/about-mutt.jpg';
import aboutCampusImage from '../assets/images/about-university-campus.jpg';
import aboutCeremonyImage from '../assets/images/about-university-ceremony.jpg';
import heroImage from '../assets/images/carousel/Group 4.jpg';
import logoImage from '../assets/images/bgscet_logo-1.png';
import visionMissionImage from '../assets/images/vision-mission.jpg';

export type HomeHeroSlide = {
  id: number;
  title: string;
  image: string;
};

export const homeHeroSlides: HomeHeroSlide[] = [
  {
    id: 1,
    title: 'BGSCET campus event',
    image: heroImage,
  },
  {
    id: 2,
    title: 'BGSCET university ceremony',
    image: aboutCeremonyImage,
  },
  {
    id: 3,
    title: 'BGSCET campus building',
    image: aboutCampusImage,
  },
];

export const homeAboutUniversity = {
  title: 'About University',
  imageOne: aboutCeremonyImage,
  imageTwo: aboutCampusImage,
  badgeImage: logoImage,
  description:
    'BGS College of Engineering and Technology (BGSCET) is a newly established engineering institution offering five industry-driven UG programs - CS, IS, AI & ML, AI & DS, and Design. The college is managed by BGSKH Education Trust (R.), a unit of Sri Adichunchanagiri Shikshana Trust (SAST) under the guidance of Sri Adichunchanagiri Mahasamsthana Mutt. Located at Mahalakshmipuram, West of Chord Road, Bengaluru, BGSCET sits in a well-connected prime area with strong access to aspiring students. With a clear vision to become a leading centre of learning, the institute focuses on quality education, modern infrastructure, and highly qualified faculty to meet evolving national and global needs.',
};

export const homeAboutMutt = {
  title: 'About Mutt',
  image: aboutMuttImage,
  description:
    'Sri Adichunchanagiri Shikshana Trust (R.) was founded in the year 1974 under the divine leadership of His Holiness Byravaikya Sri Sri Dr. Bala Gangadharanatha Maha Swamiji. Following the Guru-Shishya Parampara, his holiness Byravaikya Jagadguru Sri Sri Dr. Bala Gangadharanatha Maha Swamiji, 71st in the holy lineage, who ascended the revered seat in 1974. The benevolent activities of social service gained accelerated momentum since then.',
};

export const homeVisionMission = {
  title: 'Vision & Mission',
  image: visionMissionImage,
  description:
    'BGS College of Engineering and Technology (BGSCET) is a newly established engineering institution offering five industry-driven UG programs - CS, IS, AI & ML, AI & DS, and Design. The college is managed by BGSKH Education Trust (R.), a unit of Sri Adichunchanagiri Shikshana Trust (SAST) under the guidance of Sri Adichunchanagiri Mahasamsthana Mutt.',
};

export const whatsappLink = 'https://wa.me/919964897207';
