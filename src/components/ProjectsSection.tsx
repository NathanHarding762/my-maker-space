import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  // Sample projects - you can replace these with your actual projects
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media management with data visualization and automated reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Recipe Finder App",
      description: "A mobile-first recipe application with ingredient-based search, nutritional information, and meal planning features.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      technologies: ["React Native", "Redux", "Spoonacular API", "SQLite"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracking with portfolio management, price alerts, and market analysis tools.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "CoinGecko API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;