import HeroSection from "@/components/HeroSection";
import AssessmentForm from "@/components/AssessmentForm";
import CourseRecommendations from "@/components/CourseRecommendations";
import AlumniSuccess from "@/components/AlumniSuccess";
import TrustIndicators from "@/components/TrustIndicators";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustIndicators />
      <AssessmentForm />
      <CourseRecommendations />
      <AlumniSuccess />
    </div>
  );
};

export default Index;
