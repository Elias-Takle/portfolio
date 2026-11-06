// ALL personal content lives here. Anything in [BRACKETS] is a placeholder: replace it with real info.
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDatabase, FaDesktop } from 'react-icons/fa';
import { SiJquery, SiExpress, SiDjango, SiMysql, SiTypescript, SiNextdotjs, SiTailwindcss, SiDocker } from 'react-icons/si';

export const profile = {
  name: 'Elias Takle',
  title: 'Full-Stack Developer',
  location: 'Addis Ababa, Ethiopia',
  email: 'takleelias07@gmail.com',
  github: 'https://github.com/Elias-Takle',
  linkedin: 'https://www.linkedin.com/in/elias-takle-522b31337/',
  cv: `${import.meta.env.BASE_URL}cv/Elias_Takle_CV.pdf`,
  photo: `${import.meta.env.BASE_URL}images/elias.jpg`,
};

export const nav = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'], ['projects', 'Projects'], ['services', 'Services'], ['contact', 'Contact']];
export const SECTION_IDS = [...nav.map(([id]) => id), 'process'];

export const skills = [
  { title: 'Frontend', items: [['HTML5', FaHtml5], ['CSS3', FaCss3Alt], ['Bootstrap', FaBootstrap], ['Tailwind CSS', SiTailwindcss], ['JavaScript', FaJs], ['TypeScript', SiTypescript], ['jQuery', SiJquery], ['React', FaReact], ['Next.js', SiNextdotjs]] },
  { title: 'Backend', items: [['Node.js', FaNodeJs], ['Express', SiExpress]], also: [['Python', FaPython], ['Django', SiDjango]] },
  { title: 'Database', items: [['MySQL', SiMysql], ['SQL', FaDatabase]] },
  { title: 'Tools & Desktop', items: [['Git', FaGitAlt], ['GitHub', FaGithub], ['Docker', SiDocker], ['Tauri', FaDesktop]] },
];

const img = (f) => `${import.meta.env.BASE_URL}images/${f}`;
// To add a project, copy one object into this array. Cards render automatically.
// Use demo: null (and a note) for projects without a live link, such as desktop apps.
export const projects = [
  {
    name: 'Pharmacy WMS',
    description: 'A desktop warehouse management system for a pharmacy wholesale business, covering purchasing, inventory, sales, suppliers, customers and reports.',
    problem: 'Wholesale distributors need accurate stock, expiry and credit tracking on a single computer, without depending on an internet connection.',
    features: ['Dashboard with sales, profit, inventory value, low-stock and expiry alerts', 'Purchases, sales, suppliers and customers in one workflow', 'Backup and restore for local data'],
    tech: ['Tauri v2', 'React', 'TypeScript', 'Rust', 'SQLite'],
    image: img('pharmacy-wms.webp'),
    repo: 'https://github.com/Elias-Takle/pharmacy-wms',
    demo: null,
    note: 'Desktop app. Runs fully offline on a single computer.',
  },
  {
    name: 'Aurelle Fragrances',
    description: 'A fragrance storefront with a clean, editorial design for browsing and shopping perfumes.',
    problem: 'Shoppers need a calm, fast way to discover fragrances, compare options and keep the ones they like.',
    features: ['Best-sellers grid with product badges, brands, sizes and prices', 'Wishlist hearts and a shopping cart', 'Responsive layout with a refined serif typographic style'],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: img('aurelle.webp'),
    repo: 'https://github.com/Elias-Takle/aurelle-fragrances',
    demo: 'https://aurelle-fragrances.netlify.app/',
  },
  {
    name: 'Netflix Clone',
    description: 'A front-end recreation of the Netflix browsing experience, built to practice complex, media-rich interfaces.',
    problem: 'Streaming-style interfaces combine many moving parts; this project works through that layout and navigation end to end.',
    features: ['Featured hero banner with Play and More info actions', 'Navigation with search, notifications and profile menu', 'Categorized content rows such as Popular on Netflix'],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: img('netflix-clone.webp'),
    repo: 'https://github.com/Elias-Takle/netflix-clone',
    demo: 'https://netflex-clone-demo.netlify.app/',
  },
];

export const services = [
  ['Responsive Website Development', 'Fast, accessible sites that look right on phones, tablets and desktops.'],
  ['Frontend Development', 'Clean HTML, CSS and JavaScript interfaces built from design or from scratch.'],
  ['React Application Development', 'Component-based single-page apps with maintainable structure.'],
  ['Backend Development with Django', 'Python and Django back ends with clear models, views and APIs.'],
  ['Database Design and Management', 'MySQL schemas and queries designed around how the data is actually used.'],
  ['Full-Stack Web Application Development', 'Interface, server logic and database delivered as one working product.'],
  ['Website Maintenance and Improvements', 'Bug fixes, updates and incremental improvements to existing sites.'],
];

export const process = [
  ['Understand requirements', 'Clarify goals, users and constraints before writing code.'],
  ['Plan and architect', 'Choose the structure, data model and tools that fit the problem.'],
  ['Design the UI/UX', 'Sketch layouts and flows that are clear on every screen size.'],
  ['Build the frontend', 'Implement reusable, accessible and responsive components.'],
  ['Build the backend', 'Write server logic and APIs that are validated and easy to extend.'],
  ['Integrate the database', 'Connect storage, queries and migrations to the application.'],
  ['Test and debug', 'Check behavior across devices and edge cases, then fix what breaks.'],
  ['Deploy and maintain', 'Ship to production and keep improving it over time.'],
];

export const experience = [
  {
    title: 'Full Stack Web Development Trainee',
    org: 'Evangadi Networks',
    points: ['Completed an intensive full-stack program covering front-end, back-end and database development.', 'Built web applications with React, Node.js, Express and SQL, including authentication and REST APIs.', 'Worked in Git and GitHub workflows and delivered projects from idea to working product.'],
  },
  {
    title: 'BSc in Mechanical Engineering',
    org: 'Addis Ababa University, College of Technology and Built Environment',
    points: ['Self-taught developer who writes Python fluently, strong in data structures and object-oriented programming.', 'Solved 10+ LeetCode problems.'],
  },
];

export const certifications = [
  ['Certificate of Honor', 'GCI World, Matsuo-Iwasawa Laboratory, Graduate School of Engineering, The University of Tokyo', 'Honors for excellence in the final assessment of a data science course on fundamental theories and implementation.'],
  ['Certificate of Completion', 'GCI World, Matsuo-Iwasawa Laboratory, Graduate School of Engineering, The University of Tokyo', 'Completed the data science course and passed its final assessment.'],
  ['AI & Career Empowerment Program', 'University of Maryland, Robert H. Smith School of Business (non-credit)', 'Applied AI in business and professional development.'],
];

export const learning = ['Agentic AI (ReAct, plan-and-execute, tool calling)', 'Multi-agent orchestration (LangGraph, CrewAI)', 'RAG and vector databases (Pinecone)', 'Fine-tuning vs LoRA/QLoRA', 'MCP'];
