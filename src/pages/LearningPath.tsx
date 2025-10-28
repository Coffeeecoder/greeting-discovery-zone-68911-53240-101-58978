import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DomainNode } from "@/components/learning-tree/DomainNode";
import { AnimatedBackground } from "@/components/learning-tree/AnimatedBackground";
import { TimelineTree } from "@/components/learning-tree/TimelineTree";
import { domains, Domain } from "@/data/domains";
import { Sparkles } from "lucide-react";

const LearningPathPage = () => {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);

  const handleDomainClick = (domain: Domain) => {
    setSelectedDomain(domain);
  };

  const handleBack = () => {
    setSelectedDomain(null);
  };

  return (
    <div className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {selectedDomain ? (
          <TimelineTree 
            key="timeline-tree"
            domain={selectedDomain} 
            onBack={handleBack} 
          />
        ) : (
          <motion.div
            key="garden-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            <AnimatedBackground />
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            {/* Micro tagline badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 dark:bg-card/60 backdrop-blur-md border border-primary/20 shadow-sm"
            >
              <span className="text-sm font-semibold text-foreground/80">
                Interactive Knowledge Garden • Explore, Grow, and Bloom
              </span>
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-3"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-success to-secondary bg-clip-text text-transparent">
                  Plant Your Learning Path
                </span>
              </h1>
            </motion.div>

            {/* Subtitle with inspiring copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4 max-w-3xl mx-auto"
            >
              <p className="text-xl md:text-2xl font-medium text-foreground/90">
                Every dream starts as a seed. Choose yours and let it grow into something extraordinary.
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="inline-block px-6 py-3 bg-white/40 dark:bg-card/40 backdrop-blur-sm rounded-2xl border border-success/20"
              >
                <p className="text-base md:text-lg text-muted-foreground flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  Find your seed of curiosity — your future is waiting to bloom
                </p>
              </motion.div>
            </motion.div>


            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="pt-8"
            >
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex flex-col items-center gap-2 text-muted-foreground"
              >
                <span className="text-sm font-medium">Scroll down to explore the garden</span>
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-6 h-10 rounded-full border-2 border-current/50 flex items-start justify-center p-2"
                >
                  <motion.div
                    animate={{
                      y: [0, 12, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-current"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
            </div>
            </section>

            {/* Garden Ground Transition */}
            <section className="relative h-40 overflow-hidden">
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(142,40%,85%)] to-[hsl(142,35%,75%)] dark:from-transparent dark:via-[hsl(142,30%,25%)] dark:to-[hsl(142,35%,20%)]"
        >
          {/* Grass blades */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`grass-${i}`}
              className="absolute bottom-0 w-1 bg-success/30 dark:bg-success/20 rounded-t-full"
              style={{
                left: `${5 + i * 6}%`,
                height: `${20 + Math.random() * 30}px`,
              }}
              animate={{
                scaleY: [1, 1.1, 1],
                x: [0, Math.random() * 3 - 1.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
        
        {/* Subtle flowers in grass */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`flower-${i}`}
            className="absolute bottom-8 text-xl"
            style={{
              left: `${10 + i * 11}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{
              delay: 0.8 + i * 0.1,
              type: "spring",
              stiffness: 150,
            }}
          >
            {i % 3 === 0 ? "🌼" : i % 3 === 1 ? "🌸" : "🌺"}
          </motion.div>
            ))}
            </section>

            {/* Domain Explorer */}
            <section className="relative min-h-[600px] py-20 bg-gradient-to-b from-[hsl(142,35%,75%)] to-[hsl(180,45%,88%)] dark:from-[hsl(142,35%,20%)] dark:to-[hsl(180,25%,15%)]">
              <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-primary via-success to-secondary bg-clip-text text-transparent">
                      Your Learning Garden
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-2">
                    Every idea starts as a seed 🌱
                  </p>
                  <p className="text-base text-muted-foreground max-w-xl mx-auto">
                    Tap a seed. Grow your skills. Harvest innovation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative w-full h-[600px]"
                >
                  {domains.map((domain) => (
                    <div
                      key={domain.id}
                      onClick={() => handleDomainClick(domain)}
                      className="cursor-pointer"
                    >
                      <DomainNode
                        domain={domain}
                        isSelected={false}
                        isHidden={false}
                        onClick={() => handleDomainClick(domain)}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Motivational Section */}
            <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-white/50 dark:bg-card/50 backdrop-blur-md p-12 rounded-3xl border border-primary/20 shadow-lg relative overflow-hidden">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-success/40 to-transparent" />
            
            <motion.div
              animate={{ 
                rotate: [0, 8, -8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🌱
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-success to-secondary bg-clip-text text-transparent">
              Seeds of Knowledge, Forests of Innovation
            </h2>
            <p className="text-xl text-foreground/80 mb-4">
              Every domain starts as a seed. Plant it, nurture it, watch it branch into your future.
            </p>
            <p className="text-lg text-muted-foreground italic">
              "You're not just learning — you're blooming." 🌿
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <span>🌱</span>
              <span>→</span>
              <span>🌿</span>
              <span>→</span>
              <span>🌳</span>
              <span className="ml-2">Your growth journey awaits</span>
            </div>
          </div>
            </div>
            </motion.section>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LearningPathPage;
