import {
  PersonalInfo,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  EducationItem,
  CertificationItem,
  AchievementItem
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Janani S.',
  role: 'B.Tech IT Student • Full-Stack Developer & Problem Solver',
  tagline: 'Engineering Scalable Backends, Cloud Architectures & Modern Web Applications',
  summary:
    'Results-driven Information Technology student with a strong foundation in full-stack development, cloud computing, and Data Structures & Algorithms. Experienced in architecting robust enterprise backends with Java and Spring Boot, modern reactive user interfaces with React, and data-driven systems.',
  aboutBio: [
    'I am an Information Technology undergraduate at Sri Krishna College of Technology (2023–2027) with a consistent academic record of 8.36 CGPA. I approach software engineering through a dual lens of rigorous algorithmic precision and thoughtful, elegant system architecture.',
    'Currently interning as an AI/ML Intern focusing on AI-Driven Application Development with the MERN Stack, contributing to RESTful services, database integration, data processing, and responsive interface workflows.',
    'My core engineering repertoire centers around Java, Spring Boot, React, MySQL, Supabase, and AWS fundamentals, backed by regular problem solving in Data Structures and Algorithms on LeetCode.'
  ],
  college: 'Sri Krishna College of Technology, Coimbatore',
  degree: 'Bachelor of Technology in Information Technology',
  batch: '2023 – 2027',
  cgpa: '8.36 / 10',
  socials: {
    github: 'https://github.com/Jananisakthi1409',
    githubUser: 'Jananisakthi1409',
    linkedin: 'https://www.linkedin.com/in/janani-sathyamoorthy-6752222a3',
    linkedinUser: 'janani-sathyamoorthy-6752222a3',
    email: 'jananisakthi2005@gmail.com',
    phone: '(+91) 9042646006',
    location: 'Coimbatore, Tamil Nadu, India'
  },
  highlights: [
    {
      label: 'Academics',
      value: '8.36 CGPA',
      description: 'B.Tech IT • Sri Krishna College of Technology'
    },
    {
      label: 'Core Focus',
      value: 'Full Stack & APIs',
      description: 'Spring Boot, Java, React, RESTful Services'
    },
    {
      label: 'Active Internship',
      value: 'AI/ML Intern',
      description: 'MERN Stack & AI-driven application workflows'
    },
    {
      label: 'Algorithmic Problem Solving',
      value: 'LeetCode DSA',
      description: 'Data Structures & Algorithms in Java / C++'
    }
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'AI/ML Intern',
    company: 'AI-Driven Application Development',
    focus: 'MERN Stack & AI Application Workflows',
    location: 'Coimbatore, Tamil Nadu',
    duration: 'Feb 2026 – Jun 2026',
    period: 'Feb 2026 – Jun 2026',
    type: 'Internship',
    description: [
      'Contributing to AI-driven applications using the MERN Stack, supporting frontend and backend development workflows.',
      'Assisting in model integration, data processing, and API development to enhance application functionality and system performance.',
      'Collaborating with development teams to build scalable web solutions and improve overall engineering efficiency.',
      'Developing and integrating RESTful APIs with database layers to support robust AI-powered services.'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Data Processing', 'AI/ML Integration'],
    highlights: [
      'AI-driven workflows with MERN Stack',
      'Scalable RESTful API development & database integration',
      'Data preprocessing & model deployment pipelines'
    ]
  }
];

// Centralized project URLs: update liveUrl or githubUrl here. If empty, the corresponding button automatically hides.
export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'South Trails – South India Travel Platform',
    tagline: 'Curated Travel Discovery & Interactive Package Planning Platform',
    category: 'Full Stack',
    techStack: ['React.js', 'Supabase', 'JavaScript', 'CSS', 'REST APIs'],
    description:
      'A curated travel discovery and exploration platform designed to simplify itinerary planning and destination exploration across South India with responsive interfaces and real-time cloud data storage.',
    problemSolved:
      'Eliminated fragmented travel research by centralizing destinations, interactive tour packages, and travel guides into an intuitive, responsive web experience powered by a persistent Supabase database.',
    features: [
      'Developed a travel discovery platform showcasing curated destinations across South India.',
      'Built responsive user interfaces for package browsing, destination exploration, and travel planning.',
      'Integrated Supabase for cloud data storage and package management functionality.',
      'Designed an intuitive user experience with modern UI principles and interactive components.'
    ],
    outcomes: [
      'Seamless multi-device exploration experience for regional travelers',
      'Reliable cloud database integration for destination records & packages',
      'Clean modular component architecture in React'
    ],
    githubUrl: 'https://github.com/Jananisakthi1409',
    liveUrl: 'https://jananisakthi1409.github.io/SOUTH_TRAILS/',
    architectureHighlights: [
      'Frontend: React.js with modular component tree & state management',
      'Database: Supabase PostgreSQL & RESTful API integration',
      'Styling: Responsive CSS with fluid layout transitions'
    ],
    metrics: [
      { label: 'Architecture', value: 'React + Supabase' },
      { label: 'Interface', value: 'Responsive UI' },
      { label: 'Database', value: 'Cloud Relational' }
    ]
  },
  {
    id: 'proj-2',
    title: 'IoT-Based Predictive Waste Collection & Anomaly Detection',
    tagline: 'Real-time Smart Bin Telemetry Tracking & Environmental Anomaly Detection',
    category: 'IoT + AI',
    techStack: ['IoT Sensors', 'Machine Learning', 'Python', 'Data Analytics'],
    description:
      'An intelligent waste management and anomaly detection platform that tracks smart bin fill levels in real time and applies predictive ML models to optimize collection logistics.',
    problemSolved:
      'Mitigated municipal overflow risks and excessive fuel costs by shifting from static collection schedules to dynamic, sensor-driven predictive routes with automated anomaly alerts.',
    features: [
      'Designed a smart waste monitoring system for real-time bin status tracking and predictive collection.',
      'Implemented anomaly detection techniques to identify unusual environmental conditions.',
      'Developed data-driven insights to improve collection efficiency and reduce operational costs.',
      'Leveraged Python and Data Analytics for sensor telemetry processing and trend analysis.'
    ],
    outcomes: [
      'Optimized collection routes and municipal logistics efficiency',
      'Early detection of environmental anomalies and hazardous bin conditions',
      'Actionable analytics derived from real-time sensor telemetry'
    ],
    githubUrl: 'https://github.com/Jananisakthi1409',
    liveUrl: '', // Ready for live link when available
    architectureHighlights: [
      'Telemetry: IoT Sensor status feeds & fill-level monitoring',
      'Intelligence Layer: Machine Learning anomaly detection algorithms',
      'Data Analytics: Python pipelines for statistical trend analysis'
    ],
    metrics: [
      { label: 'Approach', value: 'Real-time Telemetry' },
      { label: 'Intelligence', value: 'ML Anomaly Detection' },
      { label: 'Outcome', value: 'Optimized Logistics' }
    ]
  },
  {
    id: 'proj-3',
    title: 'Legal Case Management System',
    tagline: 'Enterprise Legal Case Tracking with Role-Based JWT Security',
    category: 'Full Stack',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'REST APIs'],
    description:
      'An enterprise-grade legal case management platform featuring strict role-based access control (RBAC), secure REST APIs for case dossiers, document handling, and structured relational persistence.',
    problemSolved:
      'Replaced manual paper trails and fragmented records with a centralized, secure digital case ledger featuring granular authorization tiers for judges, advocates, and administrative staff.',
    features: [
      'Developed a secure legal case management platform with role-based authentication and authorization.',
      'Built REST APIs for case tracking, document management, and user administration.',
      'Implemented JWT-based security and integrated MySQL for structured data management.',
      'Engineered backend controllers, services, and repositories following clean Spring Boot architecture.'
    ],
    outcomes: [
      'Secure token-based user authorization with granular privilege tiers',
      'Reliable relational schema in MySQL for complex legal record structures',
      'Production-ready REST API endpoints with robust error handling'
    ],
    githubUrl: 'https://github.com/Jananisakthi1409',
    liveUrl: '', // Ready for live link when available
    architectureHighlights: [
      'Backend: Java & Spring Boot MVC architecture',
      'Security: JSON Web Token (JWT) & Role-Based Access Control (RBAC)',
      'Database: MySQL relational schema with index-optimized queries'
    ],
    metrics: [
      { label: 'Backend', value: 'Spring Boot (Java)' },
      { label: 'Security', value: 'JWT & RBAC' },
      { label: 'Database', value: 'MySQL Relational' }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: '01 / PROGRAMMING',
    iconName: 'Code',
    skills: [
      { name: 'Java', category: 'Programming', level: 'Core Backend & OOP', tag: 'Spring Boot & DSA', usedInProjects: ['proj-3'], description: 'Primary backend language for enterprise systems, Spring Boot APIs, and LeetCode DSA.' },
      { name: 'C++', category: 'Programming', level: 'Algorithms & Systems', tag: 'DSA & Performance', usedInProjects: [], description: 'Core language for algorithm optimization, data structures, and competitive problem solving.' },
      { name: 'JavaScript', category: 'Programming', level: 'ES6+ & Asynchronous', tag: 'Web & Full Stack', usedInProjects: ['proj-1', 'exp-1'], description: 'Modern asynchronous web scripting, DOM manipulation, React state, and full-stack services.' },
      { name: 'Python', category: 'Programming', level: 'Analytics & Scripting', tag: 'IoT & ML Analytics', usedInProjects: ['proj-2'], description: 'Used for telemetry processing, machine learning models, and predictive data analysis.' }
    ]
  },
  {
    title: '02 / FRONTEND',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', category: 'Frontend', level: 'Component Architecture', tag: 'UI & State', usedInProjects: ['proj-1', 'exp-1'], description: 'Declarative component architecture, custom hooks, state management, and modern responsive UI.' },
      { name: 'HTML5', category: 'Frontend', level: 'Semantic Standards', tag: 'Accessible Markup', usedInProjects: ['proj-1'], description: 'Accessible markup, semantic document structures, and clean web standards.' },
      { name: 'CSS3', category: 'Frontend', level: 'Responsive Styling', tag: 'Flexbox & Transitions', usedInProjects: ['proj-1'], description: 'Responsive layouts, modern Grid/Flexbox layouts, fluid typography, and aesthetic styling.' }
    ]
  },
  {
    title: '03 / BACKEND',
    iconName: 'Server',
    skills: [
      { name: 'Spring Boot', category: 'Backend', level: 'Enterprise Framework', tag: 'Java Microservices', usedInProjects: ['proj-3'], description: 'Enterprise Java framework for REST APIs, dependency injection, and JPA/Hibernate.' },
      { name: 'REST APIs', category: 'Backend', level: 'API Architecture', tag: 'Endpoint Design', usedInProjects: ['proj-1', 'proj-3', 'exp-1'], description: 'RESTful endpoint design, request routing, status code conventions, and payload formatting.' },
      { name: 'JWT Security', category: 'Backend', level: 'Authentication & RBAC', tag: 'Stateless Auth', usedInProjects: ['proj-3'], description: 'Stateless JSON Web Tokens for authentication, session verification, and granular RBAC.' },
      { name: 'Node.js / Express', category: 'Backend', level: 'MERN Stack Services', tag: 'API Workflows', usedInProjects: ['exp-1'], description: 'Server-side JavaScript runtime for API services and AI-driven model workflows.' }
    ]
  },
  {
    title: '04 / DATABASE',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', category: 'Database', level: 'Relational & SQL', tag: 'Schema & Queries', usedInProjects: ['proj-3'], description: 'Relational schema design, entity relationships, foreign keys, and query optimization.' },
      { name: 'Supabase', category: 'Database', level: 'Cloud Postgres', tag: 'Cloud DB & Auth', usedInProjects: ['proj-1'], description: 'Cloud Postgres backend, real-time data synchronization, and API integration.' }
    ]
  },
  {
    title: '05 / CLOUD & DEVOPS',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS (EC2, S3)', category: 'Cloud & DevOps', level: 'Cloud Infrastructure', tag: 'Compute & Storage', usedInProjects: [], description: 'Cloud compute instance deployment on EC2, object storage on S3, and cloud fundamentals.' },
      { name: 'Docker', category: 'Cloud & DevOps', level: 'Containerization', tag: 'Reproducible Builds', usedInProjects: [], description: 'Application containerization, reproducible development environments, and Dockerfiles.' }
    ]
  },
  {
    title: '06 / DATA & TOOLS',
    iconName: 'Cpu',
    skills: [
      { name: 'Data Visualization & EDA', category: 'Data & Tools', level: 'Analytics & Insights', tag: 'Data Science', usedInProjects: ['proj-2'], description: 'Exploratory data analysis, outlier detection, data cleaning, and statistical visualization.' },
      { name: 'Git & GitHub', category: 'Data & Tools', level: 'Version Control', tag: 'Collaboration', usedInProjects: ['proj-1', 'proj-2', 'proj-3', 'exp-1'], description: 'Branching strategies, pull requests, version tracking, and collaborative development.' },
      { name: 'Postman', category: 'Data & Tools', level: 'API Testing', tag: 'Endpoint Verification', usedInProjects: ['proj-1', 'proj-3', 'exp-1'], description: 'API endpoint validation, automated collection testing, headers, and payload verification.' },
      { name: 'Selenium', category: 'Data & Tools', level: 'Automated Testing', tag: 'QA Automation', usedInProjects: [], description: 'Browser automation, end-to-end web testing, and test suite execution.' }
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'Sri Krishna College of Technology',
    degree: 'Bachelor of Technology in Information Technology',
    field: 'Information Technology',
    duration: '2023 – 2027',
    scoreLabel: 'CGPA',
    scoreValue: '8.36 / 10',
    location: 'Coimbatore, Tamil Nadu',
    highlights: [
      'Strong academic foundation in Data Structures, Algorithms, Cloud Computing, and DBMS',
      'Active participant in technical hackathons, ideathons, paper presentations, and tech forums',
      'Consistent academic excellence across all academic semesters'
    ]
  },
  {
    id: 'edu-2',
    institution: 'RCG Girls Higher Secondary School',
    degree: 'Higher Secondary Certificate (HSC)',
    duration: 'Completed',
    scoreLabel: 'Score',
    scoreValue: '85.33%',
    location: 'Coimbatore, Tamil Nadu',
    highlights: [
      'Graduated with 85.33% distinction in core mathematics and science curricula'
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'Oracle Redwood Application Developer',
    issuer: 'Oracle',
    domain: 'Enterprise UX & Cloud Applications',
    description:
      'Certified in building modern, responsive enterprise applications using Oracle Redwood design systems and developer frameworks.',
    badgeColor: 'border-[#e8d5cf] bg-[#fffaf8] text-[#4a1521]'
  },
  {
    id: 'cert-2',
    name: 'AWS Architecture Simulation',
    issuer: 'Amazon Web Services (AWS)',
    domain: 'Cloud Architecture & Infrastructure',
    description:
      'Hands-on simulation covering scalable cloud design principles, compute orchestration (EC2), storage patterns (S3), and security fundamentals.',
    badgeColor: 'border-[#ede4db] bg-[#faf8f5] text-[#4a1521]'
  },
  {
    id: 'cert-3',
    name: 'Cisco Networking',
    issuer: 'Cisco',
    domain: 'Networking Fundamentals & Protocols',
    description:
      'In-depth training on network topologies, IP addressing, TCP/IP & OSI models, routing mechanisms, and network security foundations.',
    badgeColor: 'border-[#e2dae6] bg-[#faf8fc] text-[#4a1521]'
  },
  {
    id: 'cert-4',
    name: 'Deloitte Data Analytics',
    issuer: 'Deloitte',
    domain: 'Data Analytics & Business Intelligence',
    description:
      'Applied analytical methods for data cleansing, exploratory data analysis (EDA), statistical inference, and executive data storytelling.',
    badgeColor: 'border-[#dbe6df] bg-[#f6faf8] text-[#1c1917]'
  }
];

export const achievements: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Active Problem Solver on LeetCode',
    category: 'Algorithmic Problem Solving & DSA',
    description:
      'Consistent practice and active problem solving in Data Structures and Algorithms (Arrays, Linked Lists, Trees, Dynamic Programming, Graphs) with optimal time and space complexity in Java and C++.',
    iconName: 'Code',
    tags: ['LeetCode', 'DSA', 'Java', 'C++', 'Algorithms']
  },
  {
    id: 'ach-2',
    title: 'Hackathons & Ideathons Participation',
    category: 'Competitive Innovation & Ideation',
    description:
      'Actively participated in competitive hackathons, technical ideathons, paper presentations, and student innovation summits to prototype software solutions.',
    iconName: 'Trophy',
    tags: ['Hackathons', 'Paper Presentations', 'Ideathons', 'Innovation']
  },
  {
    id: 'ach-3',
    title: 'Industry-Recognized Certifications',
    category: 'Validated Professional Credentials',
    description:
      'Successfully earned 4 professional certifications spanning Oracle, AWS, Cisco, and Deloitte to validate technical competency in Cloud, UX, Networking, and Analytics.',
    iconName: 'Award',
    tags: ['Oracle', 'AWS', 'Cisco', 'Deloitte']
  }
];
