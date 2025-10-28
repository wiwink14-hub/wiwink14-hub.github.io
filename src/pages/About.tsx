import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Award, Users, Globe, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with cutting-edge technology and design.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make starts with the customer experience in mind.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to reducing our environmental impact and creating products that last.",
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Obsessing over every detail to deliver products that exceed expectations.",
    },
  ];

  const milestones = [
    {
      year: "2007",
      title: "The Beginning",
      description: "Revolutionized the smartphone industry with the first touchscreen device.",
    },
    {
      year: "2015",
      title: "Pro Series",
      description: "Introduced the Pro lineup with advanced camera systems for professionals.",
    },
    {
      year: "2020",
      title: "5G Era",
      description: "Brought 5G technology to millions with seamless connectivity.",
    },
    {
      year: "2024",
      title: "Titanium Design",
      description: "Launched the first titanium smartphone with unmatched durability.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Our Story
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            For over 15 years, we've been creating technology that empowers people to do amazing things. Our mission is simple: make the best products on earth.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 gradient-card shadow-premium hover:shadow-xl transition-smooth text-center"
              >
                <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Key Milestones
          </h2>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-8 items-start"
              >
                <div className="text-4xl font-bold text-accent min-w-[100px]">
                  {milestone.year}
                </div>
                <Card className="flex-1 p-6 gradient-card shadow-premium">
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe that technology should empower everyone to do what they love. That's why we create products that are intuitive, powerful, and accessible. We're not just building phones—we're crafting experiences that enrich lives, inspire creativity, and bring people together.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">2B+</div>
              <p className="text-muted-foreground">Active Devices</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">175+</div>
              <p className="text-muted-foreground">Countries</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">50K+</div>
              <p className="text-muted-foreground">Employees</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">Renewable Energy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Premium. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
