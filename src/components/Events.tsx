import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthModal from "./AuthModal";
import { useToast } from "@/hooks/use-toast";

const events = [
  {
    title: "Innovation Hackathon 25",
    description: "Build innovative solutions to real-world problems in 48 hours with your team.",
    date: "March 15-17, 25",
    location: "Online",
    participants: 250,
    duration: "48 hours",
    status: "upcoming" as const,
  },
  {
    title: "Design Sprint Challenge",
    description: "Create stunning UI/UX designs for mobile apps and compete with designers worldwide.",
    date: "March 20-22, 25",
    location: "Hybrid",
    participants: 180,
    duration: "3 days",
    status: "upcoming" as const,
  },
  {
    title: "Code & Create Workshop",
    description: "Learn full-stack development while building real projects with expert mentorship.",
    date: "In Progress",
    location: "Online",
    participants: 320,
    duration: "5 days",
    status: "ongoing" as const,
  },
  {
    title: "Startup Pitch Competition",
    description: "Present your startup ideas to industry experts and win exciting prizes.",
    date: "February 28, 25",
    location: "Mumbai",
    participants: 150,
    duration: "1 day",
    status: "completed" as const,
  },
  {
    title: "AI & ML Bootcamp",
    description: "Dive deep into artificial intelligence and machine learning with hands-on projects.",
    date: "April 5-10, 25",
    location: "Online",
    participants: 400,
    duration: "6 days",
    status: "upcoming" as const,
  },
  {
    title: "Creative Content Marathon",
    description: "Create engaging content across multiple platforms and master digital storytelling.",
    date: "April 15-17, 25",
    location: "Online",
    participants: 200,
    duration: "3 days",
    status: "upcoming" as const,
  },
];

const Events = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleEventAction = (eventTitle: string) => {
    const user = localStorage.getItem("user");
    
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }

    toast({
      title: "Success!",
      description: `You've registered for ${eventTitle}`,
    });
  };

  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="gradient-text">Featured Events</h2>
          <p className="text-lg text-muted-foreground">
            Join exciting events designed to challenge your creativity and build your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <EventCard 
              key={index} 
              {...event} 
              onActionClick={() => handleEventAction(event.title)}
            />
          ))}
        </div>

        <div className="text-center flex justify-center">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link to="/events">
              View All Events
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => {
          setIsAuthModalOpen(false);
          const user = localStorage.getItem("user");
          setIsLoggedIn(!!user);
        }} 
      />
    </section>
  );
};

export default Events;
