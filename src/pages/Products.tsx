import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-phone.jpg";

const Products = () => {
  const products = [
    {
      name: "Premium Pro Max",
      price: "$1,199",
      colors: ["Titanium Black", "Titanium White", "Titanium Blue", "Titanium Natural"],
      storage: ["256GB", "512GB", "1TB"],
      features: [
        "6.7-inch Super Retina XDR display",
        "A17 Pro chip with 6-core GPU",
        "Pro camera system (48MP, 12MP, 12MP)",
        "Up to 29 hours video playback",
        "Titanium design with textured matte glass",
        "5G capable",
      ],
    },
    {
      name: "Premium Pro",
      price: "$999",
      colors: ["Titanium Black", "Titanium White", "Titanium Blue"],
      storage: ["128GB", "256GB", "512GB"],
      features: [
        "6.1-inch Super Retina XDR display",
        "A17 Pro chip with 5-core GPU",
        "Advanced camera system (48MP, 12MP)",
        "Up to 23 hours video playback",
        "Aluminum design with glass back",
        "5G capable",
      ],
    },
    {
      name: "Premium Plus",
      price: "$899",
      colors: ["Midnight", "Starlight", "Purple", "Red"],
      storage: ["128GB", "256GB", "512GB"],
      features: [
        "6.7-inch Super Retina XDR display",
        "A16 Bionic chip",
        "Dual camera system (48MP, 12MP)",
        "Up to 26 hours video playback",
        "Ceramic Shield front cover",
        "5G capable",
      ],
    },
    {
      name: "Premium",
      price: "$799",
      colors: ["Black", "White", "Blue", "Pink", "Green"],
      storage: ["128GB", "256GB"],
      features: [
        "6.1-inch Super Retina XDR display",
        "A16 Bionic chip",
        "Dual camera system (48MP, 12MP)",
        "Up to 20 hours video playback",
        "Aluminum design with glass back",
        "5G capable",
      ],
    },
    {
      name: "Premium SE",
      price: "$599",
      colors: ["Midnight", "Starlight", "Red"],
      storage: ["64GB", "128GB", "256GB"],
      features: [
        "6.1-inch Retina HD display",
        "A15 Bionic chip",
        "Single camera system (12MP)",
        "Up to 15 hours video playback",
        "Aerospace-grade aluminum",
        "5G capable",
      ],
    },
    {
      name: "Premium Mini",
      price: "$699",
      colors: ["Blue", "Purple", "Midnight", "Starlight", "Red"],
      storage: ["128GB", "256GB"],
      features: [
        "5.4-inch Super Retina XDR display",
        "A15 Bionic chip",
        "Dual camera system (12MP, 12MP)",
        "Up to 17 hours video playback",
        "Compact design with glass back",
        "5G capable",
      ],
    },
    {
      name: "Premium Ultra",
      price: "$1,499",
      colors: ["Titanium Black", "Titanium White", "Titanium Gold"],
      storage: ["512GB", "1TB", "2TB"],
      features: [
        "6.9-inch Super Retina XDR display",
        "A17 Pro chip with 8-core GPU",
        "Quad camera system (48MP, 12MP, 12MP, 12MP)",
        "Up to 32 hours video playback",
        "Premium titanium with sapphire crystal",
        "5G capable with satellite connectivity",
      ],
    },
    {
      name: "Premium Air",
      price: "$849",
      colors: ["Silver", "Space Gray", "Gold", "Rose Gold"],
      storage: ["128GB", "256GB", "512GB"],
      features: [
        "6.3-inch OLED display",
        "A16 Bionic chip",
        "Triple camera system (48MP, 12MP, 12MP)",
        "Up to 22 hours video playback",
        "Ultra-thin aluminum design",
        "5G capable",
      ],
    },
    {
      name: "Premium Fold",
      price: "$1,799",
      colors: ["Phantom Black", "Phantom Silver", "Phantom Gold"],
      storage: ["512GB", "1TB"],
      features: [
        "7.6-inch foldable AMOLED display",
        "A17 Pro chip with 6-core GPU",
        "Flex camera system (50MP, 12MP, 10MP)",
        "Up to 25 hours video playback",
        "Foldable titanium hinge design",
        "5G capable with enhanced durability",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Choose Your Premium
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Find the perfect model for you. All with industry-leading performance and design.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="p-8 gradient-card shadow-premium hover:shadow-xl transition-smooth flex flex-col"
              >
                <div className="aspect-square mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={heroImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-3xl font-bold text-accent mb-6">{product.price}</p>

                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Available Colors:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1 bg-secondary rounded-full text-xs"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Storage Options:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.storage.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 bg-secondary rounded-full text-xs"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <p className="text-sm font-medium mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={`/checkout?product=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}`}>
                  <Button variant="premium" size="lg" className="w-full">
                    Buy Now
                  </Button>
                </Link>
              </Card>
            ))}
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

export default Products;
