import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6 text-center lg:text-left lg:col-span-2">
            <h1 className="animate-fade-in-up text-balance">
              Welcome to <span className="gradient-text">Ravi Rautela's</span>{" "}
              Innovation Hub
            </h1>

            <p className="text-xl text-muted-foreground animate-fade-in-up text-balance">
              Driving innovation at the intersection of technology, agriculture, and education with 25+ years 
              of transformative leadership. Join gamified events, receive mentorship, and earn professional certifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
              <Button size="lg" className="bg-gradient-primary hover:shadow-primary group" asChild>
                <Link to="/innovators-route">
                  Explore Learning Tree
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/connect">
                  Connect Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/portfolio">
                  <Play className="mr-2 w-5 h-5" />
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Image with Quote */}
          <div className="animate-slide-in-right lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src={heroImage} 
                alt="Innovation Hub - Technology and Education" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              
              {/* Quote Overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <blockquote className="text-2xl md:text-3xl font-semibold italic">
                  "Innovation distinguishes between a leader and a follower."
                </blockquote>
                <p className="mt-4 text-lg text-white/90">— Ravi Rautela</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;