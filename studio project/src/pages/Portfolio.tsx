import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const categories = ["All", "Wedding", "Pre-Wedding", "Candid"];

// Placeholder gallery - in production, these would come from your database
const portfolioItems = [
  { id: 1, category: "Wedding", title: "Sarah & John's Wedding" },
  { id: 2, category: "Pre-Wedding", title: "Emma & Michael" },
  { id: 3, category: "Candid", title: "Reception Moments" },
  { id: 4, category: "Wedding", title: "Beach Ceremony" },
  { id: 5, category: "Pre-Wedding", title: "Sunset Shoot" },
  { id: 6, category: "Wedding", title: "Garden Celebration" },
  { id: 7, category: "Candid", title: "First Dance" },
  { id: 8, category: "Pre-Wedding", title: "City Romance" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of beautifully captured moments that tell unique love stories
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="transition-smooth"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-[3/4] bg-muted rounded-lg overflow-hidden shadow-soft hover:shadow-elegant transition-smooth cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-smooth opacity-0 group-hover:opacity-100">
                    <p className="text-sm font-medium mb-1">{item.category}</p>
                    <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
