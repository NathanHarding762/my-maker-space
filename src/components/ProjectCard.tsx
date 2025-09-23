import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="group bg-gradient-card border-border/50 hover:border-accent/50 transition-smooth shadow-card hover:shadow-hover overflow-hidden flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
      
      <CardContent className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary"
              className="bg-secondary/50 text-secondary-foreground border border-border/30"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 border-primary/30 hover:bg-primary/10"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 border-border/50 hover:bg-accent/10"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;