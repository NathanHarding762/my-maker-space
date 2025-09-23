import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Server, Smartphone } from "lucide-react";

const AboutSection = () => {
  const skills = {
    frontend: ["React", "TypeScript", "Vue.js", "Tailwind CSS", "Next.js", "Vite"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
    mobile: ["React Native", "Flutter", "Ionic", "PWA Development"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"]
  };

  const categories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: skills.frontend,
      description: "Building responsive and interactive user interfaces"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: skills.backend,
      description: "Creating robust server-side applications and APIs"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: skills.mobile,
      description: "Developing cross-platform mobile applications"
    },
    {
      title: "Design & Tools",
      icon: Palette,
      skills: skills.tools,
      description: "Using modern tools and design principles"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground mb-6">
              I'm a passionate full-stack developer with 5+ years of experience creating 
              digital solutions that make a difference. I love turning complex problems 
              into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="bg-card border-border/50 hover:border-accent/50 transition-smooth shadow-card hover:shadow-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 mr-3">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;