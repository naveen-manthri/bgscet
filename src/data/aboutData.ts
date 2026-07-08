import aboutMuttImage from '../assets/images/about-mutt.jpg';
import aboutUniversityCampus from '../assets/images/about-university-campus.jpg';
import aboutUniversityCeremony from '../assets/images/about-university-ceremony.jpg';
import visionMissionImage from '../assets/images/vision-mission.jpg';

export const aboutUniversity = {
  title: 'About University',
  description:
  'BGS College of Engineering and Technology (BGSCET) is a newly established engineering institution offering five industry-driven UG programs — CS, IS, AI & ML, AI & DS, and Design. The college is managed by BGSKH Education Trust (R.), a unit of Sri Adichunchanagiri Shikshana Trust (SAST) under the guidance of Sri Adichunchanagiri Mahasamsthana Mutt. Located at Mahalakshmipuram, West of Chord Road, Bengaluru, BGSCET sits in a well-connected prime area with strong access to aspiring students. With a clear vision to become a leading centre of learning, the institute focuses on quality education, modern infrastructure, and highly qualified faculty to meet evolving national and global needs.',
  buttonText: 'For Admission Click Here',
  images: {
    primary: aboutUniversityCeremony,
    secondary: aboutUniversityCampus,
  },
};

export const statistics = [
  { id: 1, value: '90%', label: 'Placement Rate' },
  { id: 2, value: '100+', label: 'University Ranks' },
  { id: 3, value: '90%', label: 'Placement Rate' },
  { id: 4, value: '100+', label: 'University Ranks' },
];

export const aboutMutt = {
  title: 'About Mutt',
  description:
    'Sri Adichunchanagiri Shikshana Trust (R.) was founded in the year 1974 under the divine leadership of His Holiness Byravaikya Sri Sri Sri Dr. Balagangadharanatha Maha Swamiji. Following the "Guru-Shishya" Parampara, His holiness Byravaikya Jagadguru Sri Sri Sri Dr. Balagangadharanatha Maha Swamiji, 71st in the holy lineage, who ascended the revered seat in 1974. The benevolent activities of social service gained an accelerated momentum since then.',
  image: aboutMuttImage,
};

export const visionMission = {
  title: 'Vision & Mission',
  description:
    'BGS College of Engineering and Technology (BGSCET) is a newly established engineering institution offering five industry-driven UG programs - CS, IS, AI & ML, AI & DS, and Design. The college is managed by BGSKE and Trust (R.), a unit of Sri Adichunchanagiri Shikshana Trust (SAST) under the guidance of Sri Adichunchanagiri Mahasamsthana Mutt.',
  image: visionMissionImage,
};
