import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
  duration: string;
  status: "upcoming" | "ongoing" | "completed";
  image?: string;
  onActionClick?: () => void;
}

const EventCard = ({
  title,
  description,
  date,
  location,
  participants,
  duration,
  status,
  image,
  onActionClick,
}: EventCardProps) => {
  const statusColors = {
    upcoming: "bg-primary text-primary-foreground",
    ongoing: "bg-success text-success-foreground",
    completed: "bg-muted text-muted-foreground",
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden hover-lift group">
      {/* Image */}
      <div className="relative h-48 bg-gradient-subtle overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl font-bold text-muted/20 gradient-text">{title.charAt(0)}</div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge className={statusColors[status]}>{status}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{participants} participants</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>

        <Button 
          className="w-full bg-gradient-primary hover:shadow-primary" 
          size="sm"
          onClick={onActionClick}
        >
          {status === "upcoming" ? "Register Now" : status === "ongoing" ? "Join Event" : "View Details"}
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
