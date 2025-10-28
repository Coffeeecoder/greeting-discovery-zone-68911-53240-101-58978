import { Award, Users, Zap, MessageSquare, Trophy, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Form groups, chat in real-time, and work together on creative challenges with built-in communication tools.",
  },
  {
    icon: Zap,
    title: "Gamified Tasks",
    description: "Complete timed tasks, earn points, and climb the leaderboard with our engaging gamification system.",
  },
  {
    icon: Award,
    title: "Digital Certificates",
    description: "Receive professional certificates upon completion with LinkedIn integration for easy sharing.",
  },
  {
    icon: Trophy,
    title: "Live Leaderboards",
    description: "Track your team's performance in real-time and compete with others across all tasks.",
  },
  {
    icon: MessageSquare,
    title: "Expert Mentorship",
    description: "Get guidance from Sir and request 1-on-1 mentorship sessions after completing events.",
  },
  {
    icon: TrendingUp,
    title: "Skill Development",
    description: "Learn through practice with hands-on projects, feedback loops, and continuous improvement.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="gradient-text">Why Choose Our Platform?</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to create, participate, and excel in collaborative events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-xl hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
