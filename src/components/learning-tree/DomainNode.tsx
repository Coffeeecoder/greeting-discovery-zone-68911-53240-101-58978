import { motion } from "framer-motion";
import { Domain } from "@/data/domains";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface DomainNodeProps {
  domain: Domain;
  isSelected: boolean;
  isHidden: boolean;
  onClick: () => void;
}

// Realistic seed styling with earthy brown tones
const getSeedAccent = (domainId: string) => {
  const accents = {
    ai: "#8B5CF6",
    webdev: "#3B82F6", 
    cybersecurity: "#F59E0B",
    blockchain: "#10B981",
    cloud: "#6366F1",
    datascience: "#F97316",
  };
  return accents[domainId as keyof typeof accents] || accents.ai;
};

export const DomainNode = ({ domain, isSelected, isHidden, onClick }: DomainNodeProps) => {
  const accentColor = getSeedAccent(domain.id);

  return (
    <div onClick={onClick}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{
          opacity: isHidden ? 0 : 1,
          scale: isHidden ? 0.5 : isSelected ? 1.2 : 1,
          x: isSelected ? "50%" : 0,
          y: isSelected ? "-50%" : 0,
        }}
        whileHover={{
          scale: isHidden ? 0.5 : 1.1,
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
        className={`
          absolute cursor-pointer
          ${isHidden ? "pointer-events-none" : ""}
        `}
        style={{
          left: `${domain.position.x}%`,
          top: `${domain.position.y}%`,
        }}
      >
        {/* Seed Container with gentle floating animation */}
        <motion.div 
          className="relative group"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          {/* Ground shadow */}
          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full blur-lg opacity-20"
            style={{
              background: "radial-gradient(ellipse, rgba(0,0,0,0.4), transparent 70%)",
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Hover glow ring */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle, ${accentColor}40, transparent 70%)`,
              filter: "blur(25px)",
              borderRadius: "50% 50% 48% 52%",
            }}
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Orbiting leaves animation */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: isSelected ? 8 : 16,
              ease: "linear",
            }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`orbit-leaf-${i}`}
                className="absolute text-2xl"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${i * 30}deg) translate(90px) rotate(-${i * 30}deg)`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: isSelected ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2],
                  scale: isSelected ? [1, 1.2, 1] : [0.8, 1, 0.8],
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15,
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15,
                  },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  },
                }}
              >
                🌿
              </motion.div>
            ))}
          </motion.div>

          {/* Active/Selected pulsing ring */}
          {isSelected && (
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle, transparent 50%, ${accentColor}50, transparent)`,
                filter: "blur(20px)",
                borderRadius: "50% 50% 48% 52%",
              }}
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Germination sprout on click */}
          {isSelected && (
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 10, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 1],
                y: [10, -10, -10],
                scale: [0, 1, 1],
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <div className="text-3xl">🌱</div>
            </motion.div>
          )}

          {/* Main Seed Body - realistic seed design with teardrop shape */}
          <motion.div
            className="relative w-28 h-36 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #8B6F47 0%, #B8956A 50%, #8B6F47 100%)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 70% 30%",
              boxShadow: `
                0 10px 20px rgba(0,0,0,0.2),
                inset -4px -4px 12px rgba(90, 70, 45, 0.6),
                inset 4px 4px 12px rgba(184, 149, 106, 0.4)
              `,
            }}
            whileHover={{
              boxShadow: `
                0 14px 28px rgba(0,0,0,0.25),
                inset -4px -4px 12px rgba(90, 70, 45, 0.6),
                inset 4px 4px 12px rgba(184, 149, 106, 0.4),
                0 0 30px ${accentColor}50
              `,
            }}
            animate={isSelected ? {
              scale: [1, 1.05, 1],
            } : {}}
            transition={isSelected ? {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            } : {}}
          >
            {/* Subtle texture overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%)",
                mixBlendMode: "overlay",
              }}
            />

            {/* Inner shadow for depth */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: "radial-gradient(ellipse at 20% 20%, transparent 40%, rgba(90, 70, 45, 0.4) 100%)",
              }}
            />

            {/* Glossy highlight on top */}
            <div 
              className="absolute top-0 left-1/4 right-1/4 h-12 opacity-40"
              style={{
                background: "radial-gradient(ellipse at center top, rgba(255,255,255,0.6), transparent 60%)",
              }}
            />

            {/* Small highlight dot */}
            <div 
              className="absolute top-6 right-10 w-3 h-3 rounded-full opacity-50"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.8), transparent)",
              }}
            />

            {/* Domain icon centered with accent color ring */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center gap-2"
              whileHover={{ 
                scale: 1.05,
              }}
            >
              {/* Accent color ring around icon */}
              <div 
                className="absolute w-20 h-20 rounded-full opacity-20"
                style={{
                  background: `radial-gradient(circle, ${accentColor}80, transparent 70%)`,
                }}
              />
              
              <div className="text-5xl drop-shadow-lg relative z-10" style={{ 
                filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.4))" 
              }}>
                {domain.icon}
              </div>
              
              {/* Domain name on seed */}
              <div 
                className="text-xs font-bold text-white/90 px-3 py-1 rounded-full relative z-10"
                style={{
                  background: "rgba(0,0,0,0.2)",
                  backdropFilter: "blur(4px)",
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                {domain.name}
              </div>
            </motion.div>

            {/* Sparkle effect on hover */}
            <motion.div
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-80"
              initial={{ scale: 0, rotate: 0 }}
              whileHover={{ 
                scale: [0, 1, 0.8, 1, 0],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-3 h-3 text-white" />
            </motion.div>
          </motion.div>

          {/* Enhanced hover tooltip */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            whileHover={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap pointer-events-none z-50"
          >
            <motion.div 
              className="relative px-4 py-2 rounded-xl backdrop-blur-md shadow-xl border"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.92))",
                borderColor: `${accentColor}40`,
              }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{domain.icon}</span>
                <div>
                  <div className="text-sm font-bold text-foreground/90">{domain.name}</div>
                  <div className="text-[11px] text-foreground/70">{domain.tagline}</div>
                </div>
              </div>
              <div className="text-[11px] mt-1 font-medium" style={{ color: accentColor }}>
                Tap to grow 🌱
              </div>
              
              {/* Tooltip arrow */}
              <div 
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                style={{
                  background: "rgba(255,255,255,0.98)",
                  borderRight: `1px solid ${accentColor}40`,
                  borderBottom: `1px solid ${accentColor}40`,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
