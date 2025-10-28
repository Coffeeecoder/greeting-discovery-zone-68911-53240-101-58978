import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import EventsPage from "./pages/Events";
import LearningPath from "./pages/LearningPath";
import AboutPage from "./pages/About";
import GetStarted from "./pages/GetStarted";
import ConnectNow from "./pages/ConnectNow";
import EventRegistration from "./pages/EventRegistration";
import CourseEnrollment from "./pages/CourseEnrollment";
import StudentDashboard from "./pages/StudentDashboard";
import StudentEventDashboard from "./pages/StudentEventDashboard";
import StudentEventDetails from "./pages/StudentEventDetails";
import StudentCoursesDashboard from "./pages/StudentCoursesDashboard";
import StudentCoursePage from "./pages/StudentCoursePage";
import JudgeDashboard from "./pages/JudgeDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLayout from "./layouts/AdminLayout";
import AdminOverview from "./pages/admin/AdminOverview";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminTasks from "./pages/admin/AdminTasks";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminChat from "./pages/admin/AdminChat";
import AdminMentorship from "./pages/admin/AdminMentorship";
import AdminLeaderboard from "./pages/admin/AdminLeaderboard";
import AdminCertificates from "./pages/admin/AdminCertificates";
import AdminMedia from "./pages/admin/AdminMedia";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminNotifications from "./pages/admin/AdminNotifications";
import AdminSettings from "./pages/admin/AdminSettings";
import NotFound from "./pages/NotFound";
import AIDomain from "./pages/domains/AIDomain";
import WebDevDomain from "./pages/domains/WebDevDomain";
import CybersecurityDomain from "./pages/domains/CybersecurityDomain";
import BlockchainDomain from "./pages/domains/BlockchainDomain";
import CloudDomain from "./pages/domains/CloudDomain";
import DataScienceDomain from "./pages/domains/DataScienceDomain";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/innovators-route" element={<LearningPath />} />
          <Route path="/innovators-route/ai" element={<AIDomain />} />
          <Route path="/innovators-route/webdev" element={<WebDevDomain />} />
          <Route path="/innovators-route/cybersecurity" element={<CybersecurityDomain />} />
          <Route path="/innovators-route/blockchain" element={<BlockchainDomain />} />
          <Route path="/innovators-route/cloud" element={<CloudDomain />} />
          <Route path="/innovators-route/datascience" element={<DataScienceDomain />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/connect" element={<ConnectNow />} />
          <Route path="/events/register" element={<EventRegistration />} />
          <Route path="/courses/enroll" element={<CourseEnrollment />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/student/courses" element={<StudentCoursesDashboard />} />
          <Route path="/dashboard/student/course/:courseId" element={<StudentCoursePage />} />
          <Route path="/dashboard/student/event/:eventId" element={<StudentEventDashboard />} />
          <Route path="/dashboard/student/event-details/:eventId" element={<StudentEventDetails />} />
          <Route path="/dashboard/judge" element={<JudgeDashboard />} />
          <Route path="/dashboard/admin-old" element={<AdminDashboard />} />
          <Route path="/dashboard/admin" element={<AdminLayout><AdminOverview /></AdminLayout>} />
          <Route path="/dashboard/admin/events" element={<AdminLayout><AdminEvents /></AdminLayout>} />
          <Route path="/dashboard/admin/courses" element={<AdminLayout><AdminCourses /></AdminLayout>} />
          <Route path="/dashboard/admin/tasks" element={<AdminLayout><AdminTasks /></AdminLayout>} />
          <Route path="/dashboard/admin/users" element={<AdminLayout><AdminUsers /></AdminLayout>} />
          <Route path="/dashboard/admin/chat" element={<AdminLayout><AdminChat /></AdminLayout>} />
          <Route path="/dashboard/admin/mentorship" element={<AdminLayout><AdminMentorship /></AdminLayout>} />
          <Route path="/dashboard/admin/leaderboard" element={<AdminLayout><AdminLeaderboard /></AdminLayout>} />
          <Route path="/dashboard/admin/certificates" element={<AdminLayout><AdminCertificates /></AdminLayout>} />
          <Route path="/dashboard/admin/media" element={<AdminLayout><AdminMedia /></AdminLayout>} />
          <Route path="/dashboard/admin/analytics" element={<AdminLayout><AdminAnalytics /></AdminLayout>} />
          <Route path="/dashboard/admin/notifications" element={<AdminLayout><AdminNotifications /></AdminLayout>} />
          <Route path="/dashboard/admin/settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
