import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { Sparkles, Users, Award, Shield } from "lucide-react";

const GetStarted = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: "For Students",
      description: "Join events, enroll in courses, and get personalized mentorship",
    },
    {
      icon: Award,
      title: "For Judges",
      description: "Evaluate students and score event tasks with precision",
    },
    {
      icon: Shield,
      title: "For Admins",
      description: "Full control over events, users, groups, and platform settings",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center space-y-8 py-16">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Let's Begin Your Journey of{" "}
                <span className="gradient-text">Mentorship & Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Join our platform to unlock personalized learning experiences, connect with mentors, 
                and participate in transformative events.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-primary text-lg px-8 py-6 group"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Get Started
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/5"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Sign In
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="max-w-3xl mx-auto mt-20 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Why Join Us?</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success"></span>
                  Personalized Learning
                </h3>
                <p className="text-muted-foreground text-sm">
                  Access courses tailored to your learning pace and goals
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Expert Mentorship
                </h3>
                <p className="text-muted-foreground text-sm">
                  Connect with industry experts and get guidance
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Live Events
                </h3>
                <p className="text-muted-foreground text-sm">
                  Participate in workshops, hackathons, and competitions
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Community Support
                </h3>
                <p className="text-muted-foreground text-sm">
                  Join a thriving community of learners and innovators
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default GetStarted;
