export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'mobile' | 'design-tools';
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    technologies: ["JavaScript", "Chart.js", "CSS3", "HTML5"],
    category: "frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive analytics dashboard for social media management with data visualization and automated reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    technologies: ["Vue.js", "Nuxt.js", "Vuetify", "PWA"],
    category: "frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "REST API Server",
    description: "A scalable REST API built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
    category: "backend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Microservices Architecture",
    description: "A distributed system using Docker containers with service discovery, load balancing, and monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop",
    technologies: ["Docker", "Kubernetes", "MongoDB", "GraphQL"],
    category: "backend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Chat System",
    description: "A real-time messaging platform with WebSocket connections, message encryption, and file sharing capabilities.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
    technologies: ["Socket.io", "Express", "JWT", "Prisma"],
    category: "backend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Recipe Finder App",
    description: "A mobile-first recipe application with ingredient-based search, nutritional information, and meal planning features.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
    technologies: ["React Native", "Redux", "Expo", "SQLite"],
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and progress with offline capability and cloud sync.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    technologies: ["Flutter", "Dart", "Firebase", "Hive"],
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management Mobile",
    description: "A collaborative project management mobile app with real-time updates, push notifications, and offline support.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    technologies: ["Ionic", "Angular", "Capacitor", "Supabase"],
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Design System Library",
    description: "A comprehensive design system with reusable components, design tokens, and interactive documentation.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    technologies: ["Storybook", "Figma", "Sass", "TypeScript"],
    category: "design-tools",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "CI/CD Pipeline",
    description: "Automated deployment pipeline with testing, security scanning, and multi-environment deployment capabilities.",
    image: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=500&h=300&fit=crop",
    technologies: ["GitHub Actions", "Docker", "AWS", "Terraform"],
    category: "design-tools",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Performance Monitoring Tool",
    description: "A custom analytics dashboard for monitoring web application performance, user behavior, and system metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    technologies: ["Grafana", "Prometheus", "Jest", "Lighthouse"],
    category: "design-tools",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
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