import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nathan.harding@jajags.com",
      href: "mailto:nathan.harding@jajags.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "720-237-0794",
      href: "tel:7202370794"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Westminster, CO",
      href: "https://www.google.com/maps/place/Jefferson+Academy+Secondary+School/@39.9005706,-105.0753243,16.5z/data=!4m6!3m5!1s0x876b897a19de9c83:0xce0ef88a60ea7e84!8m2!3d39.900802!4d-105.075749!16s%2Fg%2F12cpgdx0n?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="bg-card border-border/50 hover:border-accent/50 transition-smooth shadow-card">
                  <CardContent className="p-6">
                    <a href={info.href} className="flex items-center space-x-4 group">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-smooth">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;