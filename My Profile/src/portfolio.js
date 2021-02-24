import biet from './assests/images/biet.png';
import lpu from './assests/images/lpu.png';
import dei from './assests/images/dei.png';
import tcs from './assests/images/tcs.png';
import python from './assests/images/python.jpeg';
import indutech from './assests/images/indutech.png';
import leeds from './assests/images/leeds.png';
import amcat from './assests/images/amcat.png';
import maruti from './assests/images/maruti.png';
import coursera from './assests/images/coursera_logo.png';
const settings = {
  isSplash: false,
};
const seo = {
  title: 'Shivam Mathur',
  description:
    'A self taught frontend developer & UI/UX Designer, passionate about developing responsive web apps, via implementation of JAMStack & Javascript libraries.',
  og: {
    title: 'Shivam Mathur Profile',
    type: 'website',
    url: 'http://webdevshivam.com/',
  },
};
const greeting = {
  title: 'Shivam Mathur',
  logo_name: 'ShivamMathur',
  nickname: 'frontend_guy',
  subTitle:
    'A self taught frontend developer & UI/UX designer, passionate about developing responsive web apps, via implementation of JAMStack & Javascript libraries.',
  resumeLink:
    'https://drive.google.com/file/d/1mLO-GeL2xXdihf_N8T_vZBhNgLpueTuh/view?usp=sharing',
  portfolio_repository: 'https://github.com/shivammathur98/Portfolio',
};

