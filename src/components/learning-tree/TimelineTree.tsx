import { motion } from "framer-motion";
import { Domain } from "@/data/domains";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface TimelineTreeProps {
  domain: Domain;
  onBack: () => void;
}

interface BranchNodeData {
  title: string;
  description: string;
  items: string[];
  side: "left" | "right";
  icon: string;
}

export const TimelineTree = ({ domain, onBack }: TimelineTreeProps) => {
  // Convert domain data into timeline branches
  const branches: BranchNodeData[] = [
    {
      title: "Sub-Domains",
      description: "Core areas of expertise within this field",
      items: domain.subDomains,
      side: "left",
      icon: "🌿",
    },
    {
      title: "Essential Tools",
      description: "Technologies and frameworks you'll master",
      items: domain.tools,
      side: "right",
      icon: "🛠️",
    },
    {
      title: "Required Skills",
      description: "Key competencies for success",
      items: domain.skills,
      side: "left",
      icon: "💡",
    },
    {
      title: "Career Roles",
      description: "Professional positions you can pursue",
      items: domain.roles,
      side: "right",
      icon: "🎯",
    },
    {
      title: "Market Insights",
      description: "Industry demand and growth potential",
      items: [domain.marketDemand, domain.careerGrowth],
      side: "left",
      icon: "📈",
    },
    {
      title: "Earning Potential",
      description: "Expected salary ranges",
      items: [`Entry Level: ${domain.salary.fresher}`, `Experienced: ${domain.salary.experienced}`],
      side: "right",
      icon: "💰",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-auto bg-background"
    >
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-6 left-6 z-50"
      >
        <Button
          variant="outline"
          onClick={onBack}
          className="gap-2 backdrop-blur-sm bg-background/80"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Garden 🌱
        </Button>
      </motion.div>

      {/* Seed dropping and planting animation */}
      <motion.div
        initial={{ y: -100, scale: 1, opacity: 1 }}
        animate={{ 
          y: [0, 200],
          scale: [1, 0.5],
          opacity: [1, 0]
        }}
        transition={{ 
          duration: 1,
          ease: "easeIn",
        }}
        className="absolute top-20 left-1/2 -translate-x-1/2 text-7xl z-20"
      >
        {domain.icon}
      </motion.div>

      {/* Ground soil layer */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute top-[220px] left-0 right-0 h-8 bg-gradient-to-b from-[hsl(142,35%,75%)] to-transparent dark:from-[hsl(142,35%,20%)] dark:to-transparent"
      />

      {/* Main vertical trunk */}
      <div className="relative container mx-auto px-4 pt-[240px] pb-20">
        <div className="relative max-w-6xl mx-auto">
          {/* Central trunk line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 origin-top"
            initial={{ height: 0 }}
            animate={{ height: `${branches.length * 400 + 400}px` }}
            transition={{ delay: 1.2, duration: 2, ease: "easeOut" }}
            style={{
              width: "12px",
              background: "linear-gradient(to bottom, #92400e 0%, #78350f 40%, #654321 70%, #8B4513 100%)",
              boxShadow: "inset 3px 0 8px rgba(0,0,0,0.4), inset -3px 0 8px rgba(0,0,0,0.4), 0 0 15px rgba(146,64,14,0.2)",
              borderRadius: "6px",
            }}
          />

          {/* Trunk texture */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`texture-${i}`}
              className="absolute left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.3, scaleX: 1 }}
              transition={{ delay: 1.5 + (i * 0.05), duration: 0.2 }}
              style={{
                width: "16px",
                height: "2px",
                background: "#451a03",
                top: `${i * 60}px`,
                borderRadius: "2px",
              }}
            />
          ))}

          {/* Tree crown at top */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 2, type: "spring", stiffness: 100 }}
            className="relative mb-20 text-center"
          >
            <div className="text-8xl mb-6 relative z-10">{domain.icon}</div>
            <motion.div
              className="absolute inset-0 blur-3xl -z-10"
              style={{ background: `radial-gradient(circle, ${domain.glowColor}, transparent 70%)` }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            {/* Leaves around crown */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`crown-leaf-${i}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: [0.6, 0.8, 0.6],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  delay: 2.2 + (i * 0.08),
                  duration: 3,
                  repeat: Infinity,
                  opacity: { duration: 2, repeat: Infinity },
                  rotate: { duration: 4, repeat: Infinity }
                }}
                className="absolute text-3xl"
                style={{
                  left: `${50 + Math.cos((i * 30) * Math.PI / 180) * 100}px`,
                  top: `${50 + Math.sin((i * 30) * Math.PI / 180) * 100}px`,
                }}
              >
                🍃
              </motion.div>
            ))}

            <h1 
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${domain.color})` }}
            >
              {domain.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {domain.description}
            </p>
          </motion.div>

          {/* Timeline branches */}
          <div className="space-y-32 mt-20">
            {branches.map((branch, index) => (
              <TimelineBranch
                key={index}
                branch={branch}
                index={index}
                totalBranches={branches.length}
                color={domain.color}
                glowColor={domain.glowColor}
              />
            ))}
          </div>

          {/* Roots at bottom */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="relative mt-32 text-center"
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              🌱
            </motion.div>
            <p className="text-lg text-muted-foreground">
              Your growth journey starts here
            </p>
          </motion.div>

          {/* Root tendrils */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`root-${i}`}
              className="absolute origin-top"
              initial={{ 
                scaleY: 0, 
                opacity: 0,
              }}
              animate={{ 
                scaleY: 1, 
                opacity: 0.3,
              }}
              transition={{ 
                delay: 3.2 + (i * 0.1), 
                duration: 1,
              }}
              style={{
                left: `calc(50% + ${(i - 4) * 40}px)`,
                bottom: "-80px",
                width: "3px",
                height: "100px",
                background: "linear-gradient(to bottom, rgba(146, 64, 14, 0.6), transparent)",
                transform: `rotate(${(i - 4) * 15}deg)`,
                transformOrigin: "top center"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Timeline Branch Component
interface TimelineBranchProps {
  branch: BranchNodeData;
  index: number;
  totalBranches: number;
  color: string;
  glowColor: string;
}

const TimelineBranch = ({ branch, index, totalBranches, color, glowColor }: TimelineBranchProps) => {
  const baseDelay = 2.5 + (index * 0.4);
  const isLeft = branch.side === "left";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: baseDelay }}
      className="relative"
    >
      {/* Branch connector from trunk */}
      <svg
        className="absolute top-0 pointer-events-none z-0"
        style={{
          left: isLeft ? "10%" : "50%",
          width: isLeft ? "40%" : "40%",
          height: "120px",
        }}
      >
        <motion.path
          d={isLeft 
            ? "M 400 60 Q 200 60, 0 100"  // Left branch curve
            : "M 0 60 Q 200 60, 400 100"   // Right branch curve
          }
          fill="none"
          stroke="#78350f"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ delay: baseDelay, duration: 0.8, ease: "easeOut" }}
        />
        
        {/* Small offshoots */}
        {[...Array(2)].map((_, i) => (
          <motion.line
            key={i}
            x1={isLeft ? 300 - (i * 100) : 100 + (i * 100)}
            y1={65 + (i * 10)}
            x2={isLeft ? 280 - (i * 100) : 120 + (i * 100)}
            y2={50 + (i * 10)}
            stroke="#78350f"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ delay: baseDelay + 0.3 + (i * 0.1), duration: 0.4 }}
          />
        ))}
      </svg>

      {/* Branch content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ 
          delay: baseDelay + 0.4, 
          type: "spring",
          stiffness: 100,
        }}
        className={`relative ${isLeft ? "mr-auto" : "ml-auto"} w-full md:w-5/12`}
        style={{
          marginLeft: isLeft ? "0" : "auto",
          marginRight: isLeft ? "auto" : "0",
        }}
      >
        {/* Branch node indicator on trunk */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: baseDelay, type: "spring" }}
          className="absolute top-16 w-8 h-8 rounded-full border-4 border-background z-10"
          style={{
            [isLeft ? "right" : "left"]: "-4rem",
            background: `linear-gradient(135deg, ${color})`,
            boxShadow: `0 0 20px ${glowColor}, inset 0 2px 4px rgba(255,255,255,0.3)`,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${glowColor}, transparent)`,
              filter: "blur(8px)",
            }}
          />
        </motion.div>

        {/* Content card */}
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          className="relative p-6 rounded-2xl backdrop-blur-md border overflow-hidden group"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
            borderColor: `${glowColor}40`,
            boxShadow: `0 8px 32px ${glowColor}20, 0 0 0 1px ${glowColor}10 inset`,
          }}
        >
          {/* Accent gradient on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${isLeft ? 'right' : 'left'}, ${glowColor}15, transparent 70%)`,
            }}
          />

          {/* Icon and Title */}
          <div className="relative z-10 mb-4">
            <div className="flex items-center gap-3 mb-2">
              <motion.span
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-4xl"
              >
                {branch.icon}
              </motion.span>
              <h3 
                className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, ${color})` }}
              >
                {branch.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground pl-14">
              {branch.description}
            </p>
          </div>

          {/* Items list */}
          <div className="relative z-10 space-y-2">
            {branch.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: baseDelay + 0.6 + (i * 0.1),
                  type: "spring",
                }}
                whileHover={{ x: isLeft ? 4 : -4 }}
                className="flex items-start gap-2 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-card/50 transition-colors group/item"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                  className="text-sm mt-0.5"
                >
                  🌿
                </motion.span>
                <p className="text-sm font-medium text-foreground/80 group-hover/item:text-foreground">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Decorative leaf */}
          <motion.div
            className="absolute -bottom-2 opacity-20 group-hover:opacity-40 transition-opacity text-5xl"
            style={{
              [isLeft ? "left" : "right"]: "-1rem",
            }}
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            🍃
          </motion.div>
        </motion.div>

        {/* Floating leaves around content */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`leaf-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: [0, (isLeft ? -30 : 30) * (i + 1)],
              y: [0, -20 - (i * 10), -40 - (i * 20)],
            }}
            transition={{
              delay: baseDelay + 1 + (i * 0.5),
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="absolute top-0 text-2xl pointer-events-none"
            style={{
              [isLeft ? "right" : "left"]: "2rem",
            }}
          >
            🍃
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
