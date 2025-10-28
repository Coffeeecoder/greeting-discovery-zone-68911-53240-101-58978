import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, Clock, Star, ArrowRight, Zap } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Startup Sprint Challenge",
    description: "A 48-hour intensive startup incubation program where teams compete to build and pitch innovative solutions. Win mentorship, funding opportunities, and professional certifications.",
    date: "March 15-17, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Innovation Hub, Dehradun",
    type: "Competition",
    category: "Entrepreneurship",
    attendees: 150,
    prizes: "₹5 Lakhs + Mentorship",
    level: "Intermediate",
    highlights: [
      "48-hour intensive hackathon format",
      "Live mentorship from industry leaders",
      "Pitch to potential investors",
      "Certificate of participation and achievement"
    ],
    gamification: {
      points: 500,
      badges: ["Startup Champion", "Pitch Master", "Innovation Leader"]
    }
  },
  {
    id: 2,
    title: "AgriTech Innovation Summit",
    description: "Discover cutting-edge agricultural technologies, IoT solutions for farming, and sustainable practices. Network with farmers, tech innovators, and industry experts.",
    date: "April 5, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "MangosOrange Campus, Uttarakhand",
    type: "Summit",
    category: "AgriTech",
    attendees: 300,
    level: "All Levels",
    highlights: [
      "Live demonstrations of IoT farming solutions",
      "Expert panels on sustainable agriculture",
      "Networking with 300+ professionals",
      "Hands-on workshops with latest agritech tools"
    ],
    gamification: {
      points: 300,
      badges: ["AgriTech Pioneer", "Sustainability Champion"]
    }
  },
  {
    id: 3,
    title: "EdTech Transformation Workshop",
    description: "Learn how to integrate technology into education effectively. Explore AI-powered learning, gamification, and modern teaching methodologies.",
    date: "April 20, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Online (Zoom + Interactive Platform)",
    type: "Workshop",
    category: "EdTech",
    attendees: 200,
    level: "Beginner to Advanced",
    highlights: [
      "AI in education: Tools and techniques",
      "Gamification strategies for engagement",
      "Building interactive digital curricula",
      "Certificate upon completion"
    ],
    gamification: {
      points: 250,
      badges: ["EdTech Innovator", "Learning Leader"]
    }
  },
  {
    id: 4,
    title: "Cloud Architecture Masterclass",
    description: "Deep dive into AWS cloud services, infrastructure design, and best practices. Gain hands-on experience with real-world cloud deployments.",
    date: "May 10, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Tech Hub, Bangalore",
    type: "Masterclass",
    category: "Technology",
    attendees: 100,
    level: "Advanced",
    highlights: [
      "Advanced AWS services and architecture",
      "Live cloud deployment sessions",
      "Security best practices",
      "AWS certification preparation"
    ],
    gamification: {
      points: 400,
      badges: ["Cloud Architect", "DevOps Master"]
    }
  },
  {
    id: 5,
    title: "Youth Mentorship Meetup",
    description: "Monthly gathering for young entrepreneurs and students. Get personalized career guidance, startup advice, and build your professional network.",
    date: "Every Last Saturday",
    time: "4:00 PM - 7:00 PM",
    location: "Multiple Cities (Check Schedule)",
    type: "Meetup",
    category: "Mentorship",
    attendees: 50,
    level: "All Levels",
    highlights: [
      "One-on-one mentorship sessions",
      "Peer networking opportunities",
      "Career guidance and planning",
      "Success stories from entrepreneurs"
    ],
    gamification: {
      points: 150,
      badges: ["Community Builder", "Growth Seeker"]
    }
  },
  {
    id: 6,
    title: "Digital Marketing Bootcamp",
    description: "Master modern digital marketing strategies, SEO, social media marketing, and analytics. Build campaigns that drive real business results.",
    date: "June 1-3, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Online + Delhi NCR",
    type: "Bootcamp",
    category: "Marketing",
    attendees: 120,
    level: "Beginner to Intermediate",
    highlights: [
      "SEO and content marketing strategies",
      "Social media campaign building",
      "Google Analytics and data-driven marketing",
      "Industry-recognized certification"
    ],
    gamification: {
      points: 350,
      badges: ["Marketing Maven", "Growth Hacker"]
    }
  }
];

const pastEvents = [
  {
    title: "Innovation Lab 2024",
    date: "December 10, 2024",
    attendees: 250,
    outcome: "12 startup projects launched"
  },
  {
    title: "Agritech Expo 2024",
    date: "November 15, 2024",
    attendees: 400,
    outcome: "50+ farming solutions showcased"
  },
  {
    title: "Teacher Training Program",
    date: "October 20, 2024",
    attendees: 180,
    outcome: "180 educators certified"
  }
];

const EventsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card animate-fade-in">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Gamified Events • Earn Rewards • Get Certified</span>
            </div>
            <h1 className="animate-fade-in-up">
              <span className="gradient-text">Events & Competitions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Join transformative events that combine learning, competition, and networking. 
              Earn points, unlock badges, and receive professional certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-xl text-center hover-lift">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Events Hosted</div>
            </div>
            <div className="glass-card p-6 rounded-xl text-center hover-lift">
              <Users className="w-8 h-8 mx-auto mb-2 text-secondary" />
              <div className="text-3xl font-bold text-secondary">5000+</div>
              <div className="text-sm text-muted-foreground">Total Attendees</div>
            </div>
            <div className="glass-card p-6 rounded-xl text-center hover-lift">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-accent" />
              <div className="text-3xl font-bold text-accent">₹50L+</div>
              <div className="text-sm text-muted-foreground">Prizes Awarded</div>
            </div>
            <div className="glass-card p-6 rounded-xl text-center hover-lift">
              <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-3xl font-bold text-primary">3000+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="gradient-text mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground">
              Register now for our upcoming events and start your journey to professional excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover-lift overflow-hidden">
                <CardHeader className="bg-gradient-subtle">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{event.type}</Badge>
                    <Badge variant="outline">{event.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.attendees} Expected Attendees</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-card p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Gamification Rewards</span>
                      <Trophy className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.gamification.points} Points</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {event.gamification.badges.map((badge, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button className="flex-1 bg-gradient-primary hover:shadow-primary group">
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline">Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="gradient-text mb-4">Past Events Highlights</h2>
            <p className="text-lg text-muted-foreground">
              A glimpse of our successful events and their impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <p className="text-sm font-medium text-primary">{event.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Events?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start earning points, unlocking badges, and building your professional portfolio today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;
