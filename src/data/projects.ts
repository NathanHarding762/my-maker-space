export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ('frontend' | 'backend' | 'mobile' | 'design-tools')[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Hotel Review AI",
    description: "A web app that analyzes hotel reviews with a custom TensorFlow model. Users enter a review, and the system predicts whether it’s positive, neutral, or negative.",
    image: "https://masterbundles.com/wp-content/uploads/2022/12/hotel-review_madterbundles-2-354.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "Python", "TensorFlow", "Flask + Flask-CORS", "NumPy", "Pandas"],
    category: ["frontend", "backend"], 
    liveUrl: "#",
    githubUrl: "https://github.com/NathanHarding762/my-maker-space.git",
  },
  
];

export const getProjectsByCategory = (category: Project['category'][number]): Project[] => {
  return projects.filter(project => project.category.includes(category));
};


export const getCategoryInfo = (category: string) => {
  const categoryMap = {
    'frontend': {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern frameworks and technologies.',
    },
    'backend': {
      title: 'Backend Development', 
      description: 'Creating robust server-side applications, APIs, and database solutions.',
    },
    'mobile': {
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications for iOS and Android.',
    },
    'design-tools': {
      title: 'Design & Tools',
      description: 'Using modern development tools, design systems, and DevOps practices.',
    },
  };
  
  return categoryMap[category as keyof typeof categoryMap];
};