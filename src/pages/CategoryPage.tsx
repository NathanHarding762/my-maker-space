import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryNav from "@/components/CategoryNav";
import ProjectCard from "@/components/ProjectCard";
import { Project, getCategoryInfo } from "@/data/projects";

interface CategoryPageProps {
  category: string;
  projects: Project[];
}

const CategoryPage = ({ category, projects }: CategoryPageProps) => {
  const categoryInfo = getCategoryInfo(category);
  
  if (!categoryInfo) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild className="hover:bg-accent/10">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
            <h1 className="text-xl font-semibold bg-gradient-hero bg-clip-text text-transparent">
              {categoryInfo.title}
            </h1>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Category Navigation */}
        <CategoryNav />

        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            {categoryInfo.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {categoryInfo.description}
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found in this category yet. Check back soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;