import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import sirPortrait from "@/assets/sir-portrait.jpg";
import { Trophy, Users, Award, MessageSquare, Zap, Target, Sparkles, Rocket, Brain, Code, Database, Cpu } from "lucide-react";

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

// Floating Tech Icons Component
const FloatingTechIcons = () => {
  const icons = [Brain, Code, Database, Cpu, Sparkles, Zap];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: 0.1,
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Icon className="w-8 h-8 text-purple-500" />
        </motion.div>
      ))}
    </div>
  );
};

// AI Gradient Orb Component
const AIGradientOrb = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute w-96 h-96 rounded-full blur-3xl"
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
    style={{
      background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
    }}
  />
);

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const platformFeatures = [
    {
      icon: Zap,
      title: "Gamified Tasks",
      description: "Complete exciting challenges, earn points, and level up your skills with our engaging task system that makes learning addictive.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Trophy,
      title: "Live Leaderboards",
      description: "Compete in real-time, track your progress, and climb the ranks. See where you stand among the best and push yourself further.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Digital Certificates",
      description: "Earn professional certificates that showcase your achievements. Share them on LinkedIn and stand out to recruiters.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Master the art of working in teams. Collaborate on projects, share ideas, and build networks that last a lifetime.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MessageSquare,
      title: "Expert Mentorship",
      description: "Get direct access to industry experts and mentors who care about your growth. Real guidance from real professionals.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Target,
      title: "Hackathons & Khazaana",
      description: "Participate in exclusive hackathons, competitions, and our signature Khazaana events. Win prizes, gain recognition, and showcase your talent.",
      gradient: "from-red-500 to-rose-500",
    },
  ];

  const whyChooseUs = [
    {
      stat: "100+",
      label: "Startups Mentored",
      icon: Rocket,
    },
    {
      stat: "5000+",
      label: "Students Transformed",
      icon: Users,
    },
    {
      stat: "25+",
      label: "Years Experience",
      icon: Brain,
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Floating Tech Icons Background */}
      <FloatingTechIcons />

      {/* 1️⃣ Hero Section - AI Powered */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* AI Gradient Orbs */}
        <div className="absolute inset-0">
          <AIGradientOrb delay={0} />
          <div className="absolute top-1/4 right-1/4">
            <AIGradientOrb delay={2} />
          </div>
          <div className="absolute bottom-1/4 left-1/3">
            <AIGradientOrb delay={4} />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Learning Platform</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold gradient-text leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transform Your Future
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                With Expert Mentorship
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Join an exclusive platform where you'll master cutting-edge tech through{" "}
              <span className="font-bold text-foreground">gamified challenges</span>,{" "}
              <span className="font-bold text-foreground">live competitions</span>, and{" "}
              <span className="font-bold text-foreground">direct mentorship</span> from industry leaders.
              This isn't just learning—it's your gateway to becoming a tech innovator.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-10 py-7 border-2 transition-all duration-300"
              >
                <Trophy className="w-5 h-5 mr-2" />
                View Leaderboard
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2️⃣ Why Choose This Platform */}
      <section className="py-24 relative bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Why This Is a Gem for Students
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to go from learner to leader, all in one revolutionary platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="glass-card p-8 text-center h-full hover-lift group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-shadow">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-5xl font-extrabold gradient-text mb-2">
                      <AnimatedCounter end={parseInt(item.stat)} suffix={item.stat.replace(/[0-9]/g, '')} />
                    </div>
                    <p className="text-muted-foreground font-medium">{item.label}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className="glass-card p-12 text-center">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20">
                    <img 
                      src={sirPortrait} 
                      alt="Ravi Rautela - Your Personal Mentor" 
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-left space-y-4"
                >
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Direct Mentorship from
                    <span className="block gradient-text">Ravi Rautela</span>
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Get personalized guidance from someone who's mentored <strong>100+ startups</strong>, 
                    trained <strong>5000+ students</strong>, and has <strong>25+ years</strong> of 
                    real-world experience in tech, innovation, and entrepreneurship.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    This isn't generic advice—it's tailored mentorship that transforms careers.
                  </p>
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow mt-4">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Request Mentorship
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Platform Features - The Main Attraction */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Premium Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six powerful features designed to supercharge your learning and career growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {platformFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group"
                >
                  <Card className="glass-card p-8 h-full hover-lift relative overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4️⃣ Khazaana - Hackathons & Competitions */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
                className="inline-block mb-6"
              >
                <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <Trophy className="w-12 h-12 text-primary-foreground" />
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Khazaana: Your Treasure Trove
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Participate in exclusive <strong>hackathons</strong>, <strong>competitions</strong>, 
                and <strong>innovation challenges</strong> where you'll compete with the best, 
                showcase your skills, and win amazing prizes. This is where legends are made.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { emoji: "🏆", label: "Win Prizes" },
                  { emoji: "🌟", label: "Gain Recognition" },
                  { emoji: "🚀", label: "Launch Your Career" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-6 rounded-xl"
                  >
                    <div className="text-5xl mb-3">{item.emoji}</div>
                    <p className="font-semibold text-lg">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-10 py-6">
                <Trophy className="w-5 h-5 mr-2" />
                Join Next Competition
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 5️⃣ Social Proof & Testimonials */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Join Thousands of Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Students who started here are now leading startups, working at top tech companies, 
              and changing the world with their innovations.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-2xl text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-4xl text-yellow-500">⭐</span>
                  </motion.div>
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-light text-muted-foreground italic mb-6">
                "This platform is a complete game-changer. The combination of gamified learning, 
                real competitions, and direct mentorship from Ravi Sir is absolutely priceless. 
                I went from a confused student to a confident innovator."
              </blockquote>
              
              <p className="text-lg font-semibold">— Success Story from a Student</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Final CTA - The Gem Reveal */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <AIGradientOrb delay={0} />
          <div className="absolute bottom-0 right-0">
            <AIGradientOrb delay={3} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center space-y-12"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
              className="inline-block text-9xl"
            >
              💎
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-extrabold gradient-text leading-tight">
              This Is Your Gem.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500">
                Don't Miss It.
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              Everything you need to become a tech leader is right here—
              <strong> gamified challenges</strong>, <strong>live leaderboards</strong>, 
              <strong> digital certificates</strong>, <strong>team collaboration</strong>, 
              <strong> expert mentorship</strong>, and <strong>exclusive hackathons</strong>.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl md:text-3xl italic font-light border-l-4 border-primary pl-6 text-left max-w-3xl mx-auto"
            >
              "Innovation happens where curiosity meets courage. Join me, and let's build 
              something extraordinary together."
              <footer className="mt-4 text-lg font-semibold not-italic">— Ravi Rautela</footer>
            </motion.blockquote>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-8 bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                >
                  <Rocket className="w-6 h-6 mr-2" />
                  Claim Your Spot Now
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-xl px-12 py-8 border-2 transition-all duration-300"
                >
                  <MessageSquare className="w-6 h-6 mr-2" />
                  Talk to Ravi
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="pt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {[
                { icon: "🎯", text: "100% Practical" },
                { icon: "⚡", text: "Industry Ready" },
                { icon: "🏆", text: "Career Focused" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <p className="font-semibold text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
