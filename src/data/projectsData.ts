import { Project } from '../types';
import profileImage1 from "../assets/workImgFive.jpg";
import profileImage2 from "../assets/images.jpeg";
import profileImage3 from "../assets/download.jpeg";



export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Mittinrich',
    description: 'Organic farming relies on composting, but maintaining the compost environment is challenging. The Smart Compost System automates monitoring, alerts, and maintenance, simplifying the process for households',
    image: profileImage1,
    category: 'Robotics',
    technologies: ['React', 'Node.js', 'MongoDB', 'MP&MC', 'Sensors'],
    liveUrl: '',
    githubUrl: 'https://github.com/SUNKUSHANMUKH/terra-smart-compost',
  },
  {
    id: 2,
    title: 'Text to speech convertor',
    description: 'MULTILINGUAL TEXT TO SPEECH CONVERTOR IS A FRAME WORK WHERE YOU CAN DIRECTLY CONVERT THE TEXT INTO THE SPEECH.',
    image: profileImage2,
    category: 'web',
    technologies: ['GTTS', 'Googletrans', 'Streamlit', 'JavaScript'],
    liveUrl: '',
    githubUrl: 'https://github.com/SUNKUSHANMUKH/MULTILINGUAL-TEXT-TO-SPEECH-CONVERTOR-',
  },
  {
    id: 3,
    title: 'Fake product & Fake review detection',
    description: 'It is used to detect the product and the review is it fake or real and detect the review is written via AI or not.',
    image: profileImage3,
    category: 'web',
    technologies: ['React', 'Next.js', 'Mongodb', 'Tailwind CSS', 'Ai'],
    liveUrl: 'https://stackblitz.com/edit/shanmukh-abhi-bharath-diugwkcb?file=package.json',
    githubUrl: 'https://github.com/SUNKUSHANMUKH/Fake-product-and-Review-Detection',
  },
  {
    id: 4,
    title: 'Upakshya Viraha',
    description: 'The Automation of waste material segregation in the scrap sector is the focus of this project. This project recommends an easy way to separate three different waste types: glass, metal and plastic.',
    image: 'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXUwOXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--dcd381e7db86fdea55ab769a1bc866449f7ec865/workImgFive.jpg',
    category: 'Robotics',
    technologies: ['React', 'Node.js', 'MongoDB', 'MP&MC', 'Sensors'],
    liveUrl: '',
    githubUrl: 'https://github.com/SUNKUSHANMUKH/Upakshya-viraha',
  },
];