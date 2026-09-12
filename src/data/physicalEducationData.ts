import banner from '../assets/images/physicalEdu/physicalEdu-banner.png';
import hod from '../assets/images/physicalEdu/pe-hod.png';
import instructor from '../assets/images/physicalEdu/Mr-Tharun-Kumar.png';
import winners from '../assets/images/physicalEdu/winner-group.png';
import tugOfWar from '../assets/images/physicalEdu/Tug-of-War.png';
import chessAward from '../assets/images/physicalEdu/leelajai-chess.png';
import goldMedal from '../assets/images/physicalEdu/jnanasagar-gold-medal.png';
import medalAwards from '../assets/images/physicalEdu/leelajai-rishank-medals.png';
import sports1 from '../assets/images/physicalEdu/sports-1.png';
import sports2 from '../assets/images/physicalEdu/sports-2.png';
import sports3 from '../assets/images/physicalEdu/sports-3.png';
import sports4 from '../assets/images/physicalEdu/sports-4.png';
import sports5 from '../assets/images/physicalEdu/sports-5.png';
import sports6 from '../assets/images/physicalEdu/sports-6.png';
import sports7 from '../assets/images/physicalEdu/sports-7.png';
import sports8 from '../assets/images/physicalEdu/sports-8.png';
import sports9 from '../assets/images/physicalEdu/sports-9.png';
import sports10 from '../assets/images/physicalEdu/sports-10.png';
import sports11 from '../assets/images/physicalEdu/sports-11.png';
import sports12 from '../assets/images/physicalEdu/sports-12.png';
import type { PhysicalEducationData } from '../types/physicalEducation';

export const physicalEducationData: PhysicalEducationData = {
  banner: {
    image: banner,
    title: 'Department Of Physical Education & Sports',
  },
  people: [
    {
      image: hod,
      name: 'Ms. Shruthi K.S.',
      role: 'Physical Education Director',
      alt: 'Ms. Shruthi K.S., Physical Education Director',
    },
    {
      image: instructor,
      name: 'Mr. Tharun Kumar Yadav C.',
      role: 'PT Instructor',
      alt: 'Mr. Tharun Kumar Yadav C., PT Instructor',
      className: 'physical-education__instructor',
    },
  ],
  message: 'I am very glad to lead the Department of Physical Education and Sports at BGSCET. Our department aims at providing the overall development of students by identifying their talents, facilitating sports infrastructure, and providing professional training and guidance to excel in their respective events and competitions. Student participation in sports activities improves mental health, leadership qualities, team management, self-confidence, and discipline. We encourage students to take part in national and international level tournaments. The management of BGSCET provides playground facilities, kit allowances, and special incentives for players.',
  tugOfWarImage: tugOfWar,
  achievementImage: winners,
  achievementAlt: 'BGSCET sports achievers with trophies and medals',
  recognitions: [
    {
      image: chessAward,
      alt: 'Students receiving the Leelajai K.C. Chess Championship award',
      text: 'With the divine blessings of our Poojya Swamiji Sri Sri Sri Paramahamsa Nithyananda Swamiji, we congratulate the winning team from our college at the Leelajai K.C. Chess Championship 2025.',
    },
    {
      image: medalAwards,
      alt: 'Students receiving gold and bronze sports medals',
      text: 'With the divine blessings of our Poojya Swamiji, we are happy to share that Leelajai Krishna of 1st Year AI & DS secured gold and Rishank Raj of 2nd year AI&ML secured bronze in BGS Kreedotsava organised by SriMata at Srikshetra on 7th March 2025.',
    },
    {
      image: goldMedal,
      alt: 'Student receiving a gold medal for triple jump',
      text: 'With the divine blessings of our Poojya Swamiji, we are happy to share that Jnanasagar M of 6th ISE secured a gold medal in Triple Jump event in BGS Kreedotsava organised by SriMata at Srikshetra on 8th March 2025.',
    },
  ],
  annualSportsImages: [
    sports1, sports2, sports3, sports4, sports5, sports6,
    sports7, sports8, sports9, sports10, sports11, sports12,
  ],
};
