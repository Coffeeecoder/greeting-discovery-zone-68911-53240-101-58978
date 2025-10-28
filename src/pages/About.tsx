import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import sirPortrait from "@/assets/sir-portrait.jpg";

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

// Floating Particles Component
const FloatingParticles = ({ count = 30 }: { count?: number }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/30 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        transition={{
          duration: 10 + Math.random() * 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          filter: "blur(1px)",
        }}
      />
    ))}
  </div>
);

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const stats = [
    { emoji: "🌍", value: 25, suffix: "+", label: "Years of Experience" },
    { emoji: "🚀", value: 100, suffix: "+", label: "Startups Mentored" },
    { emoji: "🎓", value: 5000, suffix: "+", label: "Students Trained" },
    { emoji: "💰", value: 50, suffix: " M+", label: "Funding Facilitated" },
    { emoji: "🌾", value: 1000, suffix: "+", label: "Farms Transformed" },
  ];

  const offerings = [
    {
      emoji: "🧠",
      title: "Mentorship that feels personal, not corporate",
      description: "One-on-one guidance tailored to your journey, not a cookie-cutter program."
    },
    {
      emoji: "🛠️",
      title: "Real projects > boring theory",
      description: "Build actual products, solve real problems, and create portfolio pieces that matter."
    },
    {
      emoji: "🌱",
      title: "Build sustainable impact while learning cool tech",
      description: "Work on agritech, edtech, and social entrepreneurship with cutting-edge tools."
    },
    {
      emoji: "🔗",
      title: "Connect with a tribe that actually gets you",
      description: "Join a community of creators, builders, and innovators who share your vision."
    },
  ];

  const values = [
    { text: "Innovation First", emoji: "💡" },
    { text: "People Empowerment", emoji: "🤝" },
    { text: "Social Impact", emoji: "🌍" },
    { text: "Results Driven", emoji: "📈" },
    { text: "Continuous Learning", emoji: "🔁" },
    { text: "Excellence", emoji: "✨" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-violet-100 dark:from-gray-900 dark:via-purple-950 dark:to-violet-950 overflow-hidden font-['Inter']">
      <Navigation />

      {/* Floating Particles Background */}
      <FloatingParticles count={40} />

      {/* 1️⃣ Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/20 dark:bg-violet-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-5xl mx-auto"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-purple-600 to-violet-600 dark:from-cyan-400 dark:via-purple-400 dark:to-violet-400 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hey Future-Builder 👋
            </motion.h1>
            
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm Ravi Rautela.
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I turn ideas into impact and help students become{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                creators, not followers
              </span>
              .
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white border-0 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group"
              >
                🚀 Join My Mentorship Space
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
                className="text-lg px-8 py-6 border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                💡 Explore Your Growth Path
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2️⃣ Vibe Section - Split Screen */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl">
                <img 
                  src={sirPortrait} 
                  alt="Ravi Rautela - Innovation Mentor" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
                Why This Isn't Your Regular About Page
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                This space is for{" "}
                <span className="font-bold text-purple-600 dark:text-purple-400">dreamers who want to do</span>. 
                For students who want to build startups, solve problems, and make the world a little smarter.
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I've spent <span className="font-bold text-cyan-600 dark:text-cyan-400">25+ years</span> figuring out what works — so you don't have to.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Impact Metrics - Animated Counters */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-100/50 dark:via-purple-900/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-400 mb-4">
              Impact by Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Real results, real transformation</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 text-center backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border-2 border-white/20 dark:border-gray-700/20 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="text-5xl mb-3">{stat.emoji}</div>
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ What You'll Get Here - Horizontal Scroll Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              What You'll Get Here
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {offerings.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-8 h-full backdrop-blur-lg bg-gradient-to-br from-white/70 to-purple-50/70 dark:from-gray-800/70 dark:to-purple-900/30 border-2 border-white/20 dark:border-gray-700/20 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Values - Animated Text Reveal */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-violet-500/10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              The Energy That Drives It All
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Card className="p-6 text-center backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border-2 border-white/20 dark:border-gray-700/20 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 cursor-pointer">
                  <div className="text-4xl mb-3">{value.emoji}</div>
                  <div className="text-lg font-bold text-gray-800 dark:text-gray-100">{value.text}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Mission & Vision - Parallax */}
      <section className="py-32 relative overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-400 mb-6">
              The Bigger Picture
            </h2>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              My mission is to make{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">innovation and mentorship accessible</span>{" "}
              to every student who's ready to build.
            </motion.p>

            <motion.p 
              className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              My vision is a future where{" "}
              <span className="font-bold text-cyan-600 dark:text-cyan-400">education meets technology</span>{" "}
              — and students become{" "}
              <span className="font-bold text-violet-600 dark:text-violet-400">change-makers</span>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 7️⃣ Closing CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-purple-100 to-violet-200 dark:from-gray-900 dark:via-purple-950 dark:to-violet-950" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-12"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
              className="inline-block text-8xl"
            >
              ✨
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-purple-600 to-violet-600 dark:from-cyan-400 dark:via-purple-400 dark:to-violet-400 leading-tight">
              Let's Build Something Real
            </h2>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl md:text-3xl italic text-gray-700 dark:text-gray-300 font-light"
            >
              "Innovation happens where curiosity meets courage."
            </motion.blockquote>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 font-semibold">— Ravi Rautela</p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="text-xl px-10 py-7 bg-gradient-to-r from-cyan-600 via-purple-600 to-violet-600 hover:from-cyan-700 hover:via-purple-700 hover:to-violet-700 text-white border-0 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                >
                  ✨ Start My Mentorship Journey
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-xl px-10 py-7 border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  📩 Connect with Ravi
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