const socialMediaLinks = [
  {
    name: 'Github',
    link: 'https://github.com/shivammathur98',
    fontAwesomeIcon: 'fa-github',
    backgroundColor: '#181717',
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/shivam-mathur-427b77161',
    fontAwesomeIcon: 'fa-linkedin-in',
    backgroundColor: '#0077B5',
  },
  {
    name: 'Gmail',
    link: 'mailto:shivammathur1998@gmail.com',
    fontAwesomeIcon: 'fa-google',
    backgroundColor: '#D14836',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/shivammathur98',
    fontAwesomeIcon: 'fa-twitter',
    backgroundColor: '#1DA1F2',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100005101666108',
    fontAwesomeIcon: 'fa-facebook-f',
    backgroundColor: '#1877F2',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/sshivam.mathur',
    fontAwesomeIcon: 'fa-instagram',
    backgroundColor: '#E4405F',
  },
];
const skills = {
  data: [
    {
      title: 'Progressive Web Apps',
      fileName: 'DataScienceImg',
      skills: [
        "⚡ Developing highly reliable & capable pwa's.",
        '⚡ Close resemblence to native apps with similar user interface & experience.',
        '⚡ Work on multiple platforms including both desktop and mobile devices.',
        '⚡ Full responsiveness and browser compatibility.',
      ],
      softwareSkills: [],
    },
    {
      title: 'Frontend Development',
      fileName: 'FullStackImg',
      skills: [
        '⚡ Building resposive website front end using React-Redux.',
        '⚡ Thorough knowledge and implementation of Javascript ES6+ features.',
        '⚡ Employing Javascript libraries to create more interactive & user friendly projects.',
      ],
      softwareSkills: [
        {
          skillName: 'HTML5',
          fontAwesomeClassname: 'simple-icons:html5',
          style: {
            color: '#E34F26',
          },
        },
        {
          skillName: 'CSS3',
          fontAwesomeClassname: 'fa-css3',
          style: {
            color: '#1572B6',
          },
        },
        {
          skillName: 'Sass',
          fontAwesomeClassname: 'simple-icons:sass',
          style: {
            color: '#CC6699',
          },
        },
        {
          skillName: 'Bootstrap',
          fontAwesomeClassname: 'logos-bootstrap',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'simple-icons:javascript',
          style: {
            backgroundColor: '#000000',
            color: '#F7DF1E',
          },
        },
        {
          skillName: 'ReactJS',
          fontAwesomeClassname: 'simple-icons:react',
          style: {
            color: '#61DAFB',
          },
        },
        {
          skillName: 'WordPress',
          fontAwesomeClassname: 'logos-wordpress',
        },
      ],
    },
    {
      title: 'Basic Python Dev.',
      fileName: 'CloudInfraImg',
      skills: [
        "⚡ Beginner's level Python development.",
        '⚡ Developing graphical user interfaces for python applications using Tkinter.',
        '⚡ Utilizing various Python libraries to implement required & desirable features.',
        '⚡ Deploying Python and react projects over cloud for execution on mobile devices using Azure.',
      ],
      softwareSkills: [
        {
          skillName: 'VSCode',
          fontAwesomeClassname: 'simple-icons:visualstudiocode',
          style: {
            color: '#0078d7',
          },
        },
        {
          skillName: 'Python',
          fontAwesomeClassname: 'logos-python',
        },
        {
          skillName: 'PyCharm',
          fontAwesomeClassname: 'simple-icons:pycharm',
          style: {
            color: '#000000',
          },
        },
        {
          skillName: 'PyTorch',
          fontAwesomeClassname: 'logos-pytorch',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassname: 'simple-icons:microsoftazure',
          style: {
            color: '#0089D6',
          },
        },
      ],
    },
    {
      title: 'UI/UX Design',
      fileName: 'DesignImg',
      skills: [
        '⚡ Designing highly attractive user interface for mobile and web applications',
        '⚡ Customizing logo designs and building logos from scratch',
        '⚡ Creating the flow of application functionalities to optimize user experience',
      ],
      softwareSkills: [
        {
          skillName: 'Figma',
          fontAwesomeClassname: 'logos-figma',
          style: {
            color: '#F24E1E',
          },
        },
        {
          skillName: 'Webflow',
          fontAwesomeClassname: 'logos-webflow',
          style: {
            color: '#4482D2',
          },
        },
        {
          skillName: 'proto.io',
          fontAwesomeClassname: 'logos-protoio',
          style: {
            color: '#3776AB',
          },
        },
      ],
    },
  ],
};
// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: 'HackerRank',
      iconifyClassname: 'simple-icons:hackerrank',
      style: {
        color: '#2EC866',
      },
      profileLink: 'https://www.hackerrank.com/shivammathur1798',
    },
    {
      siteName: 'Codechef',
      iconifyClassname: 'simple-icons:codechef',
      style: {
        color: '#5B4638',
      },
      profileLink: 'https://www.codechef.com/users/webdevshivam',
    },
    {
      siteName: 'Codeforces',
      iconifyClassname: 'simple-icons:codeforces',
      style: {
        color: '#1F8ACB',
      },
      profileLink: 'http://codeforces.com/profile/webdevshivam',
    },
    {
      siteName: 'Hackerearth',
      iconifyClassname: 'simple-icons:hackerearth',
      style: {
        color: '#323754',
      },
      profileLink: 'https://www.hackerearth.com/@shivam4054',
    },
    {
      siteName: 'LeetCode',
      iconifyClassname: 'simple-icons:leetcode',
      style: {
        color: '#20BEFF',
      },
      profileLink: 'https://leetcode.com/webdevshivam/',
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: 'Lovely Professional University Distance Education',
      subtitle: 'Master of Science in Information Technology',
      logo_path: lpu,
      alt_name: 'L.P.U.D.E.',
      duration: '2020 - Present',
      color: '#ef7d00',
      pcolor: '#000000',
      textcolor: 'black',
      descriptions: [
        '⚡ Presently learning advanced topics related to IT subjects like Operating Systems, Database Management Systems, etc.',
        '⚡ Apart from this, working on my side projects which involves development using the MERN stack.',
      ],
      website_link: 'https://www.lpude.in/',
    },
    {
      title: 'Bundelkhand Institute of Engineering & Technology, Jhansi',
      subtitle: 'Bachelor of Technology in Information Technology',
      logo_path: biet,
      alt_name: 'B.I.E.T. Jhansi',
      color: '#e41e20',
      pcolor: '#e41e20',
      textcolor: 'white',
      duration: '2017 - 2020',
      descriptions: [
        '⚡ Studied basic software engineering subjects like DS, Algorithms, Cryptography, Web Tech, CA, AI etc.',
        '⚡ Pursued courses on Web development, Python programming, Javascript, Microsoft Azure & Web designing.',
      ],
      website_link: 'http://www.bietjhs.ac.in',
    },
    {
      title: 'Dayalbagh Educational Institute',
      subtitle: 'Diploma in Automobile Engineering',
      logo_path: dei,
      color: '#dedf75',
      pcolor: 'rgb(0,8,85)',
      textcolor: 'rgb(0,8,85)',
      alt_name: 'D.E.I.',
      duration: '2014 - 2017',
      descriptions: [
        '⚡ Gained in-depth knowledge about functioning and working principles of automobiles.',
        '⚡ Completed three months summer internship as a Workshop Trainee.',
        '⚡ Built projects including a prototype of Lopifit & a working model of Valve Operating Mechanism.',
      ],
      website_link: 'https://www.dei.ac.in/dei/',
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: 'TCS NQT',
      subtitle: 'Score Card',
      logo_path: tcs,
      certificate_link:
        'https://drive.google.com/file/d/1CUY4vn__fn6Pcfn0lDaljdgrinGUqeyr/view?usp=sharing',
      alt_name: 'Tcs',
      color_code: '#e39e2eff',
    },
    {
      title: 'Python',
      subtitle: 'FindREDD',
      logo_path: python,
      certificate_link: 'http://www.findredd.in/certificate/FITP-2020-06-54/',
      alt_name: 'Python',
      color_code: '#ba1816ff',
    },
    {
      title: 'Frontend Development',
      subtitle: 'Indutech PVT. LTD.',
      logo_path: indutech,
      certificate_link:
        'https://drive.google.com/file/d/1YGN5cUYlmPc-WfjrjfwGkvgJmCvR5Nk5/view?usp=sharing',
      alt_name: 'INDUTECH',
      color_code: '#b1b1b1ff',
    },
    {
      title: 'HTML, CSS',
      subtitle: 'University of Leeds',
      logo_path: leeds,
      certificate_link: 'https://www.futurelearn.com/certificates/shyyv1a',
      alt_name: 'Leeds',
      color_code: '#282723FF',
    },
    {
      title: 'Python dev.',
      subtitle: 'Coursera',
      logo_path: coursera,
      certificate_link: 'https://www.coursera.org/learn/python/home/welcome',
      alt_name: 'coursera',
      color_code: '#0055d3ff',
    },
    {
      title: 'English Comprehension',
      subtitle: 'AMCAT',
      logo_path: amcat,
      certificate_link:
        'https://www.myamcat.com/certificate/10099144/in-english-comprehension/283',
      alt_name: 'AMCAT',
      color_code: '#1F70C199',
    },
    {
      title: 'Data Processing Specialist',
      subtitle: 'AMCAT',
      logo_path: amcat,
      certificate_link:
        'https://www.myamcat.com/certificate/10099144/data-processing-specialist/211',
      alt_name: 'AMCAT',
      color_code: '#0C9D5899',
    },
    {
      title: 'Proficiency in English',
      subtitle: 'AMCAT',
      logo_path: amcat,
      certificate_link:
        'https://www.myamcat.com/certificate/10099144/proficiency-in-english/284',
      alt_name: 'AMCAT',
      color_code: '#00000055',
    },
    {
      title: 'Workshop Trainee',
      subtitle: 'Madhusudan Motors',
      logo_path: maruti,
      certificate_link:
        'https://drive.google.com/file/d/1fHuggei4qyps7qt0jmSJY50aqKHVSfgL/view?usp=sharing',
      alt_name: 'Maruti',
      color_code: '#ebc7c8',
    },
  ],
};
// Experience Page
const experience = {
  title: 'Internship',
  subtitle: '',
  description:
    'Being a Web development enthusiast, I pursued my internship in my domain of interest, i.e. front end development from a well established organization in Agra that helped me gain more insights about web development.',
  header_image_path: 'experience.svg',
  sections: [
    {
      title: 'Internships & Training',
      experiences: [
        {
          title: 'Python Progamming Trainee',
          company: 'FindREDD',
          company_url: 'http://www.findredd.in',
          logo_path: python,
          duration: 'Oct 2020 - Nov 2020',
          location: 'Online',
          description:
            "Findredd is an innovative approach to address global health. They provide immediate access to blood donors all over India, 24x7. The training programme was conducted by Findredd in collaboration with B.I.E.T. to provide training to students all over India. During the training, I gained basic understanding of python programming language and made small programs based on it's various fundamental concepts. Also participated and scored well in the various quizes and tests conduted during the programme.",
          color: '#ee3c26',
        },
        {
          title: 'Junior Web Developer',
          company: 'Indutech Pvt. Ltd.',
          company_url: 'https://www.indutechit.com/',
          logo_path: indutech,
          duration: 'May 2019 - June 2019',
          location: 'Agra',
          description:
            'A web design and development company based in Agra, also expertise in mobile app development, digital marketing and custom software development services. I designed landing pages for various projects alloted, also learned about frontend development and Laravel - a PHP web framework. Made a project of Student Management System using Laravel and MySQL.',
          color: '#0071C5',
        },
        {
          title: 'Workshop Trainee',
          company: 'Madhusudan Motors',
          company_url: 'https://www.marutisuzuki.com/',
          logo_path: maruti,
          duration: 'June 2016 - August 2016',
          location: 'Agra',
          description:
            'An authorized Maruti Suzuki dealership providing repairs, service and maintenance of vehicles. Worked as a workshop trainee and gained knowledge regarding the regular service of vehicles and various components of the engine and issues occuring in it.',
          color: '#0071C5',
        },
      ],
    },
  ],
};
// Projects Page
const projectsHeader = {
  title: 'Projects',
  description:
    'My projects make use of vast variety of latest technology & tools. My best of projects make use of JAMStack, ReactJS, Javascript, along with Python and its libraries.',
  avatar_image_path: 'projects_image.svg',
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: 'Contact Me',
    description:
      "I'm available on almost every social media. You can message me and I'll reply as soon as possible. I can help you with innovative project ideas, landing pages, pwa's, React Development and other Frontend projects.",
  },
  blogSection: {
    title: 'Blog',
    subtitle:
      'For individual fundamental empowerment, and to share my journey of becoming a self taught developer, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.',
    link: 'https://webdevshivam.wordpress.com',
    avatar_image_path: 'blogs_image.svg',
  },
  addressSection: {
    title: 'Address',
    subtitle: 'Dayalbagh, Agra, Uttar Pradesh - 282005',
    avatar_image_path: 'address_image.svg',
    location_map_link: 'https://goo.gl/maps/81EarLvPGAK2tpye9',
  },
  phoneSection: {
    title: 'Discuss project ideas, or just say hi? call me on',
    subtitle: '+91 8433424730',
  },
};
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
