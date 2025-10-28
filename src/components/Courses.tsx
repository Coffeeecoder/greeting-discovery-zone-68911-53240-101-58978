import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Full Stack Development Masterclass",
    description: "Master React, Node.js, and database design in this comprehensive course",
    level: "Intermediate",
    duration: "12 weeks",
    students: 1250,
    rating: 4.8,
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Learn design thinking, wireframing, prototyping, and user research",
    level: "Beginner",
    duration: "8 weeks",
    students: 890,
    rating: 4.9,
  },
  {
    title: "Data Science & Analytics",
    description: "Python, machine learning, and data visualization for beginners",
    level: "Beginner",
    duration: "10 weeks",
    students: 2100,
    rating: 4.7,
  },
  {
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps with React Native",
    level: "Intermediate",
    duration: "10 weeks",
    students: 750,
    rating: 4.8,
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="gradient-text">Courses by Sir</h2>
          <p className="text-lg text-muted-foreground">
            Learn from industry experts with structured courses designed for your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="glass-card rounded-xl p-8 hover-lift group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-primary-foreground" />
                </div>
                <Badge variant="secondary">{course.level}</Badge>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-muted-foreground mb-6">{course.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground text-sm">(1000+ reviews)</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-primary hover:shadow-primary" asChild>
                <Link to="/courses/enroll">
                  Enroll Now
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link to="/courses">
              View All Courses
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
