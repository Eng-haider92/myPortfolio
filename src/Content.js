//import images skills
import profile_image from './assets/image/profile-image.jpg';
import html from './assets/image/skills/HTML.png';
import css from './assets/image/skills/CSS.png';
import react from './assets/image/skills/react.png';
import java from './assets/image/skills/java.png';
import javaFX from './assets/image/skills/javaFX.png';
import spring from './assets/image/skills/spring.png';
//import images certificates
import cr_1 from './assets/image/certificate/cr_1.png';
import cr_2 from './assets/image/certificate/cr_2.PNG';
import cr_3 from './assets/image/certificate/cr_3.PNG';
import cr_4 from './assets/image/certificate/cr_4.PNG';
import cr_5 from './assets/image/certificate/cr_5.PNG';
import cr_6 from './assets/image/certificate/cr_6.PNG';

//import icons
import { GiSkills } from "react-icons/gi";
import { SiAboutdotme } from 'react-icons/si';
import { MdOutlineCastForEducation, MdOutlineContactPhone} from "react-icons/md";
import { IoMdAppstore, IoMdHome } from "react-icons/io";

export const content = {
    nav: [
      {
        link: "#home",
        icon: IoMdHome,
      },
      {
        link: "#about",
        icon: SiAboutdotme,
      },
      {
        link: "#skills",
        icon: GiSkills,
      },
      {
        link: "#certificates",
        icon: MdOutlineCastForEducation,
      },
      {
        link: "#projects",
        icon: IoMdAppstore,
      },
      {
        link: "#contact",
        icon: MdOutlineContactPhone,
      },
    ],
    header:{
        title: 'Full-Stack Developer',
        firstName: 'Haider ',
        lastName: 'Rajab',
        profileImage: profile_image,
        header_content: [
            {
              count: "+2",
              text: "Years of Experinse in Web development",
            },
            {
              count: "10+",
              text: "Projects Worked in my career",
            },
          ],
        },
    about:{
        title: 'About',
        aboutMe:`Passionate full-stack engineer with 2+ years of hands-on experience in developing scalable websites,
        web applications, and desktop apps. I can build apps from scratch,
         starting with planning for the project and collecting the requirements and specifying tools, 
         then designing the database, user interface, and logical businese then implementing the previous stage and achieving the work then testing the output and functionality,
         and finally deploy the application`,
        birthday: '22-3-1992',
        age: '31',
        website: 'https://Eng-haider92.github.io/portfolio',
        phone: '+963 935 662 976',
        city: 'Damascus, SY',
        degree: 'Bachalores',
        email: 'haider.rajab.92@gmail.com',
        freelancer: 'Available',
        },
    skills:{
        title: "Skills",
        subtitle: "My top skills",
        skills_content: [
          {
            name: "HTML",
            para: "Hyper Text Markup Language for Web pages.",
            logo: html,
          },
          {
            name: "CSS",
            para: "Cascading Style Sheets to format content structure",
            logo: css,
          },
          {
            name: "React",
            para: "JavaScript library for building user interfaces based on UI components.",
            logo: react,
          },
          {
            name: "Java",
            para: "High-level, class-based, object-oriented programming language.",
            logo: java,
          },
          {
            name: "Spring boot",
            para: "Framework used to create micro Services.",
            logo: spring,
          },
          {
            name: "JavaFX",
            para: "Software platform for creating desktop applications",
            logo: javaFX,
          },
        ],
      },

    certificate:{
      title: "Eductaion",
      subtitle: 'My Certificates',
      certificates:[
        {
          name:'Bachelor in Information Technology Engineering',
          issuingOrganization:'Damascus university',
          issueDate: 'March 2020',
          expirationDate: 'This certification does not expire',
          credentialId: 'AA 000037056',
          credentialURL: `http://damascusuniversity.edu.sy/Auth`,
          image: cr_1,
          },
        {
          name:'Introduction to Front-End Development',
          issuingOrganization:'Coursera',
          issueDate: 'January 2023',
          expirationDate: 'This certification does not expire',
          credentialId: 'TAGHATRBU5L3',
          credentialURL: `https://www.coursera.org/account/accomplishments/certificate/TAGHATRBU5L3`,
          image: cr_2,
          },
          {
          name:'Programming with JavaScript',
          issuingOrganization:'Coursera',
          issueDate: 'January 2023',
          expirationDate: 'This certification does not expire',
          credentialId: 'PA97A775D97J',
          credentialURL: `https://www.coursera.org/account/accomplishments/certificate/PA97A775D97J`,
          image: cr_3,
        },        
        {
          name:'HTML and CSS in depth',
          issuingOrganization:'Coursera',
          issueDate: 'January 2023',
          expirationDate: 'This certification does not expire',
          credentialId: 'PG4UHVF3BDNH',
          credentialURL: `https://www.coursera.org/account/accomplishments/certificate/PG4UHVF3BDNH`,
          image: cr_5,
        },
        {
          name:'React Basics',
          issuingOrganization:'Coursera',
          issueDate: 'January 2023',
          expirationDate: 'This certification does not expire',
          credentialId: 'USTWL95AJH4X',
          credentialURL: `https://www.coursera.org/account/accomplishments/certificate/USTWL95AJH4X`,
          image: cr_6,
        },
        {
          name:'Version Control',
          issuingOrganization:'Coursera',
          issueDate: 'January 2023',
          expirationDate: 'This certification does not expire',
          credentialId: 'Z3RZEKUWZRXX',
          credentialURL: `https://www.coursera.org/account/accomplishments/certificate/Z3RZEKUWZRXX`,
          image: cr_4,
        },
      ]
    },
    project:{
        title: 'Projects',
        subtitle: 'Some of my projects',
        projects:[
          {
            name: 'Online Kitchen',
            description: 'Web application for browse, add, delete recipes online. ',
            URL: 'https://eng-haider92.github.io/onlineKitchen/',
          },
          {
            name: 'Web Application Security',
            description: 'Swiper React components will likely to be removed in future versions. It is recommended ',
            URL: '',
          },
          {
            name: 'Cryptography',
            description: 'Implement encryption methods in Server-client desktop application',
            URL: '',
          },
          {
            name: 'Adventure Work',
            description: 'Web application for managing and selling products online. ',
            URL: '',
          },          
        ]
    },
    contact:{
      title: 'Contact Me',
      copyright: 'Copyright ©2020 All rights reserved | This Website is made with',
      author: 'by Haider Rajab',
      footer:'This is my portfolio, created using reactJS, if you have any quesion please feel free to contact me through the from or any of my social media account. ',
      serviceID: 'service_34nv9di',
      templateID: 'template_30fuqk7',
      myKey: '-7DDGAoof2II0nYwM',

    },

    }