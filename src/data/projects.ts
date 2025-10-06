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
    liveUrl: "https://hotel-review-ai-frontend.onrender.com/",
    githubUrl: "https://github.com/NathanHarding762/my-maker-space.git",
  },
  {
    title: "Project 2 will go here",
    description: "there actually isn't any project here its a secret.",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2016-01/11/1/enhanced/webdr10/original-23605-1452494484-3.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
    technologies: ["cool stuff", "Really cool stuff", "Super duper cool stuff"],
    category: ["frontend", "design-tools"],
    liveUrl: "#",
    githubUrl : "#"
  },
  {
    title: "Project 3 will go here",
    description: "there actually isn't any project here its a funny prank that I added.",
    image: "https://c02.purpledshub.com/uploads/sites/41/2020/05/GettyImages-991241038-79a8196.jpg?w=1029&webp=1",
    technologies: ["computers", "electricity", "AI"],
    category: ["mobile", "design-tools"],
    liveUrl: "#",
    githubUrl : "#"
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