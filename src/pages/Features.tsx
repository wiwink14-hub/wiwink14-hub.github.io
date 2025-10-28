import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Camera, Cpu, Battery, Smartphone, Shield, Zap, Wifi, Sun } from "lucide-react";
import cameraImage from "@/assets/product-camera.jpg";
import displayImage from "@/assets/product-display.jpg";
import chipImage from "@/assets/product-chip.jpg";

const Features = () => {
  const technicalSpecs = [
    {
      category: "Display",
      icon: Smartphone,
      specs: [
        "6.7-inch (diagonal) all-screen OLED display",
        "2796-by-1290-pixel resolution at 460 ppi",
        "ProMotion technology with adaptive refresh rates up to 120Hz",
        "HDR display with True Tone",
        "2,000,000:1 contrast ratio",
        "Peak brightness: 2000 nits outdoor, 1600 nits HDR",
      ],
    },
    {
      category: "Camera",
      icon: Camera,
      specs: [
        "48MP Main: 24mm, ƒ/1.78 aperture",
        "12MP Ultra Wide: 13mm, ƒ/2.2 aperture",
        "12MP 2x Telephoto: 48mm, ƒ/1.78 aperture",
        "12MP 3x Telephoto: 77mm, ƒ/2.8 aperture",
        "Night mode, Deep Fusion, Smart HDR 5",
        "ProRAW and ProRes video recording",
      ],
    },
    {
      category: "Chip",
      icon: Cpu,
      specs: [
        "A17 Pro chip",
        "New 6-core CPU with 2 performance and 4 efficiency cores",
        "New 6-core GPU",
        "New 16-core Neural Engine",
        "Up to 2x faster ray tracing",
        "Hardware-accelerated ray tracing",
      ],
    },
    {
      category: "Battery",
      icon: Battery,
      specs: [
        "Video playback: Up to 29 hours",
        "Video playback (streamed): Up to 25 hours",
        "Audio playback: Up to 95 hours",
        "Fast-charge capable: 50% charge in 30 minutes",
        "MagSafe wireless charging up to 15W",
        "Qi wireless charging up to 7.5W",
      ],
    },
    {
      category: "Durability",
      icon: Shield,
      specs: [
        "Ceramic Shield front",
        "Textured matte glass back",
        "Titanium design",
        "IP68 water resistance (maximum depth of 6 meters up to 30 minutes)",
        "Dust resistant",
      ],
    },
    {
      category: "Connectivity",
      icon: Wifi,
      specs: [
        "5G (sub‑6 GHz and mmWave)",
        "Gigabit LTE with 4x4 MIMO and LAA",
        "Wi‑Fi 6E (802.11ax) with 2x2 MIMO",
        "Bluetooth 5.3",
        "Ultra Wideband chip for spatial awareness",
        "Thread networking",
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
            Technical Specifications
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Every detail engineered to perfection. Discover the technology behind the innovation.
          </p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <Card className="overflow-hidden shadow-premium">
              <img
                src={cameraImage}
                alt="Camera system"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <Camera className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-2">Pro Camera System</h3>
                <p className="text-muted-foreground">
                  Four professional-grade lenses with advanced computational photography for stunning results.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-premium">
              <img
                src={displayImage}
                alt="Display"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <Sun className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-2">ProMotion Display</h3>
                <p className="text-muted-foreground">
                  Adaptive 120Hz refresh rate and peak brightness of 2000 nits for the ultimate viewing experience.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-premium">
              <img
                src={chipImage}
                alt="Chip"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <Zap className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-2">A17 Pro Chip</h3>
                <p className="text-muted-foreground">
                  The most powerful chip in a smartphone with hardware-accelerated ray tracing.
                </p>
              </div>
            </Card>
          </div>

          {/* Technical Specs */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Complete Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalSpecs.map((category, index) => (
                <Card key={index} className="p-8 gradient-card shadow-premium">
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="w-8 h-8 text-accent" />
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="text-muted-foreground flex items-start">
                        <span className="mr-2">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
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

export default Features;
