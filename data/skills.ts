export type SkillCategory = {
  id: string;
  title: string;
  desc: string;
  skills: string[];
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "frontend",
    title: "FRONTEND DEVELOPMENT",
    desc: "Membangun antarmuka yang interaktif, responsif, dan optimal menggunakan framework modern.",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
  },
  {
    id: "backend",
    title: "BACKEND & API",
    desc: "Merancang arsitektur server dan RESTful API yang aman serta efisien.",
    skills: ["Node.js", "Express", "REST API", "PostgreSQL", "Prisma ORM"]
  },
  {
    id: "data",
    title: "DATA & MACHINE LEARNING",
    desc: "Analisis data dan implementasi model Machine Learning seperti LSTM untuk pemrosesan data riil.",
    skills: ["Python", "Pandas", "Scikit-Learn", "TensorFlow", "LSTM"]
  },
  {
    id: "tools",
    title: "TOOLS & WORKFLOW",
    desc: "Menggunakan peralatan standar industri untuk kolaborasi dan versi kontrol yang rapi.",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"]
  }
];
