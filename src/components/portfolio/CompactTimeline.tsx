import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  current?: boolean;
}

interface CompactTimelineProps {
  experiences: Experience[];
  className?: string;
}

const CompactTimeline = ({ experiences, className }: CompactTimelineProps) => {
  return (
    <div className={cn("w-full", className)}>
      {/* Scrollable on small screens, full width on desktop */}
      <div className="overflow-x-auto px-2 md:px-0">
        <div className="relative min-w-[720px] md:min-w-0 px-4">
          {/* Base line */}
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-primary/30" />

          {/* Dots row */}
          <div className="flex items-center justify-between gap-6 md:gap-8 py-6 snap-x snap-mandatory">
            {experiences.map((exp, idx) => (
              <HoverCard key={idx} openDelay={80} closeDelay={80}>
                <HoverCardTrigger asChild>
                  <button
                    type="button"
                    aria-label={`${exp.role} at ${exp.company}`}
                    className="relative group snap-center shrink-0 focus:outline-none"
                  >
                    {/* Outer ring for focus/visibility */}
                    <span className="absolute inset-0 -m-2 rounded-full" />
                    {/* Dot */}
                    <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent ring-4 ring-background shadow hover:scale-110 transition-transform duration-200 block" />
                    {/* Period label */}
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </button>
                </HoverCardTrigger>
                <HoverCardContent align="center" side="top" className="w-80 md:w-[480px] p-0">
                  <Card className="border-2 border-primary/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-base md:text-lg leading-tight">{exp.role}</CardTitle>
                        {exp.current && (
                          <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-success/10 text-success font-medium whitespace-nowrap">
                            Current
                          </span>
                        )}
                      </div>
                      <CardDescription className="text-sm font-semibold text-foreground/80">
                        {exp.company}
                      </CardDescription>
                      <div className="text-xs text-muted-foreground font-medium pt-1">
                        {exp.period}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="space-y-1.5">
                        <h5 className="font-semibold text-xs text-primary">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompactTimeline;
