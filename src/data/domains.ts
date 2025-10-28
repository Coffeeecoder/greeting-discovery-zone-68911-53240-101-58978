export interface Domain {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  glowColor: string;
  position: { x: number; y: number };
  subDomains: string[];
  tools: string[];
  skills: string[];
  roles: string[];
  projects?: string[];
  salary: {
    fresher: string;
    experienced: string;
  };
  marketDemand: string;
  careerGrowth: string;
}

export const domains: Domain[] = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    tagline: "The brain behind modern innovation.",
    description: "Master the future of intelligent systems and automation",
    icon: "🤖",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
    position: { x: 15, y: 20 },
    subDomains: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Reinforcement Learning"
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    skills: ["Mathematics", "Statistics", "Programming", "Data Analysis", "Neural Networks"],
    roles: ["AI Engineer", "ML Engineer", "Data Scientist", "Research Scientist"],
    projects: ["Image Recognition System", "Chatbot Development", "Predictive Analytics"],
    salary: {
      fresher: "$60k - $90k",
      experienced: "$120k - $200k+"
    },
    marketDemand: "Very High - Growing 40% annually",
    careerGrowth: "Exceptional - Leadership roles in 5-7 years"
  },
  {
    id: "webdev",
    name: "Web Development",
    tagline: "Build the digital experiences of tomorrow.",
    description: "Create stunning web applications that users love",
    icon: "🌐",
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(139, 92, 246, 0.3)",
    position: { x: 65, y: 15 },
    subDomains: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Mobile Web",
      "Progressive Web Apps"
    ],
    tools: ["React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS"],
    skills: ["HTML/CSS", "JavaScript", "API Design", "UI/UX", "Database Management"],
    roles: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Web Designer"],
    projects: ["E-commerce Platform", "Social Media App", "Portfolio Website"],
    salary: {
      fresher: "$50k - $75k",
      experienced: "$100k - $160k"
    },
    marketDemand: "Very High - Constant demand across industries",
    careerGrowth: "Excellent - Tech lead in 4-6 years"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    tagline: "Protect the digital frontier.",
    description: "Defend systems and data from cyber threats",
    icon: "🔐",
    color: "from-red-500 to-orange-500",
    glowColor: "rgba(239, 68, 68, 0.3)",
    position: { x: 10, y: 55 },
    subDomains: [
      "Network Security",
      "Application Security",
      "Cloud Security",
      "Ethical Hacking",
      "Incident Response"
    ],
    tools: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap"],
    skills: ["Network Protocols", "Cryptography", "Penetration Testing", "Risk Analysis", "Forensics"],
    roles: ["Security Analyst", "Penetration Tester", "Security Architect", "SOC Analyst"],
    projects: ["Vulnerability Assessment", "Security Audit", "Firewall Configuration"],
    salary: {
      fresher: "$65k - $85k",
      experienced: "$110k - $180k"
    },
    marketDemand: "High - Critical need for security professionals",
    careerGrowth: "Strong - CISO roles in 8-10 years"
  },
  {
    id: "blockchain",
    name: "Blockchain",
    tagline: "Decentralize the future.",
    description: "Build the next generation of trustless systems",
    icon: "⛓️",
    color: "from-green-500 to-teal-500",
    glowColor: "rgba(34, 197, 94, 0.3)",
    position: { x: 70, y: 60 },
    subDomains: [
      "Smart Contracts",
      "DeFi",
      "NFTs",
      "Cryptocurrency",
      "Distributed Systems"
    ],
    tools: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "Truffle"],
    skills: ["Cryptography", "Smart Contract Development", "DApp Development", "Token Economics"],
    roles: ["Blockchain Developer", "Smart Contract Developer", "Crypto Analyst", "DeFi Engineer"],
    projects: ["Token Creation", "DApp Development", "NFT Marketplace"],
    salary: {
      fresher: "$70k - $100k",
      experienced: "$130k - $220k+"
    },
    marketDemand: "High - Emerging technology with growing adoption",
    careerGrowth: "Rapid - Lead positions in 3-5 years"
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    tagline: "Scale infinitely, deploy globally.",
    description: "Master cloud infrastructure and services",
    icon: "☁️",
    color: "from-indigo-500 to-blue-500",
    glowColor: "rgba(99, 102, 241, 0.3)",
    position: { x: 40, y: 70 },
    subDomains: [
      "AWS Services",
      "Azure Cloud",
      "Google Cloud",
      "DevOps",
      "Serverless Architecture"
    ],
    tools: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    skills: ["Cloud Architecture", "Infrastructure as Code", "CI/CD", "Monitoring", "Security"],
    roles: ["Cloud Architect", "DevOps Engineer", "Cloud Security Engineer", "SRE"],
    projects: ["Microservices Deployment", "Auto-scaling System", "Cloud Migration"],
    salary: {
      fresher: "$65k - $90k",
      experienced: "$120k - $190k"
    },
    marketDemand: "Very High - Enterprise-wide cloud adoption",
    careerGrowth: "Excellent - Architect roles in 5-7 years"
  },
  {
    id: "datascience",
    name: "Data Science",
    tagline: "Turn data into insights.",
    description: "Unlock the power of data-driven decisions",
    icon: "📊",
    color: "from-yellow-500 to-orange-500",
    glowColor: "rgba(234, 179, 8, 0.3)",
    position: { x: 40, y: 35 },
    subDomains: [
      "Data Analysis",
      "Data Visualization",
      "Big Data",
      "Business Intelligence",
      "Predictive Analytics"
    ],
    tools: ["Python", "R", "SQL", "Tableau", "Power BI"],
    skills: ["Statistics", "Data Mining", "Machine Learning", "Data Cleaning", "Storytelling"],
    roles: ["Data Scientist", "Data Analyst", "BI Developer", "Analytics Engineer"],
    projects: ["Customer Segmentation", "Sales Forecasting", "Dashboard Creation"],
    salary: {
      fresher: "$55k - $80k",
      experienced: "$110k - $170k"
    },
    marketDemand: "Very High - Data-driven decision making is essential",
    careerGrowth: "Strong - Senior data roles in 5-7 years"
  }
];
