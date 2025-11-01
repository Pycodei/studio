import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Silver",
    price: "₹50,000",
    description: "Perfect for intimate celebrations",
    features: [
      "6 hours coverage",
      "1 photographer",
      "300+ edited photos",
      "Online gallery",
      "USB with all images",
    ],
  },
  {
    name: "Gold",
    price: "₹85,000",
    description: "Our most popular package",
    features: [
      "8 hours coverage",
      "2 photographers",
      "500+ edited photos",
      "Premium online gallery",
      "USB + photobook (40 pages)",
      "Pre-wedding shoot",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹1,50,000",
    description: "Complete wedding documentation",
    features: [
      "Full day coverage",
      "3 photographers + videographer",
      "800+ edited photos",
      "Cinematic wedding film",
      "Premium photobook (60 pages)",
      "Pre-wedding + engagement shoot",
      "Same-day edit highlights",
    ],
  },
];

const Packages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Packages
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your special day. All packages include professional editing and timeless memories.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={`relative ${
                    pkg.popular
                      ? "border-accent shadow-elegant scale-105"
                      : "shadow-soft"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-2xl font-serif mb-2">
                      {pkg.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {pkg.description}
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="text-accent mr-3 mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={pkg.popular ? "default" : "outline"}
                      className="w-full"
                      asChild
                    >
                      <Link to="/contact">Book This Package</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Custom Package CTA */}
            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    Need Something Custom?
                  </CardTitle>
                  <CardDescription>
                    We understand every wedding is unique. Let's create a custom package tailored to your vision.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Button variant="outline" asChild>
                    <Link to="/contact">Request Custom Quote</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Packages;
