import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowRight, Camera, Cpu, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-phone.jpg";
import cameraImage from "@/assets/product-camera.jpg";
import displayImage from "@/assets/product-display.jpg";
import chipImage from "@/assets/product-chip.jpg";

const Index = () => {
  const features = [
    {
      icon: Camera,
      title: "Pro Camera System",
      description: "48MP main camera with advanced computational photography",
    },
    {
      icon: Cpu,
      title: "A17 Pro Chip",
      description: "Fastest smartphone chip ever with 6-core CPU and GPU",
    },
    {
      icon: Smartphone,
      title: "Super Retina Display",
      description: "6.7-inch OLED display with ProMotion 120Hz technology",
    },
    {
      icon: Zap,
      title: "All-Day Battery",
      description: "Up to 29 hours video playback with fast charging",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 gradient-hero overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
              The New Premium
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Forged in titanium. Designed to be amazing. Experience innovation at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button variant="hero" size="xl">
                  Learn More
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <img
              src={heroImage}
              alt="Premium smartphone"
              className="w-full h-auto rounded-3xl shadow-premium transition-smooth hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful. Beautiful. Durable.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every detail designed to perfection. Technology that adapts to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 gradient-card shadow-premium hover:shadow-xl transition-smooth hover:-translate-y-1"
              >
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pro Camera System
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our most advanced camera system ever. Capture stunning photos and videos in any light with computational photography.
              </p>
              <Link to="/features">
                <Button variant="premium" size="lg">
                  Explore Camera Features
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
            <div>
              <img
                src={cameraImage}
                alt="Camera system"
                className="w-full h-auto rounded-3xl shadow-premium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={displayImage}
                alt="Display technology"
                className="w-full h-auto rounded-3xl shadow-premium"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Brilliant Display
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Super Retina XDR display with ProMotion. Experience incredibly smooth scrolling and responsiveness.
              </p>
              <Link to="/products">
                <Button variant="premium" size="lg">
                  View All Products
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <img
            src={chipImage}
            alt="A17 Pro chip"
            className="w-full max-w-2xl mx-auto rounded-3xl shadow-premium mb-12"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A17 Pro. The fastest chip ever in a smartphone.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Desktop-class performance. Console-quality gaming. Industry-leading power efficiency.
          </p>
          <Link to="/features">
            <Button variant="premium" size="xl">
              Discover Performance
            </Button>
          </Link>
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

export default Index;
