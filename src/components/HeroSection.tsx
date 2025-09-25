import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I create beautiful, functional web applications that solve real-world problems. 
            Passionate about clean code and exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-bounce"
            >
              View My Work
            </Button>
            <a href="/Fake resume.pdf" download>
              <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 hover:bg-primary/10 transition-smooth"
              >
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { Icon: Github, href: "https://github.com/NathanHarding762", label: "GitHub" },
              { Icon: Mail, href: "mailto:nathan.harding@jajags.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full border border-border hover:bg-accent/20 hover:border-accent transition-smooth"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;