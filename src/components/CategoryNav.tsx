import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Palette, Server, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const CategoryNav = () => {
  const location = useLocation();
  
  const categories = [
    {
      path: "/frontend",
      label: "Frontend",
      icon: Code,
    },
    {
      path: "/backend", 
      label: "Backend",
      icon: Server,
    },
    {
      path: "/mobile",
      label: "Mobile",
      icon: Smartphone,
    },
    {
      path: "/design-tools",
      label: "Design & Tools",
      icon: Palette,
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map(({ path, label, icon: Icon }) => (
        <Button
          key={path}
          variant={location.pathname === path ? "default" : "outline"}
          asChild
          className={cn(
            "transition-smooth",
            location.pathname === path 
              ? "bg-primary text-primary-foreground shadow-glow" 
              : "border-border/50 hover:bg-accent/10 hover:border-accent/50"
          )}
        >
          <Link to={path}>
            <Icon className="w-4 h-4 mr-2" />
            {label}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default CategoryNav;