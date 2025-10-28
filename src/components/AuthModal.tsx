import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type UserRole = "student" | "judge" | "admin";

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store user data in localStorage (frontend-only for now)
    const userData = {
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
      role: selectedRole,
      loggedIn: true,
    };
    
    localStorage.setItem("user", JSON.stringify(userData));
    
    // Navigate based on role
    const dashboardRoutes = {
      student: "/dashboard/student",
      judge: "/dashboard/judge",
      admin: "/dashboard/admin",
    };
    
    onClose();
    navigate(dashboardRoutes[selectedRole]);
  };

  const handleOAuthLogin = (provider: string) => {
    // Placeholder for OAuth login
    const userData = {
      name: `${provider} User`,
      email: `user@${provider}.com`,
      role: selectedRole,
      loggedIn: true,
    };
    
    localStorage.setItem("user", JSON.stringify(userData));
    
    const dashboardRoutes = {
      student: "/dashboard/student",
      judge: "/dashboard/judge",
      admin: "/dashboard/admin",
    };
    
    onClose();
    navigate(dashboardRoutes[selectedRole]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md backdrop-blur-xl bg-card/95 border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">
            {isSignUp ? "Create Your Account" : "Welcome Back"}
          </DialogTitle>
          <DialogDescription>
            {isSignUp 
              ? "Begin your journey of mentorship & innovation" 
              : "Continue your learning journey"}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={selectedRole} onValueChange={(value) => setSelectedRole(value as UserRole)}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="student" className="text-xs sm:text-sm">Student</TabsTrigger>
            <TabsTrigger value="judge" className="text-xs sm:text-sm">Judge</TabsTrigger>
            <TabsTrigger value="admin" className="text-xs sm:text-sm">Admin</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedRole} className="space-y-4">
            <form onSubmit={handleAuth} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required={isSignUp}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-primary hover:shadow-primary">
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Button
                type="button"
                variant="outline"
                className="hover:border-primary/50 hover:bg-primary/5"
                onClick={() => handleOAuthLogin("google")}
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                className="hover:border-primary/50 hover:bg-primary/5"
                onClick={() => handleOAuthLogin("linkedin")}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                className="hover:border-primary/50 hover:bg-primary/5"
                onClick={() => handleOAuthLogin("facebook")}
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary hover:underline"
              >
                {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
              </button>
            </div>

            {!isSignUp && (
              <div className="text-center text-sm">
                <button type="button" className="text-muted-foreground hover:text-primary">
                  Forgot password?
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <p className="text-xs text-center text-muted-foreground italic mt-4 border-t border-border pt-4">
          "Every great journey starts with a single login." 🌟
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
