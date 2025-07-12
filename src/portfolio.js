/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vaishnavi's Portfolio",
  description: "Software engineer who can code up a storm and grill up a feast",
  og: {
    title: "Sai Vaishnavi Rachakonda Portfolio",
    type: "website",
    url: "", //TODO
  },
};

//Home Page
const greeting = {
  title: "Sai Vaishnavi Rachakonda",
  logo_name: "Sai Vaishnavi Rachaoknda", //TODO
  nickname: "SAi.",
  subTitle: "Software engineer who can code up a storm and grill up a feast",
  resumeLink:
    "https://drive.google.com/file/d/151s816JvOUnWCfFu7RQmIOULnx3_N8SR/view?usp=sharing",
  portfolio_repository:
    "https://github.com/Sai-Vaishnavi-Rachakonda?tab=repositories",
  githubProfile: "https://github.com/Sai-Vaishnavi-Rachakonda",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/Sai-Vaishnavi-Rachakonda",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vaishnavirachakonda/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:saivaishnavi.rachakonda@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vaishnavi.racahakonda/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/me._.vaish/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using, React Native and Android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/VaishnaviRachakonda/",
    },
    {
      siteName: "Github",
      profileLink: "https://github.com/Sai-Vaishnavi-Rachakonda",
      iconifyClassname: "simple-icons:github", // Reference https://fontawesome.com/icons/github?style=brands
      style: {
        // color: "#FFF",
      }, // Reference https://simpleicons.org/?q=github
    },
    {
      siteName: "LinkedIn",
      profileLink: "https://www.linkedin.com/in/vaishnavirachakonda/",
      iconifyClassname: "simple-icons:linkedin", // Reference https://fontawesome.com/icons/github?style=brands
      style: {
        color: "#0077B5",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Southern California",
      subtitle: "Masters of Science in Computer Science",
      logo_path: "usc.png",
      alt_name: "USC",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ I took up challenging courses like Algorithm analysis, Web Technology, Natural Language Processing  ",
        "⚡ I am also the President of Women In Engineering at USC.",
        "⚡ I am a Course Produce for Databases, Operating systems and Software Engineering courses.",
      ],
      website_link: "https://viterbischool.usc.edu/",
    },
    {
      title: "Sathyabama University",
      subtitle: "B.E. in Computer Science",
      logo_path: "sathyabama.jpeg",
      alt_name: "Sathyabama",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ I graduated in top 1% of my class .",
        "⚡ I was the Vice President of Computer Science Club.",
      ],
      website_link: "https://www.sathyabama.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteer Work",
  description:
    "I bring over 5 years of experience in Awesome Code development, with a strong focus on React, TypeScript, Redux, Node and design systems. Most recently, I am working as a Senior Frontend Engineer at FIS Global, where I led the development of scalable UI components, integrated cross-platform widgets, and improved performance across multiple internal apps used by thousands of users.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: " Sr Frontend Developer",
          company: "FIS Global",
          company_url: "https://www.fisglobal.com/",
          logo_path: "FIS-Logo-Green-PNG.webp",
          duration: "Feb 2025- Now",
          location: "Seattle, USA",
          description: `🚀 Shipped the entire View Service Pricing module in my first week — 100% on time, even with fuzzy requirements and missing context.

🧭 Built scalable UI patterns like an Action Menu and Side Drawer — made the app easier to navigate and helped new devs ramp up 40% faster.

🧰 Designed a centralized component library now used in 19+ internal apps — fewer bugs, faster shipping, and happier devs (and designers).`,
          color: "#0879bf",
        },
        {
          title: "Frontend Developer-II",
          company: "Uptycs Inc.",
          company_url: "https://www.uptycs.com/",
          logo_path: "Uptycs.webp",
          duration: "May 2023 - Feb 2025",
          location: "Boston, USA",
          description: `🎨 Built 27+ responsive web pages using React, Redux, and Node.js — fast, reusable, and built to scale.

📊 Designed interactive dashboards to monitor real-time Kubernetes activity. Used React hooks, lazy loading, and custom components to boost user engagement by 50%.

📈 Created a suite of 5 dashboards tracking metrics across 1M+ containers, directly contributing to $1M+ in revenue.

🧱 Led the creation of a React-based design system adopted org-wide — improved consistency, boosted user engagement by 60%, and cut bounce rate by 20%.

`,
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer-2",
          company: "Hitachi Vantara",
          company_url: "https://www.hitachivantara.com/en-us/home.html",
          logo_path: "legato_logo.png",
          duration: "June 2019 - April 2022",
          location: "Hyderabad, Telangana",
          description: `🥇 Outstanding Technical Excellence – FY20
Built more than just features — built trust. Recognized for technical leadership and quality.

💡 HiLife “Taking Ownership” Award – FY21
Took initiative when it mattered, shipped results when it wasn’t easy

🌍 Mentored 150+ developers across time zones
From HTML to React and Redux — helped teammates level up in frontend, testing, and real-world software development (and sometimes untangled that one CSS bug no one wanted to touch 🙃).`,
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company:
            "United Freight System Plus (UFS+) for Kintetsu World Express",
          logo_path: "kwe.jpeg",
          duration: "",
          location: "",
          description: `•	Accomplished implementation of a cutting-edge user interface, application architectures for a native windows application leveraging React, resulting in a 300% increase in user engagement, performance improvement and satisfaction.
•	Created 35 modular and independent components using React, Redux, and Java integrated to function efficiently, reducing redundancy
•	Developed and maintained a library of reusable common components 17 other projects inherited across organization reduced workload of projects by 57%`,
          color: "#9b1578",
        },
        {
          title: "React Developer",
          company: "Kyubota",
          logo_path: "Kubota.jpeg",
          duration: "",
          location: "",
          description:
            "•	Played a pivotal role as an on-site liaison, engaging with client to gather detailed requirements and spearheading test case development process for seamless requirement gathering and analysis of 34 use cases",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Intern",
          company: "Uptycs",
          company_url: "https://www.uptycs.com/",
          logo_path: "uptycs.jpeg",
          duration: "May 2023",
          location: "Massachusetts, USA",
          description: `•	Utilized Ag-Grid and Material UI libraries to create 25 interactive screens for data analysis and threat monitoring
•	Developed interactive dashboards utilizing React and Node JS to display real-time cloud resources, resulting in a 50% increase in system efficiency
•	Integrated responsive web design techniques, issue resolution, optimizing webpage for mobile devices and leading to a 50% increase in mobile traffic and an overall improvement of user experience 
`,
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteer Work",
      experiences: [
        {
          title: "Volunteer, Friends and Neighbors",
          company: "University of Southern California",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "usc.png",
          duration: "Jan 2023 - Present",
          location: "Los Angeles, California",
          description:
            "Volunteered at LA Food Bank, assisting with food distribution and contributing to community outreach effort",
          color: "#0C9D58",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Chennai, India",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organized hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "",
      createdAt: "2019-12-06T16:26:54Z",
      description:
        "'Principle Component Evaluation for Analyzing the Design Trends in Fashion Industry' in Test Engineering and Management-Scopus Nov-Dec 2019 edition",
      url: "http://www.testmagzine.biz/index.php/testmagzine/article/view/519",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "VaishnaviCircle.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "1226 W Adams Blvd, Los Angeles",
    locality: "California",
    country: "US",
    region: "Los Angeles",
    postalCode: "90007",
    streetAddress: "1226 W Adams Blvd",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/dir/34.0323962,-118.287271/1226+W+Adams+Blvd,+Los+Angeles,+CA+90007-1782,+USA/@34.0324489,-118.2899059,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80c2c7edf165a915:0x43c225176fe2fd24!2m2!1d-118.2872735!2d34.0323946?entry=ttu",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1 (323)-229-7726",
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
  publicationsHeader,
  publications,
  contactPageData,
};
