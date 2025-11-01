import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-wedding.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Pushpa Wedding Studio
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Timeless wedding photography that tells your unique love story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Your Story, Beautifully Told
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe every wedding is unique, and your photos should reflect that. 
              With over a decade of experience, we specialize in capturing authentic emotions 
              and creating timeless memories that you'll treasure forever.
            </p>
            <Button variant="outline" asChild>
              <Link to="/packages">Explore Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: "Professional Equipment",
                description: "State-of-the-art cameras and lighting for perfect shots",
              },
              {
                icon: Heart,
                title: "Passionate Team",
                description: "Experienced photographers who love what they do",
              },
              {
                icon: Star,
                title: "Stunning Results",
                description: "Beautifully edited photos that exceed expectations",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "Fast turnaround without compromising quality",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-smooth">
                <CardContent className="pt-8 pb-6">
                  <feature.icon className="mx-auto mb-4 text-accent" size={48} />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Capture Your Big Day?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Limited dates available for 2025. Book your consultation today and let's create magic together.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
