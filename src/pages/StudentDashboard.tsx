import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, MessageSquare, Users, LogOut, Bell, Award, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMentorshipOpen, setIsMentorshipOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [mentorshipMessage, setMentorshipMessage] = useState("");
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New assignment in AWS Cloud", time: "2 hours ago", read: false },
    { id: 2, title: "Upcoming event: Tech Workshop", time: "1 day ago", read: false },
  ]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/get-started");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const userData = JSON.parse(localStorage.getItem("user") || "{}");

  const handleChatSubmit = () => {
    if (!chatMessage.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Message sent!",
      description: "Sir will respond to your message soon.",
    });
    setChatMessage("");
    setIsChatOpen(false);
  };

  const handleMentorshipRequest = () => {
    if (!mentorshipMessage.trim()) {
      toast({
        title: "Message required",
        description: "Please describe what you need help with",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Mentorship request sent!",
      description: "Sir will review your request and get back to you.",
    });
    setMentorshipMessage("");
    setIsMentorshipOpen(false);
  };

  const quickActions = [
    { icon: Calendar, label: "Join Events", color: "bg-primary", path: "/events" },
    { icon: BookOpen, label: "My Courses", color: "bg-secondary", path: "/dashboard/student/courses" },
    { icon: MessageSquare, label: "Chat with Sir", color: "bg-accent", action: () => setIsChatOpen(true) },
    { icon: Users, label: "Request Mentorship", color: "bg-success", action: () => setIsMentorshipOpen(true) },
  ];

  const weeklyStats = [
    { label: "Study Hours", value: 12.5, max: 15, color: "bg-primary" },
    { label: "Lessons Completed", value: 8, max: 10, color: "bg-secondary" },
    { label: "Events Attended", value: 2, max: 3, color: "bg-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Welcome Header */}
            <div className="glass-card rounded-2xl p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      Welcome back, <span className="gradient-text">{userData.name || "Student"}</span>! 👋
                    </h1>
                    <p className="text-muted-foreground">
                      Ready to continue your learning journey?
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 hover-lift cursor-pointer group"
                  onClick={() => action.path ? navigate(action.path) : action.action?.()}
                >
                  <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{action.label}</h3>
                </div>
              ))}
            </div>

            {/* Weekly Stats */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">This Week's Progress</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {weeklyStats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{stat.label}</span>
                      <span className="text-sm text-muted-foreground">{stat.value}/{stat.max}</span>
                    </div>
                    <Progress value={(stat.value / stat.max) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* My Courses */}
              <div className="lg:col-span-2 glass-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">My Courses</h2>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => navigate('/dashboard/student/courses')}
                  >
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  <div 
                    className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => navigate('/dashboard/student/course/startup-incubation')}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Startup Incubation Program</h3>
                      <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary-foreground">In Progress</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Progress: 65%</p>
                      <Button size="sm" variant="outline">Continue</Button>
                    </div>
                  </div>
                  <div 
                    className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => navigate('/dashboard/student/course/aws-cloud')}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">AWS Cloud Architecture Mastery</h3>
                      <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary-foreground">In Progress</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Progress: 30%</p>
                      <Button size="sm" variant="outline">Continue</Button>
                    </div>
                  </div>
                  <div 
                    className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => navigate('/dashboard/student/course/leadership')}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Leadership & Team Management</h3>
                      <span className="text-xs px-2 py-1 rounded bg-success/20 text-success-foreground">Completed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Certificate Available</p>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-lg">
                    <p className="font-semibold text-sm">Tech Workshop</p>
                    <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg">
                    <p className="font-semibold text-sm">Coding Hackathon</p>
                    <p className="text-xs text-muted-foreground">Next Week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* My Events */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">My Events</h2>
              <div className="space-y-6">
                {/* Event 1 - Active */}
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">Tech Workshop - Web Development</h3>
                    <span className="text-xs px-2 py-1 rounded bg-success/20 text-success-foreground">Active</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Tomorrow, 10:00 AM • Virtual</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold mb-2">Tasks:</p>
                    <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <span className="text-sm">View full event dashboard</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => navigate('/dashboard/student/event/tech-workshop-1')}
                      >
                        Open
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Event 2 - Upcoming */}
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">Coding Hackathon 2024</h3>
                    <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary-foreground">Upcoming</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">March 25, 2025 • Campus Hall</p>
                  <div className="p-3 bg-accent/10 border border-accent/30 rounded-lg mb-3">
                    <p className="text-sm font-semibold flex items-center gap-2 text-accent-foreground">
                      <Bell className="w-4 h-4" />
                      Event will be active on March 25, 2025, 9:00 AM
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <span className="text-sm">View event details</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => navigate('/dashboard/student/event-details/hackathon-2024')}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Chat Dialog */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Chat with Sir</DialogTitle>
            <DialogDescription>
              Send a message to your instructor
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Type your message here..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              rows={5}
            />
            <Button onClick={handleChatSubmit} className="w-full bg-gradient-primary hover:shadow-primary">
              Send Message
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mentorship Dialog */}
      <Dialog open={isMentorshipOpen} onOpenChange={setIsMentorshipOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request Mentorship</DialogTitle>
            <DialogDescription>
              Describe what you need help with
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="What do you need mentorship with?"
              value={mentorshipMessage}
              onChange={(e) => setMentorshipMessage(e.target.value)}
              rows={5}
            />
            <Button onClick={handleMentorshipRequest} className="w-full bg-gradient-primary hover:shadow-primary">
              Submit Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentDashboard;
